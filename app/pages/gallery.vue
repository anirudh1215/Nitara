<script setup lang="ts">
/**
 * Gallery Page — Showcases images in a responsive grid with lightbox.
 */
const site = useSite();

useSEO({
  title: "Gallery",
  description: `Explore the gallery of ${site.name} — our projects, events, and behind-the-scenes moments.`,
  canonicalPath: "/gallery",
});

/**
 * Replace these placeholder images with your own.
 * Each image needs: src, alt, and an optional caption.
 */
const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    alt: "Modern office workspace",
    caption: "Our Creative Workspace",
  },
  {
    src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80",
    alt: "Team collaboration meeting",
    caption: "Team Brainstorming Session",
  },
  {
    src: "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80",
    alt: "Workshop presentation",
    caption: "Client Workshop",
  },
  {
    src: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80",
    alt: "Analytics dashboard on screen",
    caption: "Data-Driven Results",
  },
  {
    src: "https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80",
    alt: "Design process on whiteboard",
    caption: "Design Thinking in Action",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=600&q=80",
    alt: "Modern tech office",
    caption: "Where Innovation Happens",
  },
];
</script>

<template>
  <div>
    <!-- Page Header -->
    <section class="bg-secondary-50 px-4 py-20 sm:px-6 lg:px-8">
      <div class="mx-auto max-w-4xl text-center">
        <h1
          class="text-4xl font-extrabold md:text-5xl"
          style="color: var(--color-text)"
        >
          Gallery
        </h1>
        <p
          class="mx-auto mt-4 max-w-2xl text-lg"
          style="color: var(--color-text-muted)"
        >
          A visual journey through our projects, events, and the moments that
          define us.
        </p>
      </div>
    </section>

    <!-- Gallery Grid -->
    <UiSectionWrapper
      id="gallery-grid"
      title="Our Showcase"
      subtitle="Browse through highlights of our work and culture."
    >
      <UiGalleryGrid :images="galleryImages" :columns="3" />
    </UiSectionWrapper>

    <!-- CTA -->
    <section
      class="px-4 py-16 sm:px-6 lg:px-8"
      style="
        background: linear-gradient(
          135deg,
          var(--color-primary),
          color-mix(in srgb, var(--color-primary) 80%, #000)
        );
      "
    >
      <div class="mx-auto max-w-3xl text-center">
        <h2 class="text-3xl font-bold text-white">
          Want to see more of our work?
        </h2>
        <p class="mt-4 text-white/80">
          Get in touch and let's discuss how we can bring your vision to life.
        </p>
        <div class="mt-8">
          <UiAppButton
            to="/contact"
            size="lg"
            class="!bg-white hover:!bg-white/90"
            style="color: var(--color-primary)"
          >
            Contact Us
          </UiAppButton>
        </div>
      </div>
    </section>
  </div>
</template>
