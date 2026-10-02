<script setup lang="ts">
import { site } from "~~/content";

useHead({
  title: `Privacy Policy — ${site.name}`,
  meta: [
    {
      name: "description",
      content: `How ${site.name} collects, uses and protects information about children and families.`,
    },
    { name: "robots", content: "noindex, follow" },
  ],
});
</script>

<template>
  <article class="bg-cream px-4 pb-24 pt-32 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <h1 class="text-4xl text-ink sm:text-5xl">Privacy Policy</h1>
      <div class="brand-rule mt-6 w-24" aria-hidden="true" />

      <div class="mt-10 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p class="rounded-2xl bg-butter p-5 text-base text-ink">
          <strong>Note for the site owner:</strong> this is a starting draft, not
          legal advice. Information about children with disabilities is sensitive
          personal data under India's Digital Personal Data Protection Act, 2023.
          Have this page reviewed by a lawyer and replace this notice before the
          site goes live.
        </p>

        <h2 class="pt-4 text-2xl text-ink">What we collect</h2>
        <p>
          When you contact us through this website we collect the name and phone
          number you give us, your email address if you provide one, and whatever
          you choose to tell us about your child — which may include their age and
          the difficulties you have noticed.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Why we collect it</h2>
        <p>
          Solely to respond to your enquiry, arrange an assessment or visit, and —
          if your child enrols — to plan and deliver their programme. We do not sell
          your information, and we do not use it for advertising.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Who can see it</h2>
        <p>
          Enquiries are seen by the staff at {{ site.name }} who need to act on
          them. Clinical and educational records are kept confidential within the
          team working with your child. We share information outside the centre only
          with your consent, or where the law requires it — for example, a
          safeguarding obligation.
        </p>

        <h2 class="pt-4 text-2xl text-ink">How long we keep it</h2>
        <p>
          Enquiries that do not lead to enrolment are deleted once they are no longer
          needed. Records for enrolled children are retained for as long as we are
          required to keep them.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Your rights</h2>
        <p>
          You can ask us what information we hold about you or your child, ask for it
          to be corrected, or ask us to delete it. Write to
          <a :href="`mailto:${site.email}`" class="font-bold text-primary-700 underline">
            {{ site.email }}</a>
          or call {{ site.phone }}.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Photographs</h2>
        <p>
          We do not publish photographs or videos of any child without separate,
          specific written consent from a parent or guardian, and that consent can be
          withdrawn at any time.
        </p>

        <h2 class="pt-4 text-2xl text-ink">This website</h2>
        <p>
          This site does not use advertising or analytics cookies. Fonts and some
          images are loaded from Google Fonts and Unsplash, which will see your IP
          address as part of serving those files. The map on the contact section is
          embedded from Google Maps.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Contact</h2>
        <p>
          {{ site.name }}<br />
          {{ site.address }}<br />
          {{ site.phone }} ·
          <a :href="`mailto:${site.email}`" class="font-bold text-primary-700 underline">
            {{ site.email }}</a>
        </p>
      </div>

      <NuxtLink
        to="/"
        class="mt-12 inline-flex items-center gap-2 font-bold text-primary-700 hover:text-accent-700"
      >
        <Icon name="ph:arrow-left-bold" class="h-4 w-4" aria-hidden="true" />
        Back to home
      </NuxtLink>
    </div>
  </article>
</template>
