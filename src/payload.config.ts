import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { vercelBlobStorage } from "@payloadcms/storage-vercel-blob";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";

import sharp from "sharp";

import PlacesCollection from "./collections/Places";
import BusinessesCollection from "./collections/Businesses";
import CategoriesCollection from "./collections/Categories";
import EventsCollection from "./collections/Events";
import ArticlesCollection from "./collections/Articles";
import ItinerariesCollection from "./collections/Itineraries";
import MediaCollection from "./collections/Media";
import UsersCollection from "./collections/Users";

import SiteSettingsGlobal from "./globals/SiteSettings";
import HomepageGlobal from "./globals/Homepage";
import FooterGlobal from "./globals/Footer";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

if (process.env.VERCEL === "1") {
  for (const key of ["DATABASE_URI", "PAYLOAD_SECRET", "BLOB_READ_WRITE_TOKEN"]) {
    if (!process.env[key]) {
      throw new Error(`Missing required Vercel environment variable: ${key}`);
    }
  }
}

const getServerUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_ENV === "preview" && process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "http://localhost:3000";
};

export default buildConfig({
  serverURL: getServerUrl(),
  secret: process.env.PAYLOAD_SECRET || "mulugu_tourism_default_secret_key_change_in_production",
  sharp,
  admin: {
    user: UsersCollection.slug,
    meta: {
      titleSuffix: " | Discover Mulugu CMS",
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    PlacesCollection,
    BusinessesCollection,
    CategoriesCollection,
    EventsCollection,
    ArticlesCollection,
    ItinerariesCollection,
    MediaCollection,
    UsersCollection,
  ],
  globals: [SiteSettingsGlobal, HomepageGlobal, FooterGlobal],
  plugins: [
    vercelBlobStorage({
      enabled: Boolean(process.env.BLOB_READ_WRITE_TOKEN),
      collections: { media: true },
      token: process.env.BLOB_READ_WRITE_TOKEN,
      clientUploads: true,
    }),
  ],
  editor: lexicalEditor(),
  typescript: {
    outputFile: path.resolve(dirname, "types/payload-types.ts"),
  },
  db: postgresAdapter({
    push: false,
    pool: {
      connectionString: process.env.DATABASE_URI || "",
      ssl:
        process.env.DATABASE_URI?.includes("neon.tech") ||
        process.env.DATABASE_URI?.includes("sslmode=") ||
        process.env.NODE_ENV === "production"
          ? { rejectUnauthorized: false }
          : undefined,
    },
  }),
});
