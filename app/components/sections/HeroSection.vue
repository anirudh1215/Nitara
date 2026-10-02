<script setup lang="ts">
/**
 * HeroSection — first screen.
 *
 * Unlike every other section (which animates on scroll), the hero animates
 * on page load in a deliberate sequence: eyebrow → headline → body →
 * trust words → buttons, with the photo sliding in alongside. A slight
 * scale-up on the image gives the entrance a little weight.
 */
import { hero, site } from "~~/content";
import { softSpring } from "~/utils/motion";

const reduced = usePrefersReducedMotion();

/**
 * Entrance props for the nth element in the load-in sequence.
 *
 * The returned object always has the same keys — toggling `initial`/`animate`
 * on and off crashes motion-v, so reduced motion is expressed as a
 * zero-distance, zero-duration animation instead. `data-reveal` additionally
 * picks up the !important resting-state rule in main.css.
 */
function step(index: number, from: "bottom" | "right" = "bottom") {
  const rest = { opacity: 1, x: 0, y: 0, scale: 1 };

  if (reduced.value) {
    return { initial: rest, animate: rest, transition: { duration: 0 } };
  }

  return {
    initial:
      from === "right"
        ? { opacity: 0, x: 48, y: 0, scale: 0.97 }
        : { opacity: 0, x: 0, y: 28, scale: 1 },
    animate: rest,
    transition: { ...softSpring, delay: 0.08 + index * 0.1 },
  };
}
</script>

<template>
  <section
    id="top"
    class="relative overflow-hidden bg-cream px-4 pb-16 pt-28 sm:px-6 sm:pb-24 sm:pt-36 lg:px-8 lg:pb-28 lg:pt-40"
  >
    <!-- Soft decorative blobs -->
    <div
      class="pointer-events-none absolute -left-24 -top-24 h-80 w-80 rounded-full bg-sky opacity-70 blur-3xl"
      aria-hidden="true"
    />
    <div
      class="pointer-events-none absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-blush opacity-70 blur-3xl"
      aria-hidden="true"
    />

    <div
      class="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.05fr_1fr] lg:gap-16"
    >
      <!-- Copy -->
      <div>
        <Motion as="p" data-reveal v-bind="step(0)"
          class="mb-5 inline-flex items-center gap-2 rounded-full bg-white px-4 py-2 text-sm font-extrabold text-primary-700 shadow-soft">
          <Icon name="ph:map-pin-fill" class="h-4 w-4 text-brand-pink" aria-hidden="true" />
          {{ hero.eyebrow }}
        </Motion>

        <Motion as="h1" data-reveal v-bind="step(1)"
          class="text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
          {{ hero.heading }}
        </Motion>

        <Motion as="p" data-reveal v-bind="step(2)"
          class="mt-6 max-w-xl text-lg leading-relaxed text-ink-muted">
          {{ hero.body }}
        </Motion>

        <!-- Trust words -->
        <ul class="mt-8 flex flex-wrap gap-x-6 gap-y-3" role="list">
          <Motion
            v-for="(word, i) in hero.trustWords"
            :key="word.label"
            as="li"
            data-reveal
            v-bind="step(3 + i * 0.4)"
            class="flex items-center gap-2 text-[15px] font-extrabold text-ink"
          >
            <span class="flex h-10 w-10 items-center justify-center rounded-full bg-white shadow-soft">
              <Icon :name="word.icon" class="h-5 w-5 text-brand-green" aria-hidden="true" />
            </span>
            {{ word.label }}
          </Motion>
        </ul>

        <Motion as="div" data-reveal v-bind="step(5)"
          class="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
          <UiAppButton :to="hero.primaryCta.to" size="lg">
            {{ hero.primaryCta.label }}
          </UiAppButton>
          <UiAppButton :to="hero.secondaryCta.to" size="lg" variant="outline">
            {{ hero.secondaryCta.label }}
          </UiAppButton>
        </Motion>

        <Motion as="p" data-reveal v-bind="step(6)" class="mt-6 text-sm text-ink-muted">
          Or call us directly on
          <a
            :href="`tel:+${site.phoneRaw}`"
            class="font-extrabold text-primary-700 underline underline-offset-4 hover:text-accent-700"
          >{{ site.phone }}</a>
        </Motion>
      </div>

      <!-- Photo -->
      <Motion as="div" data-reveal v-bind="step(2, 'right')" class="relative">
        <div class="overflow-hidden rounded-[2.5rem] shadow-lift">
          <UiSmartImage
            :src="hero.image.src"
            :alt="hero.image.alt"
            :width="760"
            :height="620"
            sizes="(min-width: 1024px) 620px, 100vw"
            img-class="h-[320px] w-full object-cover sm:h-[440px] lg:h-[560px]"
            priority
          />
        </div>

        <!-- Floating accent card -->
        <div
          class="absolute -bottom-6 -left-4 flex items-center gap-3 rounded-3xl bg-white p-4 shadow-lift sm:left-6"
        >
          <span class="flex h-11 w-11 items-center justify-center rounded-2xl bg-mint">
            <Icon name="ph:heart-fill" class="h-5 w-5 text-brand-green" aria-hidden="true" />
          </span>
          <p class="text-sm font-extrabold leading-tight text-ink">
            {{ site.motto }}
            <span class="block font-semibold text-ink-muted">{{ site.parentOrg }}</span>
          </p>
        </div>
      </Motion>
    </div>
  </section>
</template>
