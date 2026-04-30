import { defineCloudflareConfig } from "@opennextjs/cloudflare";

// Minimal Cloudflare config. The site has no ISR / on-demand revalidation,
// so we don't need R2 incremental cache. If you add ISR later, swap in
// r2IncrementalCache and add the R2 binding in wrangler.jsonc.
export default defineCloudflareConfig({});
