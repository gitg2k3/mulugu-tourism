import type { CollectionConfig } from "payload";

export const ArticlesCollection: CollectionConfig = {
  slug: "articles",
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
      name: "excerpt",
      type: "textarea",
    },
    {
      name: "category",
      type: "text",
    },
    {
      name: "content",
      type: "textarea",
    },
    {
      name: "coverImage",
      type: "text",
    },
  ],
};

export default ArticlesCollection;

