/**
 * usePrefersReducedMotion
 * -----------------------
 * SSR-safe reactive read of the `prefers-reduced-motion` media query.
 *
 * Returns `false` during SSR and on first render (we cannot know the
 * preference on the server), then flips to the real value on mount and stays
 * in sync if the user changes it mid-session.
 *
 * Components use this to skip entrance animations entirely rather than just
 * shortening them. A CSS backstop in main.css forces `[data-reveal]` elements
 * to their resting state too, so the correct result does not depend on JS
 * having run.
 */
export function usePrefersReducedMotion() {
  const reduced = ref(false);

  onMounted(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    reduced.value = mq.matches;

    const onChange = (e: MediaQueryListEvent) => {
      reduced.value = e.matches;
    };
    mq.addEventListener("change", onChange);

    onUnmounted(() => mq.removeEventListener("change", onChange));
  });

  return reduced;
}
