// https://nuxt.com/docs/api/configuration/nuxt-config
import { site } from "./content";

export default defineNuxtConfig({
  compatibilityDate: "2025-07-15",
  devtools: { enabled: true },

  // SSR for SEO and first-paint performance
  ssr: true,

  modules: [
    "@nuxtjs/tailwindcss",
    "@nuxt/icon",
    "@nuxt/fonts",
    "@nuxtjs/sitemap",
    "motion-v/nuxt",
  ],

  // Canonical host for sitemap + robots
  site: {
    url: site.url,
    name: site.name,
  },

  // Auto-discovers the three pages. The one-pager's sections are anchors,
  // so there is nothing else to list.
  sitemap: {
    exclude: ["/api/**"],
  },

  css: ["~/assets/css/main.css"],

  // Server-only runtime config.
  // Set NUXT_ENQUIRY_WEBHOOK in your hosting environment to the URL that
  // should receive contact-form submissions. Until it is set, /api/enquiry
  // returns 501 and the form asks visitors to call or WhatsApp instead.
  runtimeConfig: {
    enquiryWebhook: "",
  },

  // Icons are bundled locally so no runtime request to the Iconify API is
  // made — this matters for the Lighthouse score.
  icon: {
    serverBundle: "local",
  },

  // Downloads Baloo 2 and Nunito at build time and serves them from our own
  // origin with `font-display: swap` and preload hints.
  fonts: {
    families: [
      { name: "Nunito", provider: "google", weights: [400, 600, 700, 800] },
      { name: "Baloo 2", provider: "google", weights: [600, 700, 800] },
    ],
  },


  app: {
    head: {
      htmlAttrs: { lang: "en-IN" },
      charset: "utf-8",
      viewport: "width=device-width, initial-scale=1",
      title: site.seo.title,
      meta: [
        { name: "description", content: site.seo.description },
        { name: "theme-color", content: "#1C4E9D" },
        { name: "author", content: site.name },
        { name: "geo.region", content: "IN-DL" },
        { name: "geo.placename", content: "Rohini, New Delhi" },
        // Open Graph
        { property: "og:type", content: "website" },
        { property: "og:site_name", content: site.name },
        { property: "og:title", content: site.seo.title },
        { property: "og:description", content: site.seo.description },
        { property: "og:image", content: `${site.url}${site.seo.ogImage}` },
        { property: "og:url", content: site.url },
        { property: "og:locale", content: "en_IN" },
        // Twitter
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: site.seo.title },
        { name: "twitter:description", content: site.seo.description },
        { name: "twitter:image", content: `${site.url}${site.seo.ogImage}` },
      ],
      link: [
        { rel: "icon", type: "image/png", sizes: "48x48", href: "/favicon-48.png" },
        { rel: "apple-touch-icon", sizes: "180x180", href: "/apple-touch-icon.png" },
        { rel: "canonical", href: site.url },
        // Fonts are self-hosted by @nuxt/fonts — no render-blocking request
        // to fonts.googleapis.com, which cost ~860 ms of First Contentful Paint.
        // Warm up the image CDN used for photography.
        { rel: "preconnect", href: "https://images.unsplash.com", crossorigin: "" },
      ],
    },
  },

  nitro: {
    compressPublicAssets: true,
    // Pre-render the three static pages so they are served as plain HTML.
    prerender: {
      crawlLinks: false,
      routes: ["/", "/privacy-policy", "/terms", "/sitemap.xml"],
    },
  },

  experimental: {
    payloadExtraction: true,
  },
});
