import { EVENTS } from "@/data/events";
import { TourismEvent } from "@/types/common";
import { getPayloadClient } from "@/lib/payload";

interface EventDoc {
  id: string | number;
  slug: string;
  title: string;
  tagline?: string;
  description?: string;
  startDate: string;
  endDate?: string;
  location?: string;
  category?: string;
  coverImage?: string;
  isFeatured?: boolean;
}

function mapDocToEvent(doc: EventDoc): TourismEvent {
  return {
    id: String(doc.id),
    slug: doc.slug,
    title: doc.title,
    tagline: doc.tagline || "",
    description: doc.description || "",
    startDate: doc.startDate || "",
    endDate: doc.endDate,
    location: doc.location || "",
    category: doc.category || "",
    coverImage: doc.coverImage || "",
    isFeatured: Boolean(doc.isFeatured),
  };
}

export async function getAllEvents(): Promise<TourismEvent[]> {
  try {
    const payload = await getPayloadClient();
    if (payload) {
      const res = await payload.find({
        collection: "events",
        limit: 100,
      });
      if (res.docs.length > 0) {
        return (res.docs as unknown as EventDoc[]).map(mapDocToEvent);
      }
    }
  } catch {
    // Graceful fallback to mock data
  }
  return EVENTS;
}

export async function getUpcomingEvents(): Promise<TourismEvent[]> {
  try {
    const payload = await getPayloadClient();
    if (payload) {
      const res = await payload.find({
        collection: "events",
        limit: 100,
      });
      if (res.docs.length > 0) {
        return (res.docs as unknown as EventDoc[]).map(mapDocToEvent);
      }
    }
  } catch {
    // Graceful fallback to mock data
  }
  return EVENTS;
}

export async function getEventBySlug(slug: string): Promise<TourismEvent | null> {
  try {
    const payload = await getPayloadClient();
    if (payload) {
      const res = await payload.find({
        collection: "events",
        where: { slug: { equals: slug } },
        limit: 1,
      });
      if (res.docs.length > 0) {
        return mapDocToEvent(res.docs[0] as unknown as EventDoc);
      }
    }
  } catch {
    // Graceful fallback to mock data
  }
  const found = EVENTS.find((e) => e.slug === slug);
  return found || null;
}
