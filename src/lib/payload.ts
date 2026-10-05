import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

import { getPayload } from "payload";
import configPromise from "@payload-config";

/**
 * Payload CMS helper utility.
 * Connects directly to Payload local API.
 */
export async function getPayloadClient() {
  try {
    return await getPayload({ config: configPromise });
  } catch (error) {
    console.error("Failed to initialize Payload client:", error);
    return null;
  }
}
