import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";

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

export default buildConfig({
  serverURL: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  secret: process.env.PAYLOAD_SECRET || "mulugu_tourism_default_secret_key_change_in_production",
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
  editor: lexicalEditor(),
  typescript: {
    outputFile: path.resolve(dirname, "types/payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URI || "",
      ssl:
        process.env.DATABASE_URI?.includes("neon.tech") ||
        process.env.DATABASE_URI?.includes("sslmode=require")
          ? { rejectUnauthorized: false }
          : undefined,
    },
  }),
});
