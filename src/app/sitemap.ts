import { MetadataRoute } from "next";
import { getAllPlaces } from "@/lib/queries/places";
import { getAllBusinesses } from "@/lib/queries/businesses";
import { getAllEvents } from "@/lib/queries/events";
import { getAllArticles } from "@/lib/queries/articles";
import { getAllItineraries } from "@/lib/queries/itineraries";
import { SITE_CONFIG } from "@/lib/constants";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = SITE_CONFIG.url;

  const staticRoutes = [
    "",
    "/explore",
    "/heritage",
    "/businesses",
    "/food",
    "/experiences",
    "/events",
    "/guides",
    "/itineraries",
    "/map",
    "/about",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1.0 : 0.8,
  }));

  const [places, businesses, events, articles, itineraries] = await Promise.all([
    getAllPlaces().catch(() => []),
    getAllBusinesses().catch(() => []),
    getAllEvents().catch(() => []),
    getAllArticles().catch(() => []),
    getAllItineraries().catch(() => []),
  ]);

  const placeRoutes = places.map((place) => ({
    url: `${baseUrl}/places/${place.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: place.isUNESCO ? 0.9 : 0.8,
  }));

  const businessRoutes = businesses.map((b) => ({
    url: `${baseUrl}/businesses/${b.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  const eventRoutes = events.map((e) => ({
    url: `${baseUrl}/events/${e.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const articleRoutes = articles.map((a) => ({
    url: `${baseUrl}/guides/${a.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  const itineraryRoutes = itineraries.map((i) => ({
    url: `${baseUrl}/itineraries/${i.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...placeRoutes,
    ...businessRoutes,
    ...eventRoutes,
    ...articleRoutes,
    ...itineraryRoutes,
  ];
}
