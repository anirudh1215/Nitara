<script setup lang="ts">
/**
 * AppButton — Reusable button / NuxtLink component.
 * Renders as <NuxtLink> when `to` is provided, otherwise a <button>.
 */

interface Props {
  /** Route path — renders as NuxtLink when set */
  to?: string;
  /** Visual variant */
  variant?: "primary" | "outline" | "ghost";
  /** Size preset */
  size?: "sm" | "md" | "lg";
  /** HTML button type (ignored when `to` is set) */
  type?: "button" | "submit" | "reset";
  /** Disabled state */
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "primary",
  size: "md",
  type: "button",
  disabled: false,
});

const baseClasses =
  "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2";

const variantClasses: Record<string, string> = {
  primary:
    "bg-primary-600 text-white hover:bg-primary-700 active:bg-primary-800 shadow-sm hover:shadow-md",
  outline:
    "border-2 border-primary-600 text-primary-600 hover:bg-primary-50 active:bg-primary-100",
  ghost:
    "text-primary-600 hover:bg-primary-50 active:bg-primary-100",
};

const sizeClasses: Record<string, string> = {
  sm: "px-4 py-2 text-sm",
  md: "px-6 py-2.5 text-base",
  lg: "px-8 py-3 text-lg",
};

const classes = computed(() => [
  baseClasses,
  variantClasses[props.variant],
  sizeClasses[props.size],
  { "opacity-50 cursor-not-allowed pointer-events-none": props.disabled },
]);
</script>

<template>
  <NuxtLink v-if="to" :to="to" :class="classes">
    <slot />
  </NuxtLink>
  <button v-else :type="type" :disabled="disabled" :class="classes">
    <slot />
  </button>
</template>
