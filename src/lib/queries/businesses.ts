import { Business, BusinessCategory } from "@/types/business";
import { getPayloadClient } from "@/lib/payload";

interface BusinessAmenityDoc {
  item?: string;
}

interface BusinessDoc {
  id: string | number;
  slug: string;
  name: string;
  category: string;
  categoryLabel?: string;
  tagline?: string;
  description?: string;
  address?: string;
  location?: string;
  coordinates?: { lat: number; lng: number };
  phone: string;
  email?: string;
  website?: string;
  featuredImage?: string;
  pricingRange?: "₹" | "₹₹" | "₹₹₹";
  rating?: number;
  reviewCount?: number;
  isVerified?: boolean;
  isFeatured?: boolean;
  amenities?: (string | BusinessAmenityDoc)[];
}

function mapDocToBusiness(doc: BusinessDoc): Business {
  return {
    id: String(doc.id),
    slug: doc.slug,
    name: doc.name,
    category: (doc.category as BusinessCategory) || "stay",
    categoryLabel: doc.categoryLabel || doc.category,
    tagline: doc.tagline || "",
    description: doc.description || "",
    address: doc.address || "",
    location: doc.location || "",
    coordinates: doc.coordinates || { lat: 0, lng: 0 },
    phone: doc.phone || "",
    email: doc.email,
    website: doc.website,
    featuredImage: doc.featuredImage || "",
    pricingRange: doc.pricingRange,
    rating: typeof doc.rating === "number" ? doc.rating : 4.5,
    reviewCount: typeof doc.reviewCount === "number" ? doc.reviewCount : 0,
    isVerified: Boolean(doc.isVerified),
    isFeatured: Boolean(doc.isFeatured),
    amenities:
      doc.amenities
        ?.map((a) => (typeof a === "string" ? a : a.item || ""))
        .filter((item): item is string => Boolean(item)) || [],
  };
}

export async function getAllBusinesses(): Promise<Business[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "businesses",
      limit: 100,
    });
    return (res.docs as unknown as BusinessDoc[]).map(mapDocToBusiness);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query businesses from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to retrieve businesses.");
  }
}

export async function getFeaturedBusinesses(): Promise<Business[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "businesses",
      where: { isFeatured: { equals: true } },
      limit: 100,
    });
    return (res.docs as unknown as BusinessDoc[]).map(mapDocToBusiness);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query featured businesses from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to retrieve featured businesses.");
  }
}

export async function getBusinessBySlug(slug: string): Promise<Business | null> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "businesses",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length > 0) {
      return mapDocToBusiness(res.docs[0] as unknown as BusinessDoc);
    }
    return null;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error(`Failed to query business "${slug}" from Payload CMS:`, sanitizedMsg);
    throw new Error(`Unable to retrieve business "${slug}".`);
  }
}

export async function getBusinessesByCategory(category: string): Promise<Business[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "businesses",
      where: { category: { equals: category } },
      limit: 100,
    });
    return (res.docs as unknown as BusinessDoc[]).map(mapDocToBusiness);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error(`Failed to query businesses by category "${category}" from Payload CMS:`, sanitizedMsg);
    throw new Error("Unable to retrieve category businesses.");
  }
}

export async function getNearbyBusinessesForPlace(businessSlugs: string[]): Promise<Business[]> {
  if (!businessSlugs || businessSlugs.length === 0) return [];
  const all = await getAllBusinesses();
  return all.filter((b) => businessSlugs.includes(b.slug));
}
