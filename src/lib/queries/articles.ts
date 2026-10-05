import { getPayloadClient } from "@/lib/payload";

export interface Article {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  content?: string;
  coverImage: string;
}

interface ArticleDoc {
  id: string | number;
  slug: string;
  title: string;
  excerpt?: string;
  category?: string;
  readTime?: string;
  content?: string;
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
    publishedAt: doc.createdAt
      ? new Date(doc.createdAt).toISOString().split("T")[0]
      : new Date().toISOString().split("T")[0],
    readTime: doc.readTime || "5 min read",
    content: doc.content,
    coverImage: doc.coverImage || "",
  };
}

export async function getAllArticles(): Promise<Article[]> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "articles",
      limit: 100,
    });
    return (res.docs as unknown as ArticleDoc[]).map(mapDocToArticle);
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query articles from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to retrieve articles.");
  }
}

export async function getArticleBySlug(slug: string): Promise<Article | null> {
  try {
    const payload = await getPayloadClient();
    const res = await payload.find({
      collection: "articles",
      where: { slug: { equals: slug } },
      limit: 1,
    });
    if (res.docs.length > 0) {
      return mapDocToArticle(res.docs[0] as unknown as ArticleDoc);
    }
    return null;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error(`Failed to query article "${slug}" from Payload CMS:`, sanitizedMsg);
    throw new Error(`Unable to retrieve article "${slug}".`);
  }
}
