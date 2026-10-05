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
    category: doc.category || "Festival",
    coverImage: doc.coverImage || "",
    isFeatured: Boolean(doc.isFeatured),
  };
}

import { EVENTS } from "@/data/events";

export async function getAllEvents(): Promise<TourismEvent[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "events",
      limit: 100,
    });
    if (res.docs && res.docs.length > 0) {
      return (res.docs as unknown as EventDoc[]).map(mapDocToEvent);
    }
    return EVENTS;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn("Using fallback events data. Reason:", sanitizedMsg);
    return EVENTS;
  }
}

export async function getUpcomingEvents(): Promise<TourismEvent[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "events",
      limit: 100,
      sort: "startDate",
    });
    if (res.docs && res.docs.length > 0) {
      return (res.docs as unknown as EventDoc[]).map(mapDocToEvent);
    }
    return EVENTS;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn("Using fallback upcoming events data. Reason:", sanitizedMsg);
    return EVENTS;
  }
}

export async function getEventBySlug(slug: string): Promise<TourismEvent | null> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "events",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs && res.docs.length > 0) {
      return mapDocToEvent(res.docs[0] as unknown as EventDoc);
    }
    return EVENTS.find((e) => e.slug === slug) || null;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn(`Using fallback event data for "${slug}". Reason:`, sanitizedMsg);
    return EVENTS.find((e) => e.slug === slug) || null;
  }
}
