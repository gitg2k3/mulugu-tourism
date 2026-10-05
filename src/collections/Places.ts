import type { CollectionConfig } from "payload";

export const PlacesCollection: CollectionConfig = {
  slug: "places",
  admin: {
    useAsTitle: "title",
    defaultColumns: ["title", "category", "location", "isFeatured", "updatedAt"],
  },
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "teluguTitle",
      type: "text",
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "tagline",
      type: "text",
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "UNESCO & Heritage", value: "heritage" },
        { label: "Lakes & Waterways", value: "lakes-eco-tourism" },
        { label: "Cascading Waterfalls", value: "waterfalls" },
        { label: "Wildlife & Forests", value: "wildlife-forests" },
        { label: "Spiritual & Tribal Lore", value: "spiritual-temples" },
        { label: "Adventure & Camping", value: "adventure" },
      ],
      required: true,
    },
    {
      name: "categoryLabel",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
      required: true,
    },
    {
      name: "location",
      type: "text",
      required: true,
    },
    {
      name: "coordinates",
      type: "group",
      fields: [
        { name: "lat", type: "number" },
        { name: "lng", type: "number" },
      ],
    },
    {
      name: "featuredImage",
      type: "text",
      required: true,
    },
    {
      name: "gallery",
      type: "array",
      fields: [
        { name: "url", type: "text", required: true },
        { name: "alt", type: "text" },
        { name: "caption", type: "text" },
      ],
    },
    {
      name: "timings",
      type: "text",
    },
    {
      name: "entryFee",
      type: "text",
    },
    {
      name: "bestTimeToVisit",
      type: "text",
    },
    {
      name: "distanceFromDistrictHQ",
      type: "text",
    },
    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "isUNESCO",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "rating",
      type: "number",
    },
    {
      name: "highlights",
      type: "array",
      fields: [{ name: "item", type: "text" }],
    },
    {
      name: "tipsForVisitors",
      type: "array",
      fields: [{ name: "tip", type: "text" }],
    },
    {
      name: "nearbyPlaces",
      type: "array",
      fields: [{ name: "slug", type: "text" }],
    },
    {
      name: "nearbyBusinesses",
      type: "array",
      fields: [{ name: "slug", type: "text" }],
    },
  ],
};

export default PlacesCollection;

