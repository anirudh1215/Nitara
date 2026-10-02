<script setup lang="ts">
/**
 * TestimonialCard — Client quote card with author info.
 */

interface Props {
  name: string;
  role: string;
  company: string;
  quote: string;
  avatar?: string;
}

defineProps<Props>();

/** Generate initials for avatar fallback */
function getInitials(name: string): string {
  return name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .toUpperCase()
    .slice(0, 2);
}
</script>

<template>
  <article
    class="flex flex-col rounded-2xl border border-secondary-200 bg-white p-8 transition-all duration-300 hover:shadow-lg"
  >
    <!-- Quote icon -->
    <svg
      class="mb-4 h-8 w-8 text-primary-400"
      fill="currentColor"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <path
        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z"
      />
    </svg>

    <!-- Quote text -->
    <blockquote class="mb-6 flex-1 text-lg leading-relaxed text-secondary-600">
      "{{ quote }}"
    </blockquote>

    <!-- Author -->
    <div class="flex items-center gap-4">
      <!-- Avatar / Initials -->
      <div
        class="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-sm font-bold text-primary-700"
      >
        <img
          v-if="avatar"
          :src="avatar"
          :alt="name"
          class="h-full w-full rounded-full object-cover"
          loading="lazy"
        />
        <span v-else>{{ getInitials(name) }}</span>
      </div>

      <div>
        <p class="font-semibold text-secondary-900">{{ name }}</p>
        <p class="text-sm text-secondary-500">{{ role }}, {{ company }}</p>
      </div>
    </div>
  </article>
</template>
