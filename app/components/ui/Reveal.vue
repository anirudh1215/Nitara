<script setup lang="ts">
/**
 * Reveal — the site's single scroll-entrance primitive.
 *
 * Wraps children in a <Motion> element that fades and rises into place the
 * first time it enters the viewport. Everything that animates on scroll goes
 * through this component so the whole page shares one motion feel.
 *
 * Reduced motion
 * --------------
 * `reduced` only ever changes the *values* passed to <Motion>, never which
 * props are present. Adding or removing `initial` / `animate` on a live
 * Motion element crashes motion-v ("visualElement.getBaseTarget is not a
 * function"), so the resting state is expressed as a zero-distance,
 * zero-duration animation instead.
 *
 * The `data-reveal` attribute is also targeted by a `!important` rule in
 * main.css under prefers-reduced-motion, so the resting state holds even
 * before JS has run.
 */
import { RISE, softSpring, inViewOnce, STAGGER } from "~/utils/motion";

interface Props {
  /** Element tag to render */
  as?: string;
  /** Direction the element travels from */
  from?: "bottom" | "left" | "right";
  /** Extra delay in seconds */
  delay?: number;
  /** Position in a staggered group; multiplied by the shared stagger gap */
  index?: number;
  /** Travel distance override, in px */
  distance?: number;
}

const props = withDefaults(defineProps<Props>(), {
  as: "div",
  from: "bottom",
  delay: 0,
  index: 0,
});

const reduced = usePrefersReducedMotion();

const offset = computed(() => props.distance ?? RISE);

const initial = computed(() => {
  if (reduced.value) return { opacity: 1, x: 0, y: 0 };
  switch (props.from) {
    case "left":
      return { opacity: 0, x: -offset.value, y: 0 };
    case "right":
      return { opacity: 0, x: offset.value, y: 0 };
    default:
      return { opacity: 0, x: 0, y: offset.value };
  }
});

const target = computed(() => ({ opacity: 1, x: 0, y: 0 }));

const transition = computed(() =>
  reduced.value
    ? { duration: 0 }
    : { ...softSpring, delay: props.delay + props.index * STAGGER }
);
</script>

<template>
  <Motion
    :as="as"
    data-reveal
    :initial="initial"
    :while-in-view="target"
    :in-view-options="inViewOnce"
    :transition="transition"
  >
    <slot />
  </Motion>
</template>
