# Nuxt 4 Business Portfolio — Starter Template

A production-ready, SEO-optimized Nuxt 4 starter template for business portfolio websites. Fully config-driven — customize your brand, services, and content from a single file.

## ✨ Features

- **Nuxt 4** with SSR enabled
- **TypeScript** + `<script setup>` Composition API
- **Tailwind CSS** with a clean, customizable color palette
- **File-based routing** — 6 pages included
- **Config-driven** — all brand & content data in `/config/site.ts`
- **SEO-ready** — `useHead()`, `useSeoMeta()`, OpenGraph, Twitter Cards, JSON-LD
- **Responsive** — mobile-first design with sticky header & hamburger menu
- **Performance** — code splitting, lazy scroll animations, compressed assets
- **Accessible** — semantic HTML5, ARIA labels, focus states

## 📁 Folder Structure

```
├── app/
│   ├── assets/css/main.css        # Global CSS & Tailwind config
│   ├── components/
│   │   ├── layout/
│   │   │   ├── AppHeader.vue      # Sticky responsive navbar
│   │   │   └── AppFooter.vue      # Multi-column footer
│   │   └── ui/
│   │       ├── AppButton.vue      # Reusable button / link
│   │       ├── SectionWrapper.vue # Section layout container
│   │       ├── ServiceCard.vue    # Service offering card
│   │       ├── TestimonialCard.vue# Client testimonial card
│   │       └── ContactForm.vue    # Contact form with validation
│   ├── composables/
│   │   ├── useSEO.ts              # Config-driven SEO helper
│   │   └── useScrollAnimation.ts  # Intersection Observer composable
│   ├── layouts/
│   │   └── default.vue            # Header + content + footer
│   ├── pages/
│   │   ├── index.vue              # Home page
│   │   ├── about.vue              # About page
│   │   ├── services.vue           # Services page
│   │   ├── contact.vue            # Contact page
│   │   ├── privacy-policy.vue     # Privacy policy
│   │   └── terms.vue              # Terms & conditions
│   └── app.vue                    # Root component
├── config/
│   └── site.ts                    # ⭐ Central brand & content config
├── public/
│   ├── favicon.svg
│   └── logo.svg
├── nuxt.config.ts
├── tailwind.config.ts
└── package.json
```

## 🚀 Quick Start

```bash
# Clone the template
git clone <your-repo-url> my-business-site
cd my-business-site

# Install dependencies
bun install        # or npm install / pnpm install

# Start dev server
bun run dev        # http://localhost:3000

# Build for production
bun run build

# Preview production build
bun run preview
```

## ⚙️ Customization

### 1. Brand & Content (`config/site.ts`)

All brand data is centralized in one config file:

```ts
export const siteConfig = {
  name: "Your Business",
  tagline: "Your catchy tagline here",
  description: "Your meta description",
  url: "https://yourdomain.com",
  phone: "+1 (555) 000-0000",
  email: "hello@yourdomain.com",
  address: "123 Your Street, City, State ZIP",
  primaryColor: "#2563eb",
  social: { ... },
  nav: [ ... ],
  services: [ ... ],
  testimonials: [ ... ],
};
```

### 2. Colors (`tailwind.config.ts`)

The `primary` and `secondary` color palettes are defined in the Tailwind config. Swap the hex values to match your brand.

### 3. SEO (`nuxt.config.ts`)

Update the default meta tags, `titleTemplate`, OG image URL, and canonical URL in `nuxt.config.ts`. Per-page SEO is handled via the `useSEO()` composable.

### 4. Typography

The template uses [Inter](https://fonts.google.com/specimen/Inter) via Google Fonts. Change the font in `nuxt.config.ts` (head link) and `tailwind.config.ts` (fontFamily).

## 🔍 SEO Checklist

- [x] SSR-rendered meta tags
- [x] Dynamic `<title>` per page with `titleTemplate`
- [x] OpenGraph & Twitter Card meta
- [x] Canonical URLs
- [x] JSON-LD structured data (LocalBusiness on homepage)
- [x] Semantic HTML5 (`<header>`, `<main>`, `<footer>`, `<section>`, `<article>`, `<nav>`)
- [x] `lang="en"` on `<html>`

## 📦 Deployment

Works with any Nuxt-compatible hosting:

- **Vercel** — `npx vercel`
- **Netlify** — connect your Git repo
- **Cloudflare Pages** — zero-config deployment
- **Node.js server** — `bun run build && node .output/server/index.mjs`

## 📄 License

MIT — free for personal and commercial use.
