<script setup lang="ts">
/**
 * ImpactMetrics — Animated counter section to display key business statistics.
 * Counts up from 0 to the target value when scrolled into view.
 */

interface Metric {
  icon: string;
  value: number;
  suffix?: string;
  label: string;
}

interface Props {
  metrics: Metric[];
}

defineProps<Props>();

const sectionRef = ref<HTMLElement | null>(null);
const hasAnimated = ref(false);
const displayValues = ref<number[]>([]);

function animateCounters(metrics: Metric[]) {
  if (hasAnimated.value) return;
  hasAnimated.value = true;

  metrics.forEach((metric, i) => {
    const duration = 2000;
    const start = performance.now();
    const end = metric.value;

    function step(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      displayValues.value[i] = Math.round(eased * end);

      if (progress < 1) {
        requestAnimationFrame(step);
      }
    }

    requestAnimationFrame(step);
  });
}

onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Read the metrics from the component's props at mount time
          const metricsFromProps = (
            sectionRef.value
              ?.closest("[data-metrics]")
              ?.getAttribute("data-metrics")
          );
          // Fallback: just trigger animation
          animateCounters(
            JSON.parse(metricsFromProps || "[]")
          );
          observer.disconnect();
        }
      });
    },
    { threshold: 0.3 }
  );

  if (sectionRef.value) {
    observer.observe(sectionRef.value);
  }
});
</script>

<template>
  <div
    ref="sectionRef"
    :data-metrics="JSON.stringify(metrics)"
    class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4"
  >
    <div
      v-for="(metric, index) in metrics"
      :key="index"
      class="group rounded-2xl border border-secondary-100 bg-white p-8 text-center shadow-sm transition-all duration-300 hover:shadow-lg hover:border-primary-200"
    >
      <!-- Icon -->
      <div
        class="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 group-hover:scale-110"
        style="background: color-mix(in srgb, var(--color-primary) 10%, #fff)"
      >
        <Icon :name="metric.icon" class="h-7 w-7" style="color: var(--color-primary)" />
      </div>

      <!-- Animated Value -->
      <div class="text-4xl font-extrabold" style="color: var(--color-primary)">
        {{ hasAnimated ? displayValues[index] || 0 : 0 }}{{ metric.suffix || '' }}
      </div>

      <!-- Label -->
      <p class="mt-2 text-sm font-medium" style="color: var(--color-text-muted)">
        {{ metric.label }}
      </p>
    </div>
  </div>
</template>
