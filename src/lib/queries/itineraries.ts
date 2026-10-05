import { Itinerary } from "@/types/common";
import { getPayloadClient } from "@/lib/payload";

interface ItineraryHighlightDoc {
  item?: string;
}
interface ItineraryActivityDoc {
  item?: string;
}
interface ItineraryPlaceDoc {
  slug?: string;
}
interface ItineraryDayDoc {
  day?: number;
  title?: string;
  description?: string;
  activities?: (string | ItineraryActivityDoc)[];
  recommendedPlaces?: (string | ItineraryPlaceDoc)[];
}
interface ItineraryDoc {
  id: string | number;
  slug: string;
  title: string;
  duration: string;
  summary?: string;
  coverImage?: string;
  highlights?: (string | ItineraryHighlightDoc)[];
  days?: ItineraryDayDoc[];
}

function mapDocToItinerary(doc: ItineraryDoc): Itinerary {
  return {
    id: String(doc.id),
    slug: doc.slug,
    title: doc.title,
    duration: doc.duration || "",
    summary: doc.summary || "",
    coverImage: doc.coverImage || "",
    highlights:
      doc.highlights
        ?.map((h) => (typeof h === "string" ? h : h.item || ""))
        .filter((item): item is string => Boolean(item)) || [],
    days:
      doc.days?.map((d, index) => ({
        day: typeof d.day === "number" ? d.day : index + 1,
        title: d.title || `Day ${index + 1}`,
        description: d.description || "",
        activities:
          d.activities
            ?.map((a) => (typeof a === "string" ? a : a.item || ""))
            .filter((item): item is string => Boolean(item)) || [],
        recommendedPlaces:
          d.recommendedPlaces
            ?.map((p) => (typeof p === "string" ? p : p.slug || ""))
            .filter((slug): slug is string => Boolean(slug)) || [],
      })) || [],
  };
}

export async function getAllItineraries(): Promise<Itinerary[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "itineraries",
      limit: 100,
    });
    return (res.docs as unknown as ItineraryDoc[]).map(mapDocToItinerary);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query itineraries from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to retrieve itineraries.");
  }
}

export async function getItineraryBySlug(slug: string): Promise<Itinerary | null> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "itineraries",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length > 0) {
      return mapDocToItinerary(res.docs[0] as unknown as ItineraryDoc);
    }
    return null;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error(`Failed to query itinerary "${slug}" from Payload CMS:`, sanitizedMsg);
    throw new Error(`Unable to retrieve itinerary "${slug}".`);
  }
}
