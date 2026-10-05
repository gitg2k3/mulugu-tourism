import { Category } from "@/types/common";
import { getPayloadClient } from "@/lib/payload";

interface CategoryDoc {
  id: string | number;
  title: string;
  slug: string;
  description?: string;
  icon?: string;
  color?: string;
}

function mapDocToCategory(doc: CategoryDoc): Category {
  return {
    id: String(doc.id),
    title: doc.title,
    slug: doc.slug,
    description: doc.description,
    icon: doc.icon,
    color: doc.color,
  };
}

import { CATEGORIES } from "@/data/categories";

export async function getAllCategories(): Promise<Category[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "categories",
      limit: 100,
    });
    if (res.docs && res.docs.length > 0) {
      return (res.docs as unknown as CategoryDoc[]).map(mapDocToCategory);
    }
    return CATEGORIES;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn("Using fallback categories data. Reason:", sanitizedMsg);
    return CATEGORIES;
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "categories",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs && res.docs.length > 0) {
      return mapDocToCategory(res.docs[0] as unknown as CategoryDoc);
    }
    return CATEGORIES.find((c) => c.slug === slug) || null;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn(`Using fallback category data for "${slug}". Reason:`, sanitizedMsg);
    return CATEGORIES.find((c) => c.slug === slug) || null;
  }
}
