import { getPayloadClient } from "@/lib/payload";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
}

export const ARTICLES: Article[] = [
  {
    id: "art-1",
    slug: "ramappa-temple-unesco-architectural-secrets",
    title: "Unlocking the Architectural Secrets of Ramappa Temple",
    excerpt: "How 13th-century Kakatiya builders created floating lightweight bricks and earthquake-proof sandbox foundations.",
    category: "Heritage",
    publishedAt: "2026-01-15",
    readTime: "6 min read",
    coverImage: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "art-2",
    slug: "complete-travel-guide-to-laknavaram-lake",
    title: "Complete Travel Guide to Laknavaram Lake & Suspension Bridges",
    excerpt: "Everything you need to know about island cottages, boating timings, photography viewpoints, and eco-tours.",
    category: "Travel Guides",
    publishedAt: "2026-02-01",
    readTime: "5 min read",
    coverImage: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
  },
];

interface ArticleDoc {
  id: string | number;
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  createdAt?: string;
  coverImage?: string;
}

function mapDocToArticle(doc: ArticleDoc): Article {
  return {
    id: String(doc.id),
    slug: doc.slug,
    title: doc.title,
    excerpt: doc.excerpt || "",
    category: doc.category || "General",
    publishedAt: doc.createdAt ? new Date(doc.createdAt).toISOString().split("T")[0] : "2026-01-01",
    readTime: "5 min read",
    coverImage: doc.coverImage || "",
  };
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const payload = await getPayloadClient();
    if (payload) {
      const res = await payload.find({
        collection: "articles",
        limit: 100,
      });
      if (res.docs.length > 0) {
        return (res.docs as unknown as ArticleDoc[]).map(mapDocToArticle);
      }
    }
  } catch {
    // Graceful fallback to mock data
  }
  return ARTICLES;
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const payload = await getPayloadClient();
    if (payload) {
      const res = await payload.find({
        collection: "articles",
        where: { slug: { equals: slug } },
        limit: 1,
      });
      if (res.docs.length > 0) {
        return mapDocToArticle(res.docs[0] as unknown as ArticleDoc);
      }
    }
  } catch {
    // Graceful fallback to mock data
  }
  const found = ARTICLES.find((a) => a.slug === slug);
  return found || null;
}
