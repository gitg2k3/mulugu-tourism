import type { CollectionConfig } from "payload";

export const EventsCollection: CollectionConfig = {
  slug: "events",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "startDate", "location", "isFeatured"],
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
      name: "tagline",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "startDate",
      type: "date",
      required: true,
    },
    {
      name: "endDate",
      type: "date",
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "category",
      type: "text",
    },
    {
      name: "coverImage",
      type: "text",
      required: true,
    },
    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false,
    },
  ],
};

export default EventsCollection;

