export interface SeedArticle {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  coverImage: string;
  content: string;
}

export const ARTICLES: SeedArticle[] = [
  {
    id: "art-1",
    slug: "ramappa-temple-unesco-architectural-secrets",
    title: "Unlocking the Architectural Secrets of Ramappa Temple",
    excerpt:
      "How 13th-century Kakatiya builders created floating lightweight bricks and earthquake-proof sandbox foundations.",
    category: "Heritage",
    publishedAt: "2026-01-15",
    readTime: "6 min read",
    coverImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    content:
      "Mulugu district represents one of South India's most culturally dense and ecologically intact destinations. Steeped in the architectural glory of the Kakatiya Dynasty, its temples and lakes were engineered with profound environmental foresight. Built in 1213 CE under the patron General Recharla Rudra, the temple is renowned for its lightweight floating bricks, sandbox foundations that absorb seismic shocks, and intricate black dolerite bracket carvings depicting Madanika dancers.",
  },
  {
    id: "art-2",
    slug: "complete-travel-guide-to-laknavaram-lake",
    title: "Complete Travel Guide to Laknavaram Lake & Suspension Bridges",
    excerpt:
      "Everything you need to know about island cottages, boating timings, photography viewpoints, and eco-tours.",
    category: "Travel Guides",
    publishedAt: "2026-02-01",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    content:
      "Spread across 10,000 acres ringed by the lush Eturnagaram hills, Laknavaram is a breathtaking natural retreat built by Kakatiya rulers. Visitors can stroll across iconic hanging suspension bridges connecting scenic islets, take speedboat rides, or stay in overwater cottages operated by Telangana Tourism.",
  },
];
