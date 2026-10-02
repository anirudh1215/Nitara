<script setup lang="ts">
/**
 * StorySection — mission statement, supporting image and a jump link.
 * Copy slides in from the left, image from the right.
 */
import { story } from "~~/content";
</script>

<template>
  <section id="about" class="bg-cream px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20">
      <!-- Image -->
      <UiReveal from="left" class="order-2 lg:order-1">
        <div class="relative">
          <div class="overflow-hidden rounded-[2.5rem] shadow-lift">
            <UiSmartImage
              :src="story.image.src"
              :alt="story.image.alt"
              :width="700"
              :height="580"
              sizes="(min-width: 1024px) 560px, 100vw"
              img-class="h-[340px] w-full object-cover sm:h-[460px]"
            />
          </div>
          <!-- Decorative colour blocks -->
          <div
            class="absolute -right-5 -top-5 h-24 w-24 rounded-3xl bg-butter"
            aria-hidden="true"
          />
          <div
            class="absolute -bottom-5 -left-5 h-20 w-20 rounded-full bg-lilac"
            aria-hidden="true"
          />
        </div>
      </UiReveal>

      <!-- Copy -->
      <div class="order-1 lg:order-2">
        <UiSectionHeading
          :eyebrow="story.eyebrow"
          :heading="story.heading"
          align="left"
          color="#c41d73"
        />

        <UiReveal
          v-for="(para, i) in story.paragraphs"
          :key="i"
          :index="i + 1"
        >
          <p class="mt-6 text-lg leading-relaxed text-ink-muted">{{ para }}</p>
        </UiReveal>

        <ul class="mt-8 space-y-3" role="list">
          <UiReveal
            v-for="(point, i) in story.points"
            :key="point"
            as="li"
            :index="i"
            :delay="0.15"
            class="flex items-start gap-3"
          >
            <span
              class="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-mint"
            >
              <Icon name="ph:check-bold" class="h-3.5 w-3.5 text-brand-green" aria-hidden="true" />
            </span>
            <span class="font-semibold text-ink">{{ point }}</span>
          </UiReveal>
        </ul>

        <UiReveal :delay="0.3" class="mt-9">
          <UiAppButton :to="story.cta.to" variant="outline">
            {{ story.cta.label }}
            <Icon name="ph:arrow-right-bold" class="h-4 w-4" aria-hidden="true" />
          </UiAppButton>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
