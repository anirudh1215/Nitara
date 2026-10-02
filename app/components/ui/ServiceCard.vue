<script setup lang="ts">
/**
 * ServiceCard — Displays a single service offering.
 */

interface Props {
  icon: string;
  title: string;
  description: string;
}

defineProps<Props>();
</script>

<template>
  <article
    class="group rounded-2xl border border-secondary-200 bg-white p-8 transition-all duration-300 hover:border-primary-300 hover:shadow-lg hover:shadow-primary-100/50"
  >
    <!-- Icon -->
    <div
      class="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-primary-50 transition-colors duration-300 group-hover:bg-primary-100"
    >
      <Icon :name="icon" class="h-7 w-7 text-primary-600" />
    </div>

    <!-- Title -->
    <h3
      class="mb-3 text-xl font-semibold text-secondary-900 group-hover:text-primary-600 transition-colors duration-300"
    >
      {{ title }}
    </h3>

    <!-- Description -->
    <p class="leading-relaxed text-secondary-500">
      {{ description }}
    </p>
  </article>
</template>
