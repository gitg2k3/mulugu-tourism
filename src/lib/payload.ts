import { createRequire } from "node:module";
const require = createRequire(import.meta.url);
const { loadEnvConfig } = require("@next/env");
loadEnvConfig(process.cwd());

import { getPayload, type Payload } from "payload";
import configPromise from "@payload-config";

declare global {
  // eslint-disable-next-line no-var
  var __payloadClient: Payload | undefined;
}

/**
 * Payload CMS helper utility.
 * Connects directly to Payload local API with cached instance for serverless environments.
 */
export async function getPayloadClient(): Promise<Payload> {
  if (globalThis.__payloadClient) {
    return globalThis.__payloadClient;
  }

  try {
    const client = await getPayload({ config: configPromise });
    globalThis.__payloadClient = client;
    return client;
  } catch (error) {
    const rawMsg = error instanceof Error ? error.message : String(error);
    const sanitizedMsg = rawMsg.replace(
      /postgres(?:ql)?:\/\/[^@\s]+@/gi,
      "postgresql://[REDACTED]@"
    );
    console.error("Failed to initialize Payload client:", sanitizedMsg);
    throw new Error("Unable to initialize connection to Payload CMS.");
  }
}
