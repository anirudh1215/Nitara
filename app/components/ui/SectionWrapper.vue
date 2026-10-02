<script setup lang="ts">
/**
 * SectionWrapper — Consistent section layout container.
 * Provides max-width, padding, optional title & subtitle.
 */

interface Props {
  /** Section title */
  title?: string;
  /** Subtitle text beneath the title */
  subtitle?: string;
  /** HTML id for anchor links */
  id?: string;
  /** Alternate background color */
  alt?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  alt: false,
});
</script>

<template>
  <section
    :id="id"
    :class="[
      'py-16 md:py-24 px-4 sm:px-6 lg:px-8',
      alt ? 'bg-secondary-50' : 'bg-white',
    ]"
  >
    <div class="mx-auto max-w-7xl">
      <!-- Section header -->
      <div v-if="title" class="mb-12 text-center md:mb-16">
        <h2 class="text-3xl font-bold text-secondary-900 md:text-4xl">
          {{ title }}
        </h2>
        <p
          v-if="subtitle"
          class="mx-auto mt-4 max-w-2xl text-lg text-secondary-500"
        >
          {{ subtitle }}
        </p>
      </div>

      <slot />
    </div>
  </section>
</template>
