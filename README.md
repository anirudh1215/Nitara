# Nitara Special School & Child Development Center

One-page website for **Nitara Special School & Child Development Center**
(*A Unit of Sahaj Sambhav*) — Plot No. 110, Pocket 27, Sector 24, Rohini,
New Delhi.

Built with **Nuxt 4**, **Tailwind CSS** and **Motion for Vue** (`motion-v`).

---

## ⚠️ Before this goes live

The site is complete and deployable, but some content is placeholder. Search
the codebase for `TODO:` — every item is flagged in `content.ts`.

| # | Item | Where |
|---|------|-------|
| 1 | **Email address** — currently `info@nitaraspecialschool.com`, a guess | `content.ts` → `site.email` |
| 2 | **Domain** — currently `nitaraspecialschool.com`, a guess. Also update `public/robots.txt` | `content.ts` → `site.url` |
| 3 | **PIN code** — `110085` assumed for Sector 24, Rohini. Please confirm | `content.ts` → `site.address` |
| 4 | **Team members** — four invented placeholder people with placeholder portraits | `content.ts` → `team` |
| 5 | **Parent reviews** — three clearly-labelled placeholder quotes. Replace with real, consented quotes or delete the section | `content.ts` → `testimonials` |
| 6 | **Photographs** — stock images from Unsplash. Replace with photos of the actual centre | `content.ts` → `hero`, `story`, `programs[].image` |
| 7 | **Credential claims** — the scrolling strip says "Qualified special educators". Verify against the team's actual registrations | `content.ts` → `marquee` |
| 8 | **Staffing ratio** — the FAQ answer has a `TODO` where the real ratio should go | `content.ts` → `faqs` |
| 9 | **Social links** — Facebook / Instagram / YouTube are empty (empty links are hidden automatically) | `content.ts` → `site.social` |
| 10 | **Privacy policy & terms** — drafts only, not legal advice. Information about children with disabilities is sensitive personal data under the DPDP Act, 2023. Have a lawyer review both | `app/pages/privacy-policy.vue`, `app/pages/terms.vue` |
| 11 | **Contact form destination** — set `NUXT_ENQUIRY_WEBHOOK` or the form will tell visitors to phone instead | see *Contact form* below |

The three count-up figures (4 pathways / 6 services / 6 days) are deliberately
limited to things that are simply true of the page as written. They are safe
to publish, but the section is really meant for years of experience, staff
numbers and sessions per week — swap them in once you have figures you can
evidence.

---

## Quick start

```bash
bun install       # or npm install
bun run dev       # http://localhost:3000
```

```bash
bun run build     # production build into .output/
bun run preview   # serve the built site locally
```

Requires Node 20+ (built on Node 24).

---

## Editing the content

**Almost everything lives in one file: [`content.ts`](./content.ts).**
No component edits needed for day-to-day changes.

```ts
export const site = { … }        // name, phone, email, address, hours, social, SEO
export const nav = [ … ]         // header links (in-page anchors)
export const hero = { … }        // headline, body, trust words, buttons, photo
export const marquee = [ … ]     // the scrolling strip
export const story = { … }       // "Our Story"
export const programs = [ … ]    // the four programme cards
export const routine = [ … ]     // the day's four time blocks
export const team = [ … ]        // staff cards
export const testimonials = [ … ]// parent quotes
export const stats = [ … ]       // count-up figures
export const faqs = [ … ]        // accordion
export const ctaBanner = { … }   // closing call to action
export const footerColumns = [ … ]
```

### Colours

Two palettes, deliberately separated:

- **`brand`** — the logo colours exactly as drawn. Used only as *fills*:
  icon tiles, decorative rules, carousel dots.
- **`brandText`** — darkened versions of the same hues, used for anything
  carrying *text*, and for solid pills with white text on them.

Every value in `brandText` clears WCAG AA (4.5:1) both as dark text on the
cream background and as a background behind white text. The raw logo orange,
green, pink and yellow do not — which matters on a site whose readers include
families with visual impairments. Keep that split when adding content.

### Adding a programme or a team member

Append an object to the array in `content.ts`. Give it both a `color` (from
`brand`) and a `textColor` (from `brandText`). The carousel recalculates its
own dots from the real scroll width, so nothing else needs touching.

---

## Contact form

The form posts to `POST /api/enquiry` ([`server/api/enquiry.post.ts`](./server/api/enquiry.post.ts)),
which validates the submission (plus a honeypot field for bots) and forwards
it as JSON to whatever URL is in `NUXT_ENQUIRY_WEBHOOK`.

```bash
cp .env.example .env
# then set NUXT_ENQUIRY_WEBHOOK to a Formspree / Zapier / Make / Apps Script URL
```

Payload:

```json
{ "parentName": "…", "phone": "…", "email": "…", "childAge": "…",
  "concern": "…", "message": "…", "receivedAt": "…", "source": "nitara-website-contact-form" }
```

**If the variable is not set**, the endpoint returns `501` and the form shows
the phone and WhatsApp buttons instead. It never silently swallows a parent's
message.

---

## Deploying to Vercel

Vercel detects Nuxt automatically — no `vercel.json` needed.

### Option A — Git (recommended)

1. Push this repo to GitHub/GitLab/Bitbucket.
2. In Vercel: **Add New → Project**, import the repo.
3. Framework preset is detected as **Nuxt.js**. Leave Build Command
   (`nuxt build`) and Output Directory at their defaults.
