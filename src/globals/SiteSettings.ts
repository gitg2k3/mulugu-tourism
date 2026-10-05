import type { GlobalConfig } from "payload";

export const SiteSettingsGlobal: GlobalConfig = {
  slug: "site-settings",
  label: "Site Settings",
  fields: [
    {
      name: "siteName",
      type: "text",
      defaultValue: "Discover Mulugu",
      required: true,
    },
    {
      name: "tagline",
      type: "text",
      defaultValue: "The UNESCO Heritage & Eco-Tourism Capital of Telangana",
    },
    {
      name: "contactPhone",
      type: "text",
      defaultValue: "+91 8715 220000",
    },
    {
      name: "contactEmail",
      type: "text",
      defaultValue: "tourism-mulugu@telangana.gov.in",
    },
    {
      name: "emergencyPolice",
      type: "text",
      defaultValue: "100",
    },
    {
      name: "emergencyAmbulance",
      type: "text",
      defaultValue: "108",
    },
    {
      name: "emergencyForestHelpline",
      type: "text",
      defaultValue: "1800 425 5364",
    },
  ],
};

export default SiteSettingsGlobal;

