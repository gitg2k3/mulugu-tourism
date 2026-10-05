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

export async function getAllCategories(): Promise<Category[]> {
  try {
    const payload = await getPayloadClient();
    if (!payload) return [];

    const res = await payload.find({
      collection: "categories",
      limit: 100,
    });
    return (res.docs as unknown as CategoryDoc[]).map(mapDocToCategory);
  } catch (error) {
    console.error("Failed to query categories from Payload CMS:", error);
    return [];
  }
}

export async function getCategoryBySlug(slug: string): Promise<Category | null> {
  try {
    const payload = await getPayloadClient();
    if (!payload) return null;

    const res = await payload.find({
      collection: "categories",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length > 0) {
      return mapDocToCategory(res.docs[0] as unknown as CategoryDoc);
    }
    return null;
  } catch (error) {
    console.error(`Failed to query category "${slug}" from Payload CMS:`, error);
    return null;
  }
}
