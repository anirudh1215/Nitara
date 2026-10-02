<script setup lang="ts">
/**
 * ContactSection — enquiry form plus the practical details a parent needs:
 * address, phone, email, opening hours and a map.
 */
import { contactSection, site } from "~~/content";

const mapSrc = computed(
  () =>
    `https://www.google.com/maps?q=${encodeURIComponent(site.mapQuery)}&output=embed`
);
</script>

<template>
  <section id="contact" class="bg-cream px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <UiSectionHeading
        :eyebrow="contactSection.eyebrow"
        :heading="contactSection.heading"
        :body="contactSection.body"
        color="#bc430c"
      />

      <div class="mt-16 grid gap-8 lg:grid-cols-[1.1fr_1fr]">
        <!-- Form -->
        <UiReveal from="left">
          <div class="rounded-[2rem] bg-white p-7 shadow-soft sm:p-9">
            <h3 class="text-2xl text-ink">Tell us about your child</h3>
            <p class="mt-2 text-ink-muted">
              Fill this in and we will call you back. Nothing you share goes further
              than our team.
            </p>
            <div class="mt-7">
              <UiContactForm />
            </div>
          </div>
        </UiReveal>

        <!-- Details -->
        <UiReveal from="right">
          <div class="flex h-full flex-col gap-6">
            <div class="rounded-[2rem] bg-white p-7 shadow-soft sm:p-8">
              <ul class="space-y-6" role="list">
                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-sky">
                    <Icon name="ph:map-pin-fill" class="h-5 w-5 text-primary-600" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 class="font-display font-bold text-ink">Visit us</h4>
                    <p class="mt-1 text-ink-muted">
                      <span v-for="line in site.addressLines" :key="line" class="block">
                        {{ line }}
                      </span>
                    </p>
                  </div>
                </li>

                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-blush">
                    <Icon name="ph:phone-fill" class="h-5 w-5 text-accent-600" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 class="font-display font-bold text-ink">Call or WhatsApp</h4>
                    <a
                      :href="`tel:+${site.phoneRaw}`"
                      class="mt-1 block font-extrabold text-primary-700 hover:text-accent-700"
                    >{{ site.phone }}</a>
                    <a
                      :href="site.whatsapp"
                      target="_blank"
                      rel="noopener noreferrer"
                      class="mt-1 inline-flex items-center gap-1.5 text-sm font-bold text-[#2a7d24] hover:underline"
                    >
                      <Icon name="mdi:whatsapp" class="h-4 w-4" aria-hidden="true" />
                      Message us on WhatsApp
                    </a>
                  </div>
                </li>

                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-lilac">
                    <Icon name="ph:envelope-fill" class="h-5 w-5 text-brand-purple" aria-hidden="true" />
                  </span>
                  <div>
                    <h4 class="font-display font-bold text-ink">Email</h4>
                    <a
                      :href="`mailto:${site.email}`"
                      class="mt-1 block break-all font-semibold text-primary-700 hover:text-accent-700"
                    >{{ site.email }}</a>
                  </div>
                </li>

                <li class="flex gap-4">
                  <span class="flex h-11 w-11 shrink-0 items-center justify-center rounded-2xl bg-mint">
                    <Icon name="ph:clock-fill" class="h-5 w-5 text-brand-green" aria-hidden="true" />
                  </span>
                  <div class="flex-1">
                    <h4 class="font-display font-bold text-ink">Opening hours</h4>
                    <ul class="mt-1.5 space-y-1 text-sm text-ink-muted" role="list">
                      <li
                        v-for="slot in site.hours"
                        :key="slot.days"
                        class="flex justify-between gap-4"
                      >
                        <span>{{ slot.days }}</span>
                        <span class="font-semibold text-ink">{{ slot.time }}</span>
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>

            <!-- Map -->
            <div class="flex-1 overflow-hidden rounded-[2rem] shadow-soft">
              <iframe
                :src="mapSrc"
                :title="`Map showing ${site.name} in Rohini, New Delhi`"
                class="h-full min-h-[260px] w-full border-0"
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
