import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

import { CATEGORIES } from "@/data/categories";
import { PLACES } from "@/data/places";
import { BUSINESSES } from "@/data/businesses";
import { EVENTS } from "@/data/events";
import { ARTICLES } from "@/data/articles";
import { ITINERARIES } from "@/data/itineraries";

/**
 * Idempotent seed function for Discover Mulugu tourism data.
 * Safe to run multiple times without duplicating data.
 */
export async function seedDatabase() {
  const { getPayloadClient } = await import("./payload");
  const payload = await getPayloadClient();
  if (!payload) {
    throw new Error("Payload client could not be initialized.");
  }

  console.log("🌱 Starting idempotent database seed...");

  // 1. Seed Categories
  console.log("Seeding categories...");
  for (const cat of CATEGORIES) {
    const existing = await payload.find({
      collection: "categories",
      where: { slug: { equals: cat.slug } },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "categories",
        data: {
          title: cat.title,
          slug: cat.slug,
          description: cat.description,
          icon: cat.icon,
          color: cat.color,
        },
      });
      console.log(`  + Created category: ${cat.title}`);
    } else {
      console.log(`  ~ Category already exists: ${cat.title}`);
    }
  }

  // 2. Seed Places
  console.log("Seeding places...");
  for (const place of PLACES) {
    const existing = await payload.find({
      collection: "places",
      where: { slug: { equals: place.slug } },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "places",
        data: {
          title: place.title,
          teluguTitle: place.teluguTitle,
          slug: place.slug,
          tagline: place.tagline,
          category: place.category,
          categoryLabel: place.categoryLabel,
          description: place.description,
          location: place.location,
          coordinates: {
            lat: place.coordinates.lat,
            lng: place.coordinates.lng,
          },
          featuredImage: place.featuredImage,
          gallery: place.gallery?.map((g) => ({
            url: g.url,
            alt: g.alt,
            caption: g.caption,
          })),
          timings: place.timings,
          entryFee: place.entryFee,
          bestTimeToVisit: place.bestTimeToVisit,
          distanceFromDistrictHQ: place.distanceFromDistrictHQ,
          isFeatured: place.isFeatured ?? false,
          isUNESCO: place.isUNESCO ?? false,
          rating: place.rating,
          highlights: place.highlights?.map((item) => ({ item })),
          tipsForVisitors: place.tipsForVisitors?.map((tip) => ({ tip })),
          nearbyPlaces: place.nearbyPlaces?.map((slug) => ({ slug })),
          nearbyBusinesses: place.nearbyBusinesses?.map((slug) => ({ slug })),
        },
      });
      console.log(`  + Created place: ${place.title}`);
    } else {
      console.log(`  ~ Place already exists: ${place.title}`);
    }
  }

  // 3. Seed Businesses
  console.log("Seeding businesses...");
  for (const biz of BUSINESSES) {
    const existing = await payload.find({
      collection: "businesses",
      where: { slug: { equals: biz.slug } },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "businesses",
        data: {
          name: biz.name,
          slug: biz.slug,
          category: biz.category,
          categoryLabel: biz.categoryLabel,
          tagline: biz.tagline,
          description: biz.description,
          address: biz.address,
          location: biz.location,
          coordinates: biz.coordinates
            ? {
                lat: biz.coordinates.lat,
                lng: biz.coordinates.lng,
              }
            : undefined,
          phone: biz.phone,
          email: biz.email,
          website: biz.website,
          featuredImage: biz.featuredImage,
          pricingRange: biz.pricingRange,
          rating: biz.rating,
          reviewCount: biz.reviewCount,
          isVerified: biz.isVerified ?? false,
          isFeatured: biz.isFeatured ?? false,
          amenities: biz.amenities?.map((item) => ({ item })),
        },
      });
      console.log(`  + Created business: ${biz.name}`);
    } else {
      console.log(`  ~ Business already exists: ${biz.name}`);
    }
  }

  // 4. Seed Events
  console.log("Seeding events...");
  for (const evt of EVENTS) {
    const existing = await payload.find({
      collection: "events",
      where: { slug: { equals: evt.slug } },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "events",
        data: {
          title: evt.title,
          slug: evt.slug,
          tagline: evt.tagline,
          description: evt.description,
          startDate: evt.startDate,
          endDate: evt.endDate,
          location: evt.location,
          category: evt.category,
          coverImage: evt.coverImage,
          isFeatured: evt.isFeatured ?? false,
        },
      });
      console.log(`  + Created event: ${evt.title}`);
    } else {
      console.log(`  ~ Event already exists: ${evt.title}`);
    }
  }

  // 5. Seed Articles
  console.log("Seeding articles...");
  for (const art of ARTICLES) {
    const existing = await payload.find({
      collection: "articles",
      where: { slug: { equals: art.slug } },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "articles",
        data: {
          title: art.title,
          slug: art.slug,
          excerpt: art.excerpt,
          category: art.category,
          readTime: art.readTime,
          content: art.content,
          coverImage: art.coverImage,
        },
      });
      console.log(`  + Created article: ${art.title}`);
    } else {
      console.log(`  ~ Article already exists: ${art.title}`);
    }
  }

  // 6. Seed Itineraries
  console.log("Seeding itineraries...");
  for (const itin of ITINERARIES) {
    const existing = await payload.find({
      collection: "itineraries",
      where: { slug: { equals: itin.slug } },
      limit: 1,
    });

    if (existing.totalDocs === 0) {
      await payload.create({
        collection: "itineraries",
        data: {
          title: itin.title,
          slug: itin.slug,
          duration: itin.duration,
          summary: itin.summary,
          coverImage: itin.coverImage,
          highlights: itin.highlights?.map((item) => ({ item })),
          days: itin.days?.map((d) => ({
            day: d.day,
            title: d.title,
            description: d.description,
            activities: d.activities?.map((item) => ({ item })),
            recommendedPlaces: d.recommendedPlaces?.map((slug) => ({ slug })),
          })),
        },
      });
      console.log(`  + Created itinerary: ${itin.title}`);
    } else {
      console.log(`  ~ Itinerary already exists: ${itin.title}`);
    }
  }

  // 7. Seed Globals (site-settings, homepage, footer).
  // Create the first admin through /admin so no shared password is distributed.
  console.log("Checking CMS globals...");
  try {
    const siteSettings = await payload.findGlobal({ slug: "site-settings" });
    if (!siteSettings?.siteName) {
      await payload.updateGlobal({
        slug: "site-settings",
        data: {
          siteName: "Discover Mulugu",
          tagline: "The UNESCO Heritage & Eco-Tourism Capital of Telangana",
          contactPhone: "+91 8715 220000",
          contactEmail: "contact@discovermulugu.org",
          emergencyPolice: "100",
          emergencyAmbulance: "108",
          emergencyForestHelpline: "1800 425 5364",
        },
      });
      console.log("  + Initialized site-settings global");
    } else {
      console.log("  ~ site-settings global already configured");
    }
  } catch (err) {
    console.warn("  ~ Notice: site-settings global:", err);
  }

  try {
    const homepage = await payload.findGlobal({ slug: "homepage" });
    if (!homepage?.heroHeading) {
      await payload.updateGlobal({
        slug: "homepage",
        data: {
          heroHeading: "Discover Mulugu: Sacred Temples & Untamed Wilderness",
          heroSubtitle:
            "Home to the UNESCO World Heritage Ramappa Temple, Laknavaram's 13 island lakes, roaring Bogatha Falls, and the spiritual power of Medaram Jatara.",
          heroBackgroundUrl:
            "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80",
        },
      });
      console.log("  + Initialized homepage global");
    } else {
      console.log("  ~ homepage global already configured");
    }
  } catch (err) {
    console.warn("  ~ Notice: homepage global:", err);
  }

  try {
    const footer = await payload.findGlobal({ slug: "footer" });
    if (!footer?.aboutText) {
      await payload.updateGlobal({
        slug: "footer",
        data: {
          aboutText:
            "An independent community eco-tourism initiative dedicated to showcasing Mulugu's rich Kakatiya heritage, pristine nature, and local cultural traditions.",
          copyright: "© 2026 Discover Mulugu. All rights reserved.",
        },
      });
      console.log("  + Initialized footer global");
    } else {
      console.log("  ~ footer global already configured");
    }
  } catch (err) {
    console.warn("  ~ Notice: footer global:", err);
  }

  console.log("✅ Seed completed successfully!");
}

// Allow direct CLI execution: npx tsx src/lib/seed.ts
if (process.argv[1]?.includes("seed")) {
  seedDatabase()
    .then(() => process.exit(0))
    .catch((err) => {
      console.error("❌ Seed failed:", err);
      process.exit(1);
    });
}
