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
  ],
};

export default ItinerariesCollection;

