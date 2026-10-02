/**
 * useScrollAnimation Composable
 * ----------------------------
 * Lightweight Intersection Observer for scroll-reveal animations.
 * Usage: const { elementRef } = useScrollAnimation()
 * Then bind :ref="elementRef" on the element.
 */
import { ref, onMounted, onUnmounted } from "vue";

export function useScrollAnimation(options?: IntersectionObserverInit) {
  const elementRef = ref<HTMLElement | null>(null);
  let observer: IntersectionObserver | null = null;

  onMounted(() => {
    if (!elementRef.value) return;

    observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.remove("scroll-hidden");
            entry.target.classList.add("scroll-visible");
            observer?.unobserve(entry.target);
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px",
        ...options,
      },
    );

    elementRef.value.classList.add("scroll-hidden");
    observer.observe(elementRef.value);
  });

  onUnmounted(() => {
    observer?.disconnect();
  });

  return { elementRef };
}
