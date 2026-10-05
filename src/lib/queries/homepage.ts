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
  try {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({ slug: "homepage" });
    const res = (data || {}) as unknown as Partial<HomepageGlobalData>;

    return {
      heroHeading: res.heroHeading || "",
      heroSubtitle: res.heroSubtitle || "",
      heroBackgroundUrl: res.heroBackgroundUrl || "",
    };
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query Homepage global from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to load homepage content from CMS.");
  }
}

export async function getSiteSettingsGlobal(): Promise<SiteSettingsGlobalData> {
  try {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({ slug: "site-settings" });
    const res = (data || {}) as unknown as Partial<SiteSettingsGlobalData>;

    return {
      siteName: res.siteName || "",
      tagline: res.tagline,
      contactPhone: res.contactPhone,
      contactEmail: res.contactEmail,
      emergencyPolice: res.emergencyPolice,
      emergencyAmbulance: res.emergencyAmbulance,
      emergencyForestHelpline: res.emergencyForestHelpline,
    };
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query SiteSettings global from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to load site settings from CMS.");
  }
}

export async function getFooterGlobal(): Promise<FooterGlobalData> {
  try {
    const payload = await getPayloadClient();
    const data = await payload.findGlobal({ slug: "footer" });
    const res = (data || {}) as unknown as Partial<FooterGlobalData>;

    return {
      aboutText: res.aboutText || "",
      copyright: res.copyright || "",
    };
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(/postgres(?:ql)?:\/\/[^@\s]+@/gi, "postgresql://[REDACTED]@");
    console.error("Failed to query Footer global from Payload CMS:", sanitizedMsg);
    throw new Error("Unable to load footer content from CMS.");
  }
}
