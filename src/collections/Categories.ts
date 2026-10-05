import type { CollectionConfig } from "payload";

export const CategoriesCollection: CollectionConfig = {
  slug: "categories",
  admin: {
    useAsTitle: "title",
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "icon",
      type: "text",
    },
    {
      name: "color",
      type: "text",
    },
  ],
};

export default CategoriesCollection;

