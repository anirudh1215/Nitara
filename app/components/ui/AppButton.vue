<script setup lang="ts">
/**
 * AppButton — button / internal link / external anchor, with a shared
 * lift-and-scale hover that matches the rest of the page's motion.
 *
 * Renders <NuxtLink> for `to`, <a> for `href`, otherwise <button>.
 */
import { snapSpring } from "~/utils/motion";

interface Props {
  /** Internal route or in-page anchor */
  to?: string;
  /** External URL (tel:, mailto:, https:) */
  href?: string;
  variant?: "primary" | "accent" | "outline" | "white" | "ghost";
  size?: "sm" | "md" | "lg";
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
}

const props = withDefaults(defineProps<Props>(), {
  variant: "accent",
  size: "md",
  type: "button",
  disabled: false,
});

const reduced = usePrefersReducedMotion();

const base =
  "inline-flex items-center justify-center gap-2 rounded-full font-bold text-center transition-colors duration-200 disabled:opacity-50 disabled:pointer-events-none";

const variants: Record<string, string> = {
  primary: "bg-primary-600 text-white hover:bg-primary-700 shadow-soft",
  // Dark ink on the vivid logo orange: white on #f47920 is only 2.76:1,
  // ink is 5.50:1, and the brand colour stays exactly as drawn.
  accent: "bg-accent-500 text-ink hover:bg-accent-400 active:bg-accent-600 shadow-soft",
  outline:
    "border-2 border-primary-600 text-primary-700 hover:bg-primary-50 bg-transparent",
  white: "bg-white text-primary-700 hover:bg-primary-50 shadow-soft",
  ghost: "text-primary-700 hover:bg-primary-50",
};

const sizes: Record<string, string> = {
  sm: "px-5 py-2.5 text-sm",
  md: "px-6 py-3 text-base",
  lg: "px-8 py-4 text-lg",
};

const classes = computed(() => [base, variants[props.variant], sizes[props.size]]);

/** Which element Motion should render */
const tag = computed(() => {
  if (props.to) return resolveComponent("NuxtLink");
  if (props.href) return "a";
  return "button";
});

// Always the same shape — reduced motion just means "no displacement".
const hover = computed(() =>
  reduced.value ? { y: 0, scale: 1 } : { y: -2, scale: 1.03 }
);
const press = computed(() => (reduced.value ? { scale: 1 } : { scale: 0.97 }));
</script>

<template>
  <Motion
    :as="tag"
    :to="to"
    :href="href"
    :type="to || href ? undefined : type"
    :disabled="to || href ? undefined : disabled"
    :class="classes"
    :while-hover="hover"
    :while-press="press"
    :transition="snapSpring"
  >
    <slot />
  </Motion>
</template>
