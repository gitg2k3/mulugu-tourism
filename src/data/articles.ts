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
    slug: "exploring-mulugu-complete-travel-guide",
    title: "Exploring Mulugu: A Complete Guide to Your Ultimate Adventure",
    excerpt:
      "Are you ready for an unforgettable adventure to one of Telangana's most breathtaking natural wonders? In this complete guide to exploring Mulugu, we'll cover everything you need to know—from the best time to visit and essential packing tips to insider secrets on capturing the perfect sunrise shot over Laknavaram Lake.",
    category: "Adventure",
    publishedAt: "2026-05-30",
    readTime: "5 min read",
    coverImage:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    content:
      "Mulugu is the eco-tourism and cultural heartbeat of Telangana. From the 13 islands of Laknavaram Lake connected by suspension bridges to the 800-year-old earthquake-proof architecture of Ramappa Temple, this guide prepares you for the ultimate discovery journey.",
  },
  {
    id: "art-2",
    slug: "top-5-must-see-attractions-around-mulugu",
    title: "Top 5 Must-See Attractions Around Mulugu",
    excerpt:
      "From UNESCO Ramappa Temple and Laknavaram hanging bridge to the roaring cascades of Bogatha Waterfalls and Tadvai deep canopy walks.",
    category: "Destinations",
    publishedAt: "2026-05-23",
    readTime: "4 min read",
    coverImage:
      "https://images.unsplash.com/photo-1432405972618-c60b0225b8f9?auto=format&fit=crop&w=800&q=80",
    content:
      "Discover the five crown jewels of Mulugu district: Ramappa Temple (Rudreshwara), Laknavaram Lake, Bogatha Waterfalls, Medaram Sammakka Sarakka Gadde, and Tadvai Forest Reserve.",
  },
  {
    id: "art-3",
    slug: "ramappa-temple-unesco-architectural-secrets",
    title: "Discover the Magic of Ramappa: 800-Year Floating Bricks and Sculptures",
    excerpt:
      "How 13th-century Kakatiya builders created lightweight volcanic ash floating bricks and earthquake-proof sandbox foundations.",
    category: "Heritage",
    publishedAt: "2026-05-23",
    readTime: "8 min read",
    coverImage:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=800&q=80",
    content:
      "Built in 1213 CE under the patron General Recharla Rudra, the temple is renowned for its lightweight floating bricks, sandbox foundations that absorb seismic shocks, and intricate black dolerite bracket carvings depicting Madanika dancers.",
  },
  {
    id: "art-4",
    slug: "how-to-plan-perfect-trip-to-mulugu-tips-insights",
    title: "How to Plan the Perfect Trip to Mulugu: Tips and Insights",
    excerpt:
      "Everything you need to know about island cottages, boating timings, photography viewpoints, TSRTC bus connections, and local Telangana cuisine.",
    category: "Travel Guides",
    publishedAt: "2026-01-24",
    readTime: "2 min read",
    coverImage:
      "https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&fit=crop&w=800&q=80",
    content:
      "Spread across 10,000 acres ringed by the lush Eturnagaram hills, Laknavaram is a breathtaking natural retreat built by Kakatiya rulers. Visitors can stroll across iconic hanging suspension bridges connecting scenic islets, take speedboat rides, or stay in overwater cottages.",
  },
];
