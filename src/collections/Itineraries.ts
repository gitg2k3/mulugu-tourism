import type { CollectionConfig } from "payload";

export const ItinerariesCollection: CollectionConfig = {
  slug: "itineraries",
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
      name: "duration",
      type: "text",
      required: true,
    },
    {
      name: "summary",
      type: "textarea",
    },
    {
      name: "coverImage",
      type: "text",
    },
    {
      name: "highlights",
      type: "array",
      fields: [{ name: "item", type: "text" }],
    },
    {
      name: "days",
      type: "array",
      fields: [
        { name: "day", type: "number" },
        { name: "title", type: "text" },
        { name: "description", type: "textarea" },
        {
          name: "activities",
          type: "array",
          fields: [{ name: "item", type: "text" }],
        },
        {
          name: "recommendedPlaces",
          type: "array",
          fields: [{ name: "slug", type: "text" }],
        },
      ],
    },
  ],
};

export default ItinerariesCollection;

