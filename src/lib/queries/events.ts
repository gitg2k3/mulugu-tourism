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

export async function getAllEvents(): Promise<TourismEvent[]> {
  try {
    const payload = await getPayloadClient();
    if (!payload) return [];

    const res = await payload.find({
      collection: "events",
      limit: 100,
    });
    return (res.docs as unknown as EventDoc[]).map(mapDocToEvent);
  } catch (error) {
    console.error("Failed to query events from Payload CMS:", error);
    return [];
  }
}

export async function getUpcomingEvents(): Promise<TourismEvent[]> {
  try {
    const payload = await getPayloadClient();
    if (!payload) return [];

    const res = await payload.find({
      collection: "events",
      limit: 100,
      sort: "startDate",
    });
    return (res.docs as unknown as EventDoc[]).map(mapDocToEvent);
  } catch (error) {
    console.error("Failed to query upcoming events from Payload CMS:", error);
    return [];
  }
}

export async function getEventBySlug(slug: string): Promise<TourismEvent | null> {
  try {
    const payload = await getPayloadClient();
    if (!payload) return null;

    const res = await payload.find({
      collection: "events",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length > 0) {
      return mapDocToEvent(res.docs[0] as unknown as EventDoc);
    }
    return null;
  } catch (error) {
    console.error(`Failed to query event "${slug}" from Payload CMS:`, error);
    return null;
  }
}
