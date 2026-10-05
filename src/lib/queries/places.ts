import { Place, PlaceCategory } from "@/types/place";
import { getPayloadClient } from "@/lib/payload";

interface PlaceHighlightDoc {
  item?: string;
}
interface PlaceTipDoc {
  tip?: string;
}
interface PlaceSlugDoc {
  slug?: string;
}
interface PlaceGalleryDoc {
  id?: string;
  url: string;
  alt?: string;
  caption?: string;
}
interface PlaceDoc {
  id: string | number;
  slug: string;
  title: string;
  teluguTitle?: string;
  tagline?: string;
  category: string;
  categoryLabel?: string;
  description: string;
  location: string;
  coordinates?: { lat: number; lng: number };
  featuredImage?: string;
  gallery?: PlaceGalleryDoc[];
  timings?: string;
  entryFee?: string;
  bestTimeToVisit?: string;
  distanceFromDistrictHQ?: string;
  isFeatured?: boolean;
  isUNESCO?: boolean;
  rating?: number;
  highlights?: (string | PlaceHighlightDoc)[];
  tipsForVisitors?: (string | PlaceTipDoc)[];
  nearbyPlaces?: (string | PlaceSlugDoc)[];
  nearbyBusinesses?: (string | PlaceSlugDoc)[];
}

function mapDocToPlace(doc: PlaceDoc): Place {
  return {
    id: String(doc.id),
    slug: doc.slug,
    title: doc.title,
    teluguTitle: doc.teluguTitle,
    tagline: doc.tagline || "",
    description: doc.description || "",
    category: (doc.category as PlaceCategory) || "heritage",
    categoryLabel: doc.categoryLabel || doc.category,
    location: doc.location || "",
    coordinates: doc.coordinates || { lat: 0, lng: 0 },
    featuredImage: doc.featuredImage || "",
    gallery:
      doc.gallery?.map((g, idx) => ({
        id: g.id || `gallery-${idx}`,
        url: g.url,
        alt: g.alt || "",
        caption: g.caption,
      })) || [],
    timings: doc.timings,
    entryFee: doc.entryFee,
    bestTimeToVisit: doc.bestTimeToVisit,
    distanceFromDistrictHQ: doc.distanceFromDistrictHQ,
    isFeatured: Boolean(doc.isFeatured),
    isUNESCO: Boolean(doc.isUNESCO),
    highlights:
      doc.highlights
        ?.map((h) => (typeof h === "string" ? h : h.item || ""))
        .filter((item): item is string => Boolean(item)) || [],
    tipsForVisitors:
      doc.tipsForVisitors
        ?.map((t) => (typeof t === "string" ? t : t.tip || ""))
        .filter((tip): tip is string => Boolean(tip)) || [],
    rating: doc.rating,
    nearbyPlaces:
      doc.nearbyPlaces
        ?.map((p) => (typeof p === "string" ? p : p.slug || ""))
        .filter((slug): slug is string => Boolean(slug)) || [],
    nearbyBusinesses:
      doc.nearbyBusinesses
        ?.map((b) => (typeof b === "string" ? b : b.slug || ""))
        .filter((slug): slug is string => Boolean(slug)) || [],
  };
}

export async function getAllPlaces(): Promise<Place[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "places",
      limit: 100,
    });
    return (res.docs as unknown as PlaceDoc[]).map(mapDocToPlace);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query places from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to retrieve destinations.");
  }
}

export async function getFeaturedPlaces(): Promise<Place[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "places",
      where: { isFeatured: { equals: true } },
      limit: 100,
    });
    return (res.docs as unknown as PlaceDoc[]).map(mapDocToPlace);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query featured places from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to retrieve featured destinations.");
  }
}

export async function getPlaceBySlug(slug: string): Promise<Place | null> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "places",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length > 0) {
      return mapDocToPlace(res.docs[0] as unknown as PlaceDoc);
    }
    return null;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error(`Failed to query place "${slug}" from Payload CMS:`, sanitizedMsg);
    throw new Error(`Unable to retrieve destination "${slug}".`);
  }
}

export async function getPlacesByCategory(category: string): Promise<Place[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "places",
      where: { category: { equals: category } },
      limit: 100,
    });
    return (res.docs as unknown as PlaceDoc[]).map(mapDocToPlace);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error(`Failed to query places by category "${category}" from Payload CMS:`, sanitizedMsg);
    throw new Error("Unable to retrieve category destinations.");
  }
}

export async function getNearbyPlaces(place: Place): Promise<Place[]> {
  if (!place.nearbyPlaces || place.nearbyPlaces.length === 0) return [];
  const all = await getAllPlaces();
  return all.filter((p) => place.nearbyPlaces?.includes(p.slug));
}

export async function getPlacesForBusiness(businessSlug: string): Promise<Place[]> {
  const all = await getAllPlaces();
  return all.filter((p) => p.nearbyBusinesses?.includes(businessSlug));
}
