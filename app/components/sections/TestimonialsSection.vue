<script setup lang="ts">
/**
 * TestimonialsSection — looping carousel of parent quotes.
 *
 * Same scroll-snap approach as the programs carousel: native horizontal
 * scrolling (so swipe and keyboard work without custom handlers) plus arrow
 * buttons that step and loop.
 *
 * The quotes currently in content.ts are clearly-labelled placeholders — see
 * the warning there before publishing.
 */
import { testimonials, testimonialsSection } from "~~/content";

const { track, activeIndex, pageCount, scrollToIndex, next, prev, onScroll } =
  useCarousel();
</script>

<template>
  <section class="bg-blush px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <UiSectionHeading
        :eyebrow="testimonialsSection.eyebrow"
        :heading="testimonialsSection.heading"
        color="#c41d73"
      />

      <ul
        ref="track"
        class="mt-14 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
        @scroll.passive="onScroll"
      >
        <UiReveal
          v-for="(item, i) in testimonials"
          :key="item.name"
          as="li"
          :index="i"
          data-card
          class="w-[88%] shrink-0 snap-center sm:w-[60%] lg:w-[calc(33.333%-1rem)]"
        >
          <figure
            class="flex h-full flex-col rounded-[2rem] bg-white p-8 shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
          >
            <Icon
              name="ph:quotes-fill"
              class="h-9 w-9"
              :style="{ color: item.color }"
              aria-hidden="true"
            />
            <blockquote class="mt-5 flex-1 text-lg leading-relaxed text-ink">
              {{ item.quote }}
            </blockquote>
            <figcaption class="mt-7 flex items-center gap-3">
              <span
                class="flex h-11 w-11 items-center justify-center rounded-full text-sm font-extrabold text-white"
                :style="{ background: item.textColor }"
                aria-hidden="true"
              >
                {{ item.name.split(" ").map((w) => w[0]).join("").slice(0, 2) }}
              </span>
              <span>
                <span class="block font-extrabold text-ink">{{ item.name }}</span>
                <span class="block text-sm text-ink-muted">{{ item.detail }}</span>
              </span>
            </figcaption>
          </figure>
        </UiReveal>
      </ul>

      <!-- Controls -->
      <div class="mt-8 flex items-center justify-center gap-4">
        <button
          type="button"
          class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white"
          aria-label="Previous review"
          @click="prev"
        >
          <Icon name="ph:arrow-left-bold" class="h-5 w-5" aria-hidden="true" />
        </button>

        <div class="flex gap-2">
          <button
            v-for="i in pageCount"
            :key="`dot-${i}`"
            type="button"
            class="group flex h-11 w-11 items-center justify-center"
            :aria-label="`Go to reviews, position ${i} of ${pageCount}`"
            :aria-current="activeIndex === i - 1"
            @click="scrollToIndex(i - 1)"
          >
            <span
              class="h-2.5 rounded-full transition-all duration-300"
              :class="activeIndex === i - 1 ? 'w-8 bg-brand-pink' : 'w-2.5 bg-white group-hover:bg-pink-200'"
            />
          </button>
        </div>

        <button
          type="button"
          class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white"
          aria-label="Next review"
          @click="next"
        >
          <Icon name="ph:arrow-right-bold" class="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  </section>
</template>
