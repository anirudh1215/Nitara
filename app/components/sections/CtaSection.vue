<script setup lang="ts">
/**
 * CtaSection — closing call to action. Always offers the phone number
 * alongside the button, because most parents will simply want to call.
 */
import { ctaBanner, site } from "~~/content";
</script>

<template>
  <section class="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <UiReveal class="mx-auto max-w-5xl">
      <div
        class="relative overflow-hidden rounded-[2.5rem] px-6 py-16 text-center shadow-lift sm:px-12"
        style="background: linear-gradient(135deg, #1c4e9d 0%, #2e6fc6 55%, #7b3f98 100%)"
      >
        <!-- Decorative blobs -->
        <div
          class="pointer-events-none absolute -left-12 -top-12 h-52 w-52 rounded-full bg-white/10 blur-2xl"
          aria-hidden="true"
        />
        <div
          class="pointer-events-none absolute -bottom-16 -right-10 h-64 w-64 rounded-full bg-brand-pink/25 blur-3xl"
          aria-hidden="true"
        />

        <div class="relative">
          <h2 class="text-3xl text-white sm:text-4xl md:text-5xl">
            {{ ctaBanner.heading }}
          </h2>
          <p class="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-white/85">
            {{ ctaBanner.body }}
          </p>

          <div class="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <UiAppButton :to="ctaBanner.cta.to" size="lg" variant="white">
              {{ ctaBanner.cta.label }}
            </UiAppButton>
            <UiAppButton
              :href="`tel:+${site.phoneRaw}`"
              size="lg"
              variant="outline"
              class="!border-white !text-white hover:!bg-white/10"
            >
              <Icon name="ph:phone-call-fill" class="h-5 w-5" aria-hidden="true" />
              {{ site.phone }}
            </UiAppButton>
          </div>
        </div>
      </div>
    </UiReveal>
  </section>
</template>
