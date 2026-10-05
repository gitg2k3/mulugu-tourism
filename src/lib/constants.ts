const getSiteUrl = () => {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.VERCEL_PROJECT_PRODUCTION_URL) return `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;
  if (process.env.VERCEL_URL) return `https://${process.env.VERCEL_URL}`;
  return "https://discovermulugu.org";
};

export const SITE_CONFIG = {
  name: "Discover Mulugu",
  teluguName: "డిస్కవర్ ములుగు",
  tagline: "The UNESCO Heritage & Eco-Tourism Capital of Telangana",
  description:
    "Explore the breathtaking UNESCO World Heritage Ramappa Temple, scenic Laknavaram Lake, cascading Bogatha Waterfalls, and the largest tribal congregation Medaram Jatara.",
  url: getSiteUrl(),
  contact: {
    helpline: "+91 8715 220000",
    email: "contact@discovermulugu.org",
    address: "Mulugu, Telangana - 506343",
  },
  social: {
    twitter: "https://twitter.com/TourismMulugu",
    instagram: "https://instagram.com/discover_mulugu",
    facebook: "https://facebook.com/DiscoverMuluguDistrict",
    youtube: "https://youtube.com/@TourismMulugu",
  },
};

export const NAV_LINKS = [
  { name: "Home", href: "/" },
  { name: "Explore Places", href: "/explore" },
  { name: "UNESCO Heritage", href: "/heritage" },
  { name: "Local Businesses", href: "/businesses" },
  { name: "Food & Cuisine", href: "/food" },
  { name: "Experiences", href: "/experiences" },
  { name: "Events & Jatara", href: "/events" },
  { name: "Interactive Map", href: "/map" },
  { name: "About Mulugu", href: "/about" },
];

export const DISTRICT_STATS = [
  { label: "UNESCO Heritage Site", value: "1 (Ramappa)" },
  { label: "Dense Forest Cover", value: "70%+" },
  { label: "Protected Eco-Reserves", value: "2 Wildlands" },
  { label: "Asia's Largest Tribal Fair", value: "Medaram Jatara" },
];
