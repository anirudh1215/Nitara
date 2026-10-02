<script setup lang="ts">
/**
 * ProgramsSection — carousel of age-band programmes.
 *
 * Implementation notes:
 *  - The track is a native horizontal scroll container with scroll-snap, so
 *    touch swipe, trackpad and keyboard scrolling all work for free and
 *    nothing breaks if JS fails.
 *  - Arrow buttons scroll by one card and loop around at either end.
 *  - Cards are focusable list items; arrows are real <button>s with labels
 *    and are disabled-looking (but never removed) so focus order is stable.
 */
import { programs, programsSection } from "~~/content";

const { track, activeIndex, pageCount, scrollToIndex, next, prev, onScroll } =
  useCarousel();
</script>

<template>
  <section id="programs" class="bg-sky px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <!-- Heading + arrows -->
      <div class="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
        <UiSectionHeading
          :eyebrow="programsSection.eyebrow"
          :heading="programsSection.heading"
          :body="programsSection.body"
          align="left"
          color="#1c4e9d"
        />

        <UiReveal :delay="0.2" class="flex shrink-0 gap-3">
          <button
            type="button"
            class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white"
            aria-label="Previous program"
            aria-controls="programs-track"
            @click="prev"
          >
            <Icon name="ph:arrow-left-bold" class="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            class="flex h-12 w-12 items-center justify-center rounded-full bg-white text-primary-700 shadow-soft transition-all hover:-translate-y-0.5 hover:bg-primary-600 hover:text-white"
            aria-label="Next program"
            aria-controls="programs-track"
            @click="next"
          >
            <Icon name="ph:arrow-right-bold" class="h-5 w-5" aria-hidden="true" />
          </button>
        </UiReveal>
      </div>

      <!-- Track -->
      <ul
        id="programs-track"
        ref="track"
        class="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
        role="list"
        @scroll.passive="onScroll"
      >
        <UiReveal
          v-for="(program, i) in programs"
          :key="program.title"
          as="li"
          :index="i"
          data-card
          class="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc(33.333%-1rem)]"
        >
          <article
            class="group flex h-full flex-col overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
          >
            <!-- Image with hover zoom -->
            <div class="relative overflow-hidden">
              <UiSmartImage
                :src="program.image.src"
                :alt="program.image.alt"
                :width="440"
                :height="240"
                sizes="(min-width: 1024px) 380px, (min-width: 640px) 60vw, 85vw"
                img-class="h-52 w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <span
                class="absolute left-4 top-4 rounded-full px-3 py-1.5 text-xs font-extrabold text-white shadow-soft"
                :style="{ background: program.textColor }"
              >
                {{ program.ages }}
              </span>
            </div>

            <div class="flex flex-1 flex-col p-7">
              <span
                class="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                :style="{ background: `color-mix(in srgb, ${program.color} 14%, #fff)` }"
              >
                <Icon
                  :name="program.icon"
                  class="h-6 w-6"
                  :style="{ color: program.color }"
                  aria-hidden="true"
                />
              </span>

              <h3 class="text-xl text-ink">{{ program.title }}</h3>
              <p class="mt-3 flex-1 leading-relaxed text-ink-muted">
                {{ program.description }}
              </p>

              <ul class="mt-5 space-y-2" role="list">
                <li
                  v-for="h in program.highlights"
                  :key="h"
                  class="flex items-start gap-2 text-sm font-semibold text-ink-muted"
                >
                  <Icon
                    name="ph:check-circle-fill"
                    class="mt-0.5 h-4 w-4 shrink-0"
                    :style="{ color: program.textColor }"
                    aria-hidden="true"
                  />
                  {{ h }}
                </li>
              </ul>
            </div>
          </article>
        </UiReveal>
      </ul>

      <!-- Dots -->
      <div v-if="pageCount > 1" class="mt-6 flex justify-center gap-2">
        <button
            v-for="i in pageCount"
            :key="`dot-${i}`"
            type="button"
            class="group flex h-11 w-11 items-center justify-center"
            :aria-label="`Go to programs, position ${i} of ${pageCount}`"
            :aria-current="activeIndex === i - 1"
            @click="scrollToIndex(i - 1)"
          >
            <span
              class="h-2.5 rounded-full transition-all duration-300"
              :class="activeIndex === i - 1 ? 'w-8 bg-primary-600' : 'w-2.5 bg-primary-200 group-hover:bg-primary-300'"
            />
          </button>
      </div>
    </div>
  </section>
</template>
