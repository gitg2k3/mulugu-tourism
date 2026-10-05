import type { GlobalConfig } from "payload";

export const HomepageGlobal: GlobalConfig = {
  slug: "homepage",
  label: "Homepage Content",
  fields: [
    {
      name: "heroHeading",
      type: "text",
      defaultValue: "Discover Mulugu: Sacred Temples & Untamed Wilderness",
    },
    {
      name: "heroSubtitle",
      type: "textarea",
      defaultValue:
        "Home to the UNESCO World Heritage Ramappa Temple, Laknavaram's 13 island lakes, roaring Bogatha Falls, and the spiritual power of Medaram Jatara.",
    },
    {
      name: "heroBackgroundUrl",
      type: "text",
      defaultValue: "https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=1920&q=80",
    },
  ],
};

export default HomepageGlobal;

