<script setup lang="ts">
/**
 * SmartImage — plain <img> with a responsive srcset.
 *
 * Deliberately not @nuxt/image: every photo here is already served by a CDN
 * (Unsplash, placehold.co) that does its own resizing and format negotiation,
 * so running them back through IPX would only add a 30 MB `sharp` binary to
 * the deploy and tie the build to one CPU architecture.
 *
 * For Unsplash URLs we rewrite the `w` parameter to build a srcset and add
 * `auto=format`, which makes their CDN serve WebP/AVIF to browsers that
 * accept it. Anything else is passed through untouched.
 */
interface Props {
  src: string;
  alt: string;
  /** Intrinsic width/height — always set, to reserve space and avoid layout shift */
  width: number;
  height: number;
  sizes?: string;
  /** Set on the LCP image only */
  priority?: boolean;
  imgClass?: string;
}

const props = withDefaults(defineProps<Props>(), {
  sizes: "100vw",
  priority: false,
  imgClass: "",
});

const isUnsplash = computed(() => props.src.includes("images.unsplash.com"));

/**
 * Candidate widths, capped at 1.6x the layout width. Going to a full 2x for
 * retina costs far more bytes than it buys on a photographic image.
 */
const widths = computed(() => {
  const max = Math.round(props.width * 1.6);
  const list = [320, 420, 560, 720, 900, 1120, 1400].filter((w) => w <= max);
  return list.length ? list : [props.width];
});

/**
 * Ask Unsplash for the exact aspect ratio we display, so their CDN does the
 * cropping instead of shipping pixels that object-cover discards.
 */
function unsplashUrl(width: number) {
  const [base] = props.src.split("?");
  const height = Math.round((width * props.height) / props.width);
  return `${base}?auto=format&fit=crop&crop=entropy&w=${width}&h=${height}&q=68`;
}

const srcset = computed(() => {
  if (!isUnsplash.value) return undefined;
  return widths.value.map((w) => `${unsplashUrl(w)} ${w}w`).join(", ");
});

const resolvedSrc = computed(() =>
  isUnsplash.value ? unsplashUrl(props.width) : props.src
);
</script>

<template>
  <img
    :src="resolvedSrc"
    :srcset="srcset"
    :sizes="srcset ? sizes : undefined"
    :alt="alt"
    :width="width"
    :height="height"
    :class="imgClass"
    :loading="priority ? 'eager' : 'lazy'"
    :fetchpriority="priority ? 'high' : 'auto'"
    decoding="async"
  />
</template>
