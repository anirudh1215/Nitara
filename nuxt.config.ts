// https://nuxt.com/docs/api/configuration/nuxt-config
import { siteConfig } from "./config/site";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // SSR enabled for SEO & performance
  ssr: true,

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/sitemap", "@nuxt/icon"],

  // Site URL for sitemap & SEO (used by @nuxtjs/sitemap)
  site: {
    url: siteConfig.url,
  },

  // Sitemap — auto-discovers all Nuxt pages
  sitemap: {},

  // Global CSS
  css: ["~/assets/css/main.css"],

  app: {
    head: {
      htmlAttrs: { lang: "en" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      // Config-driven SEO title template
      titleTemplate: `%s — ${siteConfig.name}`,
      meta: [
        {
          name: "description",
          content: siteConfig.seo.defaultDescription,
        },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: siteConfig.name },
        { property: "og:image", content: siteConfig.seo.ogImage },
        // Twitter Card
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:site", content: siteConfig.seo.twitterHandle },
      ],
      link: [
        { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
        { rel: "canonical", href: siteConfig.url },
        // Google Fonts — Inter for modern, clean typography
        { rel: "preconnect", href: "https://fonts.googleapis.com" },
        {
          rel: "preconnect",
          href: "https://fonts.gstatic.com",
          crossorigin: "",
        },
        {
          rel: "stylesheet",
          href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
        },
      ],
    },
  },

  // Redirect /sitemap to /sitemap.xml
  routeRules: {
    "/sitemap": { redirect: "/sitemap.xml" },
  },

  // Nitro server config
  nitro: {
    compressPublicAssets: true,
  },

  // Performance
  experimental: {
    payloadExtraction: true,
  },
});
