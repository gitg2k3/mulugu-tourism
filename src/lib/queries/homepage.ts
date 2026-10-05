import { getPayloadClient } from "@/lib/payload";

export interface HomepageGlobalData {
  heroHeading: string;
  heroSubtitle: string;
  heroBackgroundUrl: string;
}

export interface SiteSettingsGlobalData {
  siteName: string;
  tagline?: string;
  contactPhone?: string;
  contactEmail?: string;
  emergencyPolice?: string;
  emergencyAmbulance?: string;
  emergencyForestHelpline?: string;
}

export interface FooterGlobalData {
  aboutText: string;
  copyright: string;
}

import { SITE_CONFIG } from "@/lib/constants";

export async function getHomepageGlobal(): Promise<HomepageGlobalData> {
  try {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({ slug: "homepage" });
    const res = (data || {}) as unknown as Partial<HomepageGlobalData>;

    return {
      heroHeading: res.heroHeading || "Explore the Heart of Telangana's Wilderness & Heritage",
      heroSubtitle:
        res.heroSubtitle ||
        "Discover UNESCO World Heritage Ramappa, Asia's largest tribal fair Medaram Jatara, and pristine eco-forests.",
      heroBackgroundUrl:
        res.heroBackgroundUrl ||
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80",
    };
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn("Using fallback Homepage global data. Reason:", sanitizedMsg);
    return {
      heroHeading: "Explore the Heart of Telangana's Wilderness & Heritage",
      heroSubtitle:
        "Discover UNESCO World Heritage Ramappa, Asia's largest tribal fair Medaram Jatara, and pristine eco-forests.",
      heroBackgroundUrl:
        "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80",
    };
  }
}

export async function getSiteSettingsGlobal(): Promise<SiteSettingsGlobalData> {
  try {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({ slug: "site-settings" });
    const res = (data || {}) as unknown as Partial<SiteSettingsGlobalData>;

    return {
      siteName: res.siteName || SITE_CONFIG.name,
      tagline: res.tagline || SITE_CONFIG.tagline,
      contactPhone: res.contactPhone || SITE_CONFIG.contact.helpline,
      contactEmail: res.contactEmail || SITE_CONFIG.contact.email,
      emergencyPolice: res.emergencyPolice || "100",
      emergencyAmbulance: res.emergencyAmbulance || "108",
      emergencyForestHelpline: res.emergencyForestHelpline || "1800 425 5364",
    };
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn("Using fallback SiteSettings global data. Reason:", sanitizedMsg);
    return {
      siteName: SITE_CONFIG.name,
      tagline: SITE_CONFIG.tagline,
      contactPhone: SITE_CONFIG.contact.helpline,
      contactEmail: SITE_CONFIG.contact.email,
      emergencyPolice: "100",
      emergencyAmbulance: "108",
      emergencyForestHelpline: "1800 425 5364",
    };
  }
}

export async function getFooterGlobal(): Promise<FooterGlobalData> {
  try {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({ slug: "footer" });
    const res = (data || {}) as unknown as Partial<FooterGlobalData>;

    return {
      aboutText:
        res.aboutText ||
        "Discover Mulugu is an independent, community-driven eco-tourism initiative dedicated to preserving and showcasing the natural wonders, tribal heritage, and ancient Kakatiya architecture of Mulugu district, Telangana.",
      copyright:
        res.copyright ||
        `© ${new Date().getFullYear()} Discover Mulugu. All rights reserved.`,
    };
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.warn("Using fallback Footer global data. Reason:", sanitizedMsg);
    return {
      aboutText:
        "Discover Mulugu is an independent, community-driven eco-tourism initiative dedicated to preserving and showcasing the natural wonders, tribal heritage, and ancient Kakatiya architecture of Mulugu district, Telangana.",
      copyright: `© ${new Date().getFullYear()} Discover Mulugu. All rights reserved.`,
    };
  }
}
