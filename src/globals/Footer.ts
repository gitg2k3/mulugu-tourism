import type { GlobalConfig } from "payload";

export const FooterGlobal: GlobalConfig = {
  slug: "footer",
  label: "Footer Content",
  access: {
    read: () => true,
  },
  fields: [
    {
      name: "aboutText",
      type: "textarea",
      defaultValue:
        "An independent community eco-tourism initiative dedicated to showcasing Mulugu's rich Kakatiya heritage, pristine nature, and local cultural traditions.",
    },
    {
      name: "copyright",
      type: "text",
      defaultValue: "© 2026 Discover Mulugu. All rights reserved.",
    },
  ],
};

export default FooterGlobal;