4. **Settings → Environment Variables**, add for *Production* and *Preview*:
   - `NUXT_ENQUIRY_WEBHOOK` — your form destination URL
5. **Deploy.** Every push to `main` redeploys; branches get preview URLs.

### Option B — CLI

```bash
npm i -g vercel
vercel login
vercel          # preview deployment
vercel --prod   # production
```

Set the env var once with:

```bash
vercel env add NUXT_ENQUIRY_WEBHOOK production
```

### After the first deploy

1. Add the custom domain under **Settings → Domains**.
2. Update `site.url` in `content.ts` and the `Sitemap:` line in
   `public/robots.txt` to the real domain, then redeploy — canonical URLs,
   Open Graph tags and the sitemap all read from `site.url`.
3. Submit `https://yourdomain.com/sitemap.xml` in Google Search Console.

---

## Measured results

Lighthouse against the production build (`bun run build && bun run preview`),
Chrome 140 headless:

| | Performance | Accessibility | Best Practices | SEO |
|---|---|---|---|---|
| **Mobile** (slow 4G, 4× CPU throttle) | **92** | **100** | **100** | **100** |
| **Desktop** | **100** | **100** | **100** | **100** |

Mobile: FCP 2.3 s · LCP 2.9 s · TBT 20 ms · CLS 0.

Numbers will differ on Vercel — its CDN and HTTP/2 generally help, while the
remote Unsplash images are the main variable. They move once you swap in your
own photos.

What the scores cost, in case you change these:

- Fonts are **self-hosted** by `@nuxt/fonts`. The render-blocking request to
  `fonts.googleapis.com` was worth ~860 ms of First Contentful Paint.
- Icons are **bundled locally** via `@iconify-json/ph` and `@iconify-json/mdi`,
  so no runtime call to the Iconify API.
- There is deliberately **no `@nuxt/image`**. Every photo already comes from a
  CDN that resizes and format-negotiates (`SmartImage.vue` builds the srcset),
  so adding IPX would only ship a ~30 MB `sharp` binary tied to one CPU
  architecture — which also crashed the prerender step.
- The hero photo is **preloaded** with a matching `imagesrcset`, since it is
  the LCP element.

---

## Accessibility

Verified with Lighthouse/axe plus a scripted keyboard and screen-reader-shape
pass:

- Skip link is the first tab stop; `<main>`, `<header>`, `<footer>` landmarks;
  exactly one `<h1>`.
- FAQ accordion: real `<button>`s with `aria-expanded` / `aria-controls`,
  and Arrow/Home/End roving focus between questions.
- Carousels: native scroll-snap (so swipe and keyboard scrolling work with no
  JS), plus labelled arrow and dot buttons. Dot count is derived from the
  actual number of reachable scroll positions.
- Mobile menu: `aria-expanded`, body-scroll lock, closes on `Escape`.
- Marquee: the duplicated copy that makes the loop seamless is `aria-hidden`,
  so each phrase is announced once. Pauses on hover and on keyboard focus.
- Every image has `alt` text describing what is actually in the picture.
- Touch targets are ≥44 px with ≥8 px spacing.
- **`prefers-reduced-motion`** is honoured two ways: components read it in JS
  and render the resting state, and a `!important` CSS rule pins
  `[data-reveal]` elements to their resting state even before JS runs.

---

## Project structure

```
content.ts                      ← ALL content lives here
nuxt.config.ts
tailwind.config.ts
.env.example
app/
  app.vue                       skip link + layout
  layouts/default.vue
  pages/
    index.vue                   the one-pager (+ School & FAQPage JSON-LD)
    privacy-policy.vue
    terms.vue
  components/
    layout/   AppHeader.vue     sticky, scroll-aware, hamburger
              AppFooter.vue
    sections/ HeroSection.vue   TrustStrip.vue      StorySection.vue
              ProgramsSection.vue  RoutineSection.vue  TeamSection.vue
              TestimonialsSection.vue  StatsSection.vue  FaqSection.vue
              CtaSection.vue    ContactSection.vue
    ui/       Reveal.vue        the single scroll-entrance primitive
              AppButton.vue  SectionHeading.vue  Marquee.vue
              SmartImage.vue  ContactForm.vue
  composables/
    usePrefersReducedMotion.ts
    useCarousel.ts              shared carousel logic
  utils/motion.ts               every timing on the site, in one place
server/api/enquiry.post.ts
public/                         logo variants, favicons, OG image, robots.txt
```

### Motion

All timings live in [`app/utils/motion.ts`](./app/utils/motion.ts) so the page
shares one feel: a soft spring (`stiffness 110`, `damping 20`), 36 px of
travel, 0.1 s stagger between siblings, fired once on entry.

Scroll reveals go through `<UiReveal>`; the hero animates on load in sequence
instead. One rule worth knowing if you edit these: `reduced` must only change
the *values* passed to `<Motion>`, never which props are present — adding or
removing `initial`/`animate` on a live Motion element throws
`visualElement.getBaseTarget is not a function`.

---

## Credits

Photographs are placeholders from [Unsplash](https://unsplash.com) and
[placehold.co](https://placehold.co). Fonts are
[Baloo 2](https://fonts.google.com/specimen/Baloo+2) and
[Nunito](https://fonts.google.com/specimen/Nunito) (SIL Open Font License),
self-hosted at build time. Icons are
[Phosphor](https://phosphoricons.com) and [Material Design Icons](https://pictogrammers.com/library/mdi/).
