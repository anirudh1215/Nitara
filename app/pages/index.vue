<script setup lang="ts">
/**
 * Home Page — Landing page with Hero, About preview, Services, Testimonials, CTA.
 */
const site = useSite();

useSEO({
    title: "Home",
    description: site.seo.defaultDescription,
    canonicalPath: "/",
});

// JSON-LD Structured Data for Local Business
useHead({
    script: [
        {
            type: "application/ld+json",
            innerHTML: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                name: site.name,
                description: site.seo.defaultDescription,
                url: site.url,
                telephone: site.phone,
                email: site.email,
                address: {
                    "@type": "PostalAddress",
                    streetAddress: site.address,
                },
                sameAs: Object.values(site.social).filter(Boolean),
            }),
        },
    ],
});

/** Show only first 3 services on homepage */
const previewServices = site.services.slice(0, 3);

/** Impact metrics for the About preview */
const impactMetrics = [
    { icon: "ph:calendar-check-duotone", value: 10, suffix: "+", label: "Years of Experience" },
    { icon: "ph:folder-open-duotone", value: 200, suffix: "+", label: "Projects Delivered" },
    { icon: "ph:smiley-duotone", value: 50, suffix: "+", label: "Happy Clients" },
    { icon: "ph:trophy-duotone", value: 15, suffix: "+", label: "Awards Won" },
];

/** Scroll animation refs */
const { elementRef: aboutRef } = useScrollAnimation();
const { elementRef: servicesRef } = useScrollAnimation();
const { elementRef: testimonialsRef } = useScrollAnimation();
const { elementRef: ctaRef } = useScrollAnimation();
</script>

<template>
    <div>
        <!-- ═══════════════════ HERO SECTION ═══════════════════ -->
        <section class="relative overflow-hidden bg-[var(--color-primary)] px-4 py-24 sm:px-6 sm:py-32 lg:px-8 lg:py-40"
            style="background: linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 70%, #000))">
            <!-- Decorative blobs -->
            <div class="absolute -left-20 -top-20 h-72 w-72 rounded-full opacity-30 blur-3xl"
                style="background: var(--color-primary)" aria-hidden="true" />
            <div class="absolute -bottom-20 -right-20 h-96 w-96 rounded-full opacity-20 blur-3xl"
                style="background: var(--color-accent)" aria-hidden="true" />

            <div class="relative mx-auto max-w-4xl text-center">
                <h1
                    class="animate-fade-in-up text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl">
                    {{ site.tagline }}
                </h1>
                <p class="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/80 sm:text-xl"
                    style="animation-delay: 0.15s">
                    {{ site.seo.defaultDescription }}
                </p>
                <div class="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
                    style="animation-delay: 0.3s">
                    <UiAppButton to="/services" size="lg">
                        Our Services
                    </UiAppButton>
                    <UiAppButton to="/contact" variant="outline" size="lg"
                        class="!border-white !text-white hover:!bg-white/10">
                        Contact Us
                    </UiAppButton>
                </div>
            </div>
        </section>

        <!-- ═══════════════════ ABOUT PREVIEW ═══════════════════ -->
        <UiSectionWrapper id="about-preview" title="Who We Are" subtitle="A quick look at our story and mission.">
            <div ref="aboutRef" class="grid items-center gap-12 md:grid-cols-2">
                <div>
                    <h3 class="mb-4 text-2xl font-bold" style="color: var(--color-text)">
                        Passionate about helping businesses grow
                    </h3>
                    <p class="mb-4 leading-relaxed" style="color: var(--color-text-muted)">
                        At {{ site.name }}, we combine strategy, creativity, and technology to deliver solutions that
                        drive real results. Our team of experts is dedicated to turning your vision into reality.
                    </p>
                    <p class="mb-6 leading-relaxed" style="color: var(--color-text-muted)">
                        With years of experience across diverse industries, we understand the challenges businesses face
                        and how to overcome them effectively.
                    </p>
                    <UiAppButton to="/about" variant="outline">
                        Learn More About Us
                    </UiAppButton>
                </div>
                <UiImpactMetrics :metrics="impactMetrics" />
            </div>
        </UiSectionWrapper>

        <!-- ═══════════════════ SERVICES PREVIEW ═══════════════════ -->
        <UiSectionWrapper id="services-preview" title="What We Do"
            subtitle="Explore our core offerings designed to propel your business forward." alt>
            <div ref="servicesRef">
                <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                    <UiServiceCard v-for="service in previewServices" :key="service.title" :icon="service.icon"
                        :title="service.title" :description="service.description" />
                </div>
                <div class="mt-12 text-center">
                    <UiAppButton to="/services" variant="outline">
                        View All Services
                    </UiAppButton>
                </div>
            </div>
        </UiSectionWrapper>

        <!-- ═══════════════════ TESTIMONIALS ═══════════════════ -->
        <UiSectionWrapper id="testimonials" title="What Our Clients Say"
            subtitle="Don't just take our word for it — hear from the people we've worked with.">
            <div ref="testimonialsRef" class="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                <UiTestimonialCard v-for="testimonial in site.testimonials" :key="testimonial.name"
                    :name="testimonial.name" :role="testimonial.role" :company="testimonial.company"
                    :quote="testimonial.quote" :avatar="testimonial.avatar" />
            </div>
        </UiSectionWrapper>

        <!-- ═══════════════════ CTA SECTION ═══════════════════ -->
        <section class="px-4 py-20 sm:px-6 lg:px-8"
            style="background: linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 80%, #000))">
            <div ref="ctaRef" class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-bold text-white md:text-4xl">
                    Ready to start your next project?
                </h2>
                <p class="mx-auto mt-4 max-w-xl text-lg text-white/80">
                    Let's discuss how we can help your business achieve its goals. Get in touch with our team today.
                </p>
                <div class="mt-8">
                    <UiAppButton to="/contact" size="lg" class="!bg-white hover:!bg-white/90"
                        style="color: var(--color-primary)">
                        Get Started
                    </UiAppButton>
                </div>
            </div>
        </section>
    </div>
</template>
