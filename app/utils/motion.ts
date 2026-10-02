/**
 * Shared motion presets.
 * ----------------------
 * One place for every timing on the site, so the whole page shares a single
 * motion feel. Values are tuned to match the reference site's pacing:
 * soft springs, ~30–40px travel, once-only on scroll, ~0.1s stagger.
 *
 * Every consumer pairs these with `useReducedMotion()` — when a visitor has
 * asked for less motion we render the resting state and skip the animation
 * entirely rather than just shortening it.
 */

/** Soft spring used for nearly all entrance motion. */
export const softSpring = {
  type: "spring" as const,
  stiffness: 110,
  damping: 20,
  mass: 0.9,
};

/** Slightly snappier spring for interactive feedback (hover / press). */
export const snapSpring = {
  type: "spring" as const,
  stiffness: 320,
  damping: 24,
};

/** Easing curve for non-spring tweens (height, opacity-only fades). */
export const easeOutSoft = [0.22, 1, 0.36, 1] as const;

/** Distance in px that elements travel on entrance. */
export const RISE = 36;

/** Gap between staggered children, in seconds. */
export const STAGGER = 0.1;

/** Viewport options: fire once, slightly before the element is fully visible. */
export const inViewOnce = { once: true, margin: "0px 0px -12% 0px" };

/**
 * Fade-and-rise entrance.
 * @param delay seconds to wait before starting
 */
export function riseIn(delay = 0) {
  return {
    initial: { opacity: 0, y: RISE },
    whileInView: { opacity: 1, y: 0 },
    inViewOptions: inViewOnce,
    transition: { ...softSpring, delay },
  };
}

/**
 * Horizontal slide-in entrance.
 * @param from which side the element comes from
 */
export function slideIn(from: "left" | "right" = "left", delay = 0) {
  return {
    initial: { opacity: 0, x: from === "left" ? -RISE : RISE },
    whileInView: { opacity: 1, x: 0 },
    inViewOptions: inViewOnce,
    transition: { ...softSpring, delay },
  };
}

/** Stagger helper — index-based delay for grids and lists. */
export function staggered(index: number, base = 0) {
  return riseIn(base + index * STAGGER);
}

/** Card hover: lift with a softer, larger shadow. */
export const cardHover = {
  whileHover: { y: -8 },
  transition: snapSpring,
};

/** Button hover: lift and scale very slightly. */
export const buttonHover = {
  whileHover: { y: -2, scale: 1.03 },
  whilePress: { scale: 0.97 },
  transition: snapSpring,
};
