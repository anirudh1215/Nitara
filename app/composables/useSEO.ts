/**
 * useSEO Composable
 * -----------------
 * Config-driven SEO helper wrapping useHead() and useSeoMeta().
 * Automatically pulls defaults from siteConfig.seo.
 */
import { siteConfig } from "~~/config/site";

interface SEOOptions {
  title: string;
  description?: string;
  ogImage?: string;
  canonicalPath?: string;
}

export function useSEO(options: SEOOptions) {
  const { title, description, ogImage, canonicalPath } = options;

  const desc = description || siteConfig.seo.defaultDescription;
  const image = ogImage || siteConfig.seo.ogImage;
  const canonical = `${siteConfig.url}${canonicalPath || ""}`;

  useHead({
    title,
    link: [{ rel: "canonical", href: canonical }],
  });

  useSeoMeta({
    description: desc,
    ogTitle: `${title} — ${siteConfig.name}`,
    ogDescription: desc,
    ogImage: image,
    ogUrl: canonical,
    ogType: "website",
    ogSiteName: siteConfig.name,
    twitterCard: "summary_large_image",
    twitterSite: siteConfig.seo.twitterHandle,
    twitterTitle: `${title} — ${siteConfig.name}`,
    twitterDescription: desc,
    twitterImage: image,
  });
}
