<script setup lang="ts">
/**
 * GalleryGrid — Responsive image gallery with lightbox overlay.
 * Displays images in a masonry-style grid with hover effects
 * and a full-screen lightbox for viewing.
 */

interface GalleryImage {
  src: string;
  alt: string;
  caption?: string;
}

interface Props {
  images: GalleryImage[];
  columns?: number;
}

const props = withDefaults(defineProps<Props>(), {
  columns: 3,
});

const lightboxIndex = ref<number | null>(null);

function openLightbox(index: number) {
  lightboxIndex.value = index;
  document.body.style.overflow = "hidden";
}

function closeLightbox() {
  lightboxIndex.value = null;
  document.body.style.overflow = "";
}

function prevImage() {
  if (lightboxIndex.value !== null && lightboxIndex.value > 0) {
    lightboxIndex.value--;
  }
}

function nextImage() {
  if (
    lightboxIndex.value !== null &&
    lightboxIndex.value < props.images.length - 1
  ) {
    lightboxIndex.value++;
  }
}

// Keyboard navigation
function handleKeydown(e: KeyboardEvent) {
  if (lightboxIndex.value === null) return;
  if (e.key === "Escape") closeLightbox();
  if (e.key === "ArrowLeft") prevImage();
  if (e.key === "ArrowRight") nextImage();
}

onMounted(() => window.addEventListener("keydown", handleKeydown));
onUnmounted(() => window.removeEventListener("keydown", handleKeydown));

const currentImage = computed(() => {
  if (lightboxIndex.value === null) return null;
  return props.images[lightboxIndex.value] ?? null;
});
</script>

<template>
  <!-- Gallery Grid -->
  <div
    class="grid gap-4"
    :class="{
      'sm:grid-cols-2 lg:grid-cols-2': columns === 2,
      'sm:grid-cols-2 lg:grid-cols-3': columns === 3,
      'sm:grid-cols-2 lg:grid-cols-4': columns === 4,
    }"
  >
    <button
      v-for="(image, index) in images"
      :key="index"
      class="group relative cursor-pointer overflow-hidden rounded-xl border border-secondary-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-500"
      @click="openLightbox(index)"
    >
      <img
        :src="image.src"
        :alt="image.alt"
        class="aspect-[4/3] w-full object-cover transition-transform duration-500 group-hover:scale-110"
        loading="lazy"
      />
      <!-- Hover overlay -->
      <div
        class="absolute inset-0 flex items-end bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
      >
        <div class="w-full p-4">
          <p v-if="image.caption" class="text-sm font-medium text-white">
            {{ image.caption }}
          </p>
        </div>
      </div>
      <!-- Zoom icon -->
      <div
        class="absolute right-3 top-3 flex h-9 w-9 items-center justify-center rounded-full bg-white/90 opacity-0 shadow-lg transition-all duration-300 group-hover:opacity-100"
      >
        <Icon name="ph:magnifying-glass-plus-bold" class="h-4 w-4 text-secondary-700" />
      </div>
    </button>
  </div>

  <!-- Lightbox Overlay -->
  <Teleport to="body">
    <Transition name="lightbox-fade">
      <div
        v-if="lightboxIndex !== null && currentImage"
        class="fixed inset-0 z-[999] flex items-center justify-center bg-black/90 p-4"
        @click.self="closeLightbox"
      >
        <!-- Close button -->
        <button
          class="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Close lightbox"
          @click="closeLightbox"
        >
          <Icon name="ph:x-bold" class="h-5 w-5" />
        </button>

        <!-- Prev button -->
        <button
          v-if="lightboxIndex > 0"
          class="absolute left-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Previous image"
          @click.stop="prevImage"
        >
          <Icon name="ph:caret-left-bold" class="h-5 w-5" />
        </button>

        <!-- Next button -->
        <button
          v-if="lightboxIndex < images.length - 1"
          class="absolute right-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/20"
          aria-label="Next image"
          @click.stop="nextImage"
        >
          <Icon name="ph:caret-right-bold" class="h-5 w-5" />
        </button>

        <!-- Image -->
        <div class="max-h-[85vh] max-w-[90vw]">
          <img
            :src="currentImage.src"
            :alt="currentImage.alt"
            class="max-h-[85vh] max-w-full rounded-lg object-contain"
          />
          <p
            v-if="currentImage.caption"
            class="mt-3 text-center text-sm text-white/80"
          >
            {{ currentImage.caption }}
          </p>
        </div>

        <!-- Image counter -->
        <div
          class="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full bg-white/10 px-4 py-1.5 text-sm text-white backdrop-blur-sm"
        >
          {{ lightboxIndex + 1 }} / {{ images.length }}
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<style scoped>
.lightbox-fade-enter-active,
.lightbox-fade-leave-active {
  transition: opacity 0.3s ease;
}

.lightbox-fade-enter-from,
.lightbox-fade-leave-to {
  opacity: 0;
}
</style>
