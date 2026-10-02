/**
 * useSite Composable
 * ------------------
 * Clean accessor for siteConfig. Import this instead of the raw config
 * for a consistent API and potential reactive extensions in the future.
 */
import { siteConfig } from "~~/config/site";
import type { SiteConfig } from "~~/config/site";

export function useSite(): SiteConfig {
  return siteConfig;
}
