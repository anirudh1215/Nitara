<script setup lang="ts">
/**
 * StatsSection — count-up figures that animate from 0 when scrolled into view.
 *
 * The numbers in content.ts are placeholders set to 0; replace them with the
 * centre's real figures (or delete the section) before publishing.
 *
 * Respects prefers-reduced-motion by rendering the final value immediately.
 */
import { stats } from "~~/content";
import { inViewOnce } from "~/utils/motion";

/** Hide the section outright if no real figures have been filled in. */
const hasFigures = stats.some((s) => s.value > 0);

const reduced = usePrefersReducedMotion();
const root = ref<HTMLElement | null>(null);
const display = ref<number[]>(stats.map(() => 0));

let observer: IntersectionObserver | null = null;
let started = false;

function run() {
  if (started) return;
  started = true;

  if (reduced.value) {
    display.value = stats.map((s) => s.value);
    return;
  }

  const duration = 1800;
  const t0 = performance.now();

  function frame(now: number) {
    const p = Math.min((now - t0) / duration, 1);
    const eased = 1 - Math.pow(1 - p, 3); // ease-out cubic
    display.value = stats.map((s) => Math.round(eased * s.value));
    if (p < 1) requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
}

onMounted(() => {
  if (!root.value) return;
  observer = new IntersectionObserver(
    (entries) => {
      if (entries.some((e) => e.isIntersecting)) {
        run();
        observer?.disconnect();
      }
    },
    { threshold: 0.35 }
  );
  observer.observe(root.value);
});

onUnmounted(() => observer?.disconnect());
</script>

<template>
  <section v-if="hasFigures" ref="root" class="bg-cream px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
    <ul class="mx-auto grid max-w-5xl gap-7 sm:grid-cols-3" role="list">
      <UiReveal
        v-for="(stat, i) in stats"
        :key="stat.label"
        as="li"
        :index="i"
      >
        <div
          class="h-full rounded-[2rem] bg-white p-8 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-lift"
        >
          <span
            class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-sky"
          >
            <Icon :name="stat.icon" class="h-7 w-7 text-primary-600" aria-hidden="true" />
          </span>
          <p class="font-display text-5xl font-extrabold text-primary-700">
            {{ display[i] ?? 0 }}{{ stat.suffix }}
          </p>
          <p class="mx-auto mt-2 max-w-[15rem] font-semibold leading-snug text-ink-muted">
            {{ stat.label }}
          </p>
        </div>
      </UiReveal>
    </ul>
  </section>
</template>
