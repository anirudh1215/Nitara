<script setup lang="ts">
/**
 * Marquee — infinite, seamless horizontal scroll that pauses on hover/focus.
 *
 * The track renders the item list twice and slides exactly -50% (one full
 * copy) before looping, so there is no visible seam or jump.
 *
 * Accessibility: the duplicate copy is aria-hidden so screen readers only
 * encounter each phrase once, and the whole strip is exposed as a plain list.
 */
interface Props {
  items: readonly string[];
  /** Seconds for one full loop. Lower = faster. */
  duration?: number;
  /** Scroll direction */
  reverse?: boolean;
  /**
   * Background class for each item. It repeats the band colour that the
   * marquee sits on. That looks identical, but it means each item resolves
   * its own background rather than inheriting it from an ancestor — which
   * matters because an item is often scrolled partly outside the viewport,
   * and contrast checkers cannot resolve an inherited background in that
   * case. The real ratio here is 8:1 either way.
   */
  bgClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  duration: 34,
  reverse: false,
  bgClass: "bg-brand-blue",
});
</script>

<template>
  <div
    class="marquee flex overflow-hidden"
    :style="{ '--marquee-duration': `${props.duration}s` }"
  >
    <ul
      class="marquee-track"
      :style="{ animationDirection: props.reverse ? 'reverse' : 'normal' }"
    >
      <!-- Copy 1: the real, readable content -->
      <li
        v-for="item in items"
        :key="item"
        :class="['flex shrink-0 items-center gap-3 px-6 py-5 sm:gap-4 sm:px-8', props.bgClass]"
      >
        <Icon
          name="ph:star-four-fill"
          class="h-4 w-4 shrink-0 text-brand-yellow"
          aria-hidden="true"
        />
        <span class="whitespace-nowrap text-base font-bold text-white sm:text-lg">
          {{ item }}
        </span>
      </li>

      <!-- Copy 2: visual duplicate only, hidden from assistive tech -->
      <li
        v-for="item in items"
        :key="`dup-${item}`"
        :class="['flex shrink-0 items-center gap-3 px-6 py-5 sm:gap-4 sm:px-8', props.bgClass]"
        aria-hidden="true"
      >
        <Icon name="ph:star-four-fill" class="h-4 w-4 shrink-0 text-brand-yellow" />
        <span class="whitespace-nowrap text-base font-bold text-white sm:text-lg">
          {{ item }}
        </span>
      </li>
    </ul>
  </div>
</template>
