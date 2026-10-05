import type { CollectionConfig } from "payload";

export const UsersCollection: CollectionConfig = {
  slug: "users",
  auth: true,
  admin: {
    useAsTitle: "email",
  },
  fields: [
    {
      name: "name",
      type: "text",
    },
    {
      name: "role",
      type: "select",
      options: [
        { label: "Super Admin", value: "admin" },
        { label: "Tourism Officer / Editor", value: "editor" },
        { label: "Local Business Owner", value: "business_owner" },
      ],
      defaultValue: "editor",
      required: true,
    },
  ],
};

export default UsersCollection;

