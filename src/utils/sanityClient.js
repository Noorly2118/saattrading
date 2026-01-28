import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "b2hhyfghgvc4q53xpnffqgym",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
});
