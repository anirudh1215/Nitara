<script setup lang="ts">
/**
 * RoutineSection — the shape of a day, as a vertical timeline on mobile and
 * a horizontal one from `lg` up. Blocks stagger in one after another.
 */
import { routine, routineSection } from "~~/content";
</script>

<template>
  <section id="routine" class="bg-cream px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <UiSectionHeading
        :eyebrow="routineSection.eyebrow"
        :heading="routineSection.heading"
        :body="routineSection.body"
        color="#2a7d24"
      />

      <ol class="relative mt-16 grid gap-8 lg:grid-cols-4 lg:gap-6" role="list">
        <!-- Connecting line (desktop only) -->
        <div
          class="absolute left-0 right-0 top-7 hidden h-0.5 bg-gradient-to-r from-brand-yellow via-brand-blue to-brand-pink lg:block"
          aria-hidden="true"
        />

        <UiReveal
          v-for="(block, i) in routine"
          :key="block.title"
          as="li"
          :index="i"
          class="relative"
        >
          <!-- Marker -->
          <span
            class="relative z-10 mb-5 flex h-14 w-14 items-center justify-center rounded-2xl text-white shadow-soft"
            :style="{ background: block.color }"
          >
            <Icon :name="block.icon" class="h-7 w-7" aria-hidden="true" />
          </span>

          <p
            class="text-sm font-extrabold uppercase tracking-wider"
            :style="{ color: block.textColor }"
          >
            {{ block.time }}
          </p>
          <h3 class="mt-1.5 text-xl text-ink">{{ block.title }}</h3>
          <p class="mt-3 leading-relaxed text-ink-muted">{{ block.description }}</p>
        </UiReveal>
      </ol>
    </div>
  </section>
</template>
