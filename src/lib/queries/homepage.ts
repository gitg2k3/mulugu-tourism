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

export async function getHomepageGlobal(): Promise<HomepageGlobalData> {
  const fallback: HomepageGlobalData = {
    heroHeading: "Discover Mulugu: Sacred Temples & Untamed Wilderness",
    heroSubtitle:
      "Home to the UNESCO World Heritage Ramappa Temple, Laknavaram's 13 island lakes, roaring Bogatha Falls, and the spiritual power of Medaram Jatara.",
    heroBackgroundUrl:
      "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80",
  };

  try {
    const payload = await getPayloadClient();
    if (!payload) return fallback;

    const data = await payload.findGlobal({ slug: "homepage" });
    if (!data) return fallback;

    return {
      heroHeading: (data as unknown as HomepageGlobalData).heroHeading || fallback.heroHeading,
      heroSubtitle: (data as unknown as HomepageGlobalData).heroSubtitle || fallback.heroSubtitle,
      heroBackgroundUrl:
        (data as unknown as HomepageGlobalData).heroBackgroundUrl || fallback.heroBackgroundUrl,
    };
  } catch (error) {
    console.error("Failed to query Homepage global from Payload CMS:", error);
    return fallback;
  }
}

export async function getSiteSettingsGlobal(): Promise<SiteSettingsGlobalData> {
  const fallback: SiteSettingsGlobalData = {
    siteName: "Discover Mulugu",
    tagline: "The UNESCO Heritage & Eco-Tourism Capital of Telangana",
    contactPhone: "+91 8715 220000",
    contactEmail: "contact@discovermulugu.org",
    emergencyPolice: "100",
    emergencyAmbulance: "108",
    emergencyForestHelpline: "1800 425 5364",
  };

  try {
    const payload = await getPayloadClient();
    if (!payload) return fallback;

    const data = await payload.findGlobal({ slug: "site-settings" });
    if (!data) return fallback;

    const res = data as unknown as SiteSettingsGlobalData;
    return {
      siteName: res.siteName || fallback.siteName,
      tagline: res.tagline || fallback.tagline,
      contactPhone: res.contactPhone || fallback.contactPhone,
      contactEmail: res.contactEmail || fallback.contactEmail,
      emergencyPolice: res.emergencyPolice || fallback.emergencyPolice,
      emergencyAmbulance: res.emergencyAmbulance || fallback.emergencyAmbulance,
      emergencyForestHelpline: res.emergencyForestHelpline || fallback.emergencyForestHelpline,
    };
  } catch (error) {
    console.error("Failed to query SiteSettings global from Payload CMS:", error);
    return fallback;
  }
}

export async function getFooterGlobal(): Promise<FooterGlobalData> {
  const fallback: FooterGlobalData = {
    aboutText:
      "An independent community eco-tourism initiative dedicated to showcasing Mulugu's rich Kakatiya heritage, pristine nature, and local cultural traditions.",
    copyright: "© 2026 Discover Mulugu. All rights reserved.",
  };

  try {
    const payload = await getPayloadClient();
    if (!payload) return fallback;

    const data = await payload.findGlobal({ slug: "footer" });
    if (!data) return fallback;

    const res = data as unknown as FooterGlobalData;
    return {
      aboutText: res.aboutText || fallback.aboutText,
      copyright: res.copyright || fallback.copyright,
    };
  } catch (error) {
    console.error("Failed to query Footer global from Payload CMS:", error);
    return fallback;
  }
}
