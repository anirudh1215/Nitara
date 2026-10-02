/**
 * useCarousel
 * -----------
 * Shared logic for the Programs and Testimonials carousels.
 *
 * The track is a native horizontal scroll container with scroll-snap, so
 * touch swipe, trackpad and keyboard scrolling work without any JS. This
 * composable adds the arrow/dot controls on top.
 *
 * Two details worth knowing:
 *
 *  1. More than one card is visible at a time on wide screens, so the number
 *     of *reachable* scroll positions is smaller than the number of cards.
 *     `pageCount` is derived from the real scroll width, so the dots only ever
 *     show positions you can actually reach — four dots when only two
 *     positions exist would leave two dots permanently dead.
 *
 *  2. While a programmatic smooth-scroll is in flight the scroll handler must
 *     not write back to `activeIndex`, or the intermediate positions overwrite
 *     the index being travelled to and the next arrow click steps from the
 *     wrong place.
 */
export function useCarousel() {
  const track = ref<HTMLElement | null>(null);
  const activeIndex = ref(0);
  const pageCount = ref(1);

  const animating = ref(false);
  let settleTimer: ReturnType<typeof setTimeout> | null = null;
  let resizeObserver: ResizeObserver | null = null;

  /** Width of one card plus the column gap. */
  function cardStep(): number {
    const el = track.value;
    if (!el) return 0;
    const first = el.querySelector<HTMLElement>("[data-card]");
    if (!first) return el.clientWidth;
    const gap = parseFloat(getComputedStyle(el).columnGap || "24");
    return first.offsetWidth + (Number.isNaN(gap) ? 24 : gap);
  }

  /** How many distinct scroll positions this track actually has. */
  function measure() {
    const el = track.value;
    const step = cardStep();
    if (!el || !step) return;
    const maxScroll = Math.max(0, el.scrollWidth - el.clientWidth);
    pageCount.value = Math.max(1, Math.round(maxScroll / step) + 1);
    if (activeIndex.value > pageCount.value - 1) {
      activeIndex.value = pageCount.value - 1;
    }
  }

  /** Scroll to a position, wrapping at both ends. */
  function scrollToIndex(i: number) {
    const el = track.value;
    if (!el) return;

    const pages = pageCount.value;
    const next = ((i % pages) + pages) % pages;

    activeIndex.value = next;
    animating.value = true;
    el.scrollTo({ left: next * cardStep(), behavior: "smooth" });

    if (settleTimer) clearTimeout(settleTimer);
    settleTimer = setTimeout(() => (animating.value = false), 600);
  }

  const next = () => scrollToIndex(activeIndex.value + 1);
  const prev = () => scrollToIndex(activeIndex.value - 1);

  /** Keep the dots in sync when the visitor swipes or scrolls by hand. */
  function onScroll() {
    if (animating.value) return;
    const el = track.value;
    const step = cardStep();
    if (!el || !step) return;
    activeIndex.value = Math.min(
      pageCount.value - 1,
      Math.round(el.scrollLeft / step)
    );
  }

  onMounted(() => {
    measure();
    if (track.value && typeof ResizeObserver !== "undefined") {
      resizeObserver = new ResizeObserver(measure);
      resizeObserver.observe(track.value);
    }
  });

  onUnmounted(() => {
    if (settleTimer) clearTimeout(settleTimer);
    resizeObserver?.disconnect();
  });

  return { track, activeIndex, pageCount, scrollToIndex, next, prev, onScroll };
}
