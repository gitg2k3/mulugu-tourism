import type { CollectionConfig } from "payload";

export const BusinessesCollection: CollectionConfig = {
  slug: "businesses",
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: "name",
    defaultColumns: ["name", "category", "location", "rating", "isVerified"],
  },
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
      index: true,
    },
    {
      name: "category",
      type: "select",
      options: [
        { label: "Eco-Stay & Cottages", value: "eco-stay" },
        { label: "Stay & Lodging", value: "stay" },
        { label: "Traditional Dining", value: "dining" },
        { label: "Local Tour Guides", value: "guides" },
        { label: "Handicrafts & Forest Produce", value: "handicrafts" },
        { label: "Transport & Cabs", value: "transport" },
      ],
      required: true,
    },
    {
      name: "categoryLabel",
      type: "text",
    },
    {
      name: "tagline",
      type: "text",
    },
    {
      name: "description",
      type: "textarea",
    },
    {
      name: "address",
      type: "text",
    },
    {
      name: "location",
      type: "text",
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
      name: "phone",
      type: "text",
      required: true,
    },
    {
      name: "email",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "featuredImage",
      type: "text",
    },
    {
      name: "pricingRange",
      type: "select",
      options: [
        { label: "Budget (₹)", value: "₹" },
        { label: "Moderate (₹₹)", value: "₹₹" },
        { label: "Premium (₹₹₹)", value: "₹₹₹" },
      ],
    },
    {
      name: "rating",
      type: "number",
    },
    {
      name: "reviewCount",
      type: "number",
    },
    {
      name: "isVerified",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "isFeatured",
      type: "checkbox",
      defaultValue: false,
    },
    {
      name: "amenities",
      type: "array",
      fields: [{ name: "item", type: "text" }],
    },
  ],
};

export default BusinessesCollection;

