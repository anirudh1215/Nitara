<script setup lang="ts">
import { site } from "~~/content";

useHead({
  title: `Terms & Conditions — ${site.name}`,
  meta: [
    {
      name: "description",
      content: `Terms governing the use of the ${site.name} website.`,
    },
    { name: "robots", content: "noindex, follow" },
  ],
});
</script>

<template>
  <article class="bg-cream px-4 pb-24 pt-32 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-3xl">
      <h1 class="text-4xl text-ink sm:text-5xl">Terms &amp; Conditions</h1>
      <div class="brand-rule mt-6 w-24" aria-hidden="true" />

      <div class="mt-10 space-y-6 text-lg leading-relaxed text-ink-muted">
        <p class="rounded-2xl bg-butter p-5 text-base text-ink">
          <strong>Note for the site owner:</strong> this is a starting draft, not
          legal advice. Have it reviewed by a lawyer and replace this notice before
          the site goes live.
        </p>

        <h2 class="pt-4 text-2xl text-ink">About this website</h2>
        <p>
          This website is operated by {{ site.name }} ({{ site.parentOrg }}),
          {{ site.address }}.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Information, not diagnosis</h2>
        <p>
          Everything on this site is general information about the centre and its
          programmes. It is not a clinical assessment, a diagnosis, or advice about
          any individual child. Nothing here should be used as a substitute for a
          proper assessment by a qualified professional. If you are worried about
          your child, contact us or your doctor.
        </p>

        <h2 class="pt-4 text-2xl text-ink">No guaranteed outcomes</h2>
        <p>
          Children progress at different rates, and progress depends on many factors
          outside anyone's control. We describe what our programmes involve; we do
          not promise any particular result, timeline or outcome for any child.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Enquiries</h2>
        <p>
          Sending an enquiry through this site does not create a place for your child
          or any obligation on either side. Enrolment follows assessment and a
          written agreement on programme and fees.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Accuracy</h2>
        <p>
          We try to keep this site accurate and current, but details such as timings,
          programmes and fees can change. Please confirm anything you intend to rely
          on by calling {{ site.phone }}.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Content and images</h2>
        <p>
          The {{ site.shortName }} name and logo belong to {{ site.parentOrg }}.
          Photographs on this site may include stock imagery used for illustration.
        </p>

        <h2 class="pt-4 text-2xl text-ink">External links</h2>
        <p>
          Where this site links to other services, we are not responsible for their
          content or their handling of your information.
        </p>

        <h2 class="pt-4 text-2xl text-ink">Contact</h2>
        <p>
          Questions about these terms:
          <a :href="`mailto:${site.email}`" class="font-bold text-primary-700 underline">
            {{ site.email }}</a>
          or {{ site.phone }}.
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
