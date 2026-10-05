import type { GlobalConfig } from "payload";

export const FooterGlobal: GlobalConfig = {
  slug: "footer",
  label: "Footer Content",
  fields: [
    {
      name: "aboutText",
      type: "textarea",
      defaultValue:
        "Official tourism initiative by District Administration Mulugu, Government of Telangana, dedicated to promoting sustainable eco-tourism and preserving Kakatiya cultural heritage.",
    },
    {
      name: "copyright",
      type: "text",
      defaultValue: "© 2026 District Administration Mulugu, Government of Telangana. All rights reserved.",
    },
  ],
};

export default FooterGlobal;

