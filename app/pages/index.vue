<script setup lang="ts">
/**
 * Home — the whole site is this one page.
 * Section order mirrors the information a parent needs, in the order they
 * tend to need it: what this is → proof → programmes → what a day looks like
 * → who teaches → what families say → common questions → how to get in touch.
 */
import { site, faqs, programs, hero } from "~~/content";

/** Hero photo is the LCP element — start fetching it with the document. */
const heroBase = hero.image.src.split("?")[0];
const heroSrcset = [320, 420, 560, 720, 900, 1120]
  .map((w) => `${heroBase}?auto=format&fit=crop&crop=entropy&w=${w}&h=${Math.round((w * 620) / 760)}&q=68 ${w}w`)
  .join(", ");

useHead({
  link: [
    { rel: "canonical", href: site.url },
    {
      rel: "preload",
      as: "image",
      imagesrcset: heroSrcset,
      imagesizes: "(min-width: 1024px) 620px, 100vw",
      fetchpriority: "high",
    },
  ],
  script: [
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "School",
        name: site.name,
        alternateName: site.shortName,
        description: site.seo.description,
        url: site.url,
        logo: `${site.url}${site.logo}`,
        image: `${site.url}${site.seo.ogImage}`,
        telephone: `+${site.phoneRaw}`,
        email: site.email,
        address: {
          "@type": "PostalAddress",
          streetAddress: "Plot No. 110, Pocket 27, Sector 24, Rohini",
          addressLocality: "New Delhi",
          addressRegion: "Delhi",
          postalCode: "110085",
          addressCountry: "IN",
        },
        openingHoursSpecification: [
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            opens: "09:00",
            closes: "17:00",
          },
          {
            "@type": "OpeningHoursSpecification",
            dayOfWeek: ["Saturday"],
            opens: "09:00",
            closes: "14:00",
          },
        ],
        hasOfferCatalog: {
          "@type": "OfferCatalog",
          name: "Programs",
          itemListElement: programs.map((p) => ({
            "@type": "Offer",
            itemOffered: { "@type": "Service", name: p.title, description: p.description },
          })),
        },
      }),
    },
    {
      type: "application/ld+json",
      innerHTML: JSON.stringify({
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: faqs.map((f) => ({
          "@type": "Question",
          name: f.question,
          acceptedAnswer: { "@type": "Answer", text: f.answer },
        })),
      }),
    },
  ],
});
</script>

<template>
  <div>
    <SectionsHeroSection />
    <SectionsTrustStrip />
    <SectionsStorySection />
    <SectionsProgramsSection />
    <SectionsRoutineSection />
    <SectionsTeamSection />
    <SectionsTestimonialsSection />
    <SectionsStatsSection />
    <SectionsFaqSection />
    <SectionsCtaSection />
    <SectionsContactSection />
  </div>
</template>
