<script setup lang="ts">
/**
 * SectionHeading — eyebrow + title + optional body, revealed as a group
 * with a small stagger between the three lines.
 */
interface Props {
  eyebrow?: string;
  heading: string;
  body?: string;
  /** Left-align instead of centring */
  align?: "center" | "left";
  /** Colour of the eyebrow text */
  color?: string;
}

const props = withDefaults(defineProps<Props>(), {
  align: "center",
  color: "#bc430c",
});
</script>

<template>
  <div
    :class="[
      'max-w-2xl',
      align === 'center' ? 'mx-auto text-center' : 'text-left',
    ]"
  >
    <UiReveal v-if="eyebrow" :index="0">
      <p
        class="mb-3 text-sm font-extrabold uppercase tracking-[0.2em]"
        :style="{ color: props.color }"
      >
        {{ eyebrow }}
      </p>
    </UiReveal>

    <UiReveal :index="eyebrow ? 1 : 0">
      <h2 class="text-3xl leading-tight text-ink sm:text-4xl md:text-[2.75rem]">
        {{ heading }}
      </h2>
    </UiReveal>

    <UiReveal :index="eyebrow ? 2 : 1">
      <div
        class="brand-rule mt-6 w-24"
        :class="align === 'center' && 'mx-auto'"
        aria-hidden="true"
      />
    </UiReveal>

    <UiReveal v-if="body" :index="eyebrow ? 3 : 2">
      <p class="mt-6 text-lg leading-relaxed text-ink-muted">
        {{ body }}
      </p>
    </UiReveal>
  </div>
</template>
