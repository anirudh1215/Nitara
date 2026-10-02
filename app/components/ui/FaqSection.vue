<script setup lang="ts">
/**
 * FaqSection — Reusable accordion-style FAQ component.
 * Displays a list of questions and answers with smooth expand/collapse animation.
 */

interface FaqItem {
  question: string;
  answer: string;
}

interface Props {
  items: FaqItem[];
}

defineProps<Props>();

const openIndex = ref<number | null>(null);

function toggle(index: number) {
  openIndex.value = openIndex.value === index ? null : index;
}
</script>

<template>
  <div class="mx-auto max-w-3xl divide-y divide-secondary-200">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="group"
    >
      <button
        :id="`faq-btn-${index}`"
        class="flex w-full items-center justify-between gap-4 py-5 text-left transition-colors duration-200 hover:text-primary-600"
        :aria-expanded="openIndex === index"
        :aria-controls="`faq-panel-${index}`"
        @click="toggle(index)"
      >
        <span
          class="text-lg font-semibold"
          :style="{ color: openIndex === index ? 'var(--color-primary)' : 'var(--color-text)' }"
        >
          {{ item.question }}
        </span>
        <Icon
          :name="openIndex === index ? 'ph:minus-bold' : 'ph:plus-bold'"
          class="h-5 w-5 shrink-0 transition-transform duration-300"
          :style="{ color: 'var(--color-primary)' }"
        />
      </button>

      <div
        :id="`faq-panel-${index}`"
        role="region"
        :aria-labelledby="`faq-btn-${index}`"
        class="grid transition-all duration-300 ease-in-out"
        :class="openIndex === index ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'"
      >
        <div class="overflow-hidden">
          <p
            class="pb-5 leading-relaxed"
            style="color: var(--color-text-muted)"
          >
            {{ item.answer }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>
