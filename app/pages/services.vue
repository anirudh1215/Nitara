<script setup lang="ts">
/**
 * Services Page — Full list of services from config.
 */
const site = useSite();

useSEO({
    title: "Services",
    description: `Explore the full range of services offered by ${site.name}. From strategy to support, we've got you covered.`,
    canonicalPath: "/services",
});
</script>

<template>
    <div>
        <!-- Page Header -->
        <section class="bg-secondary-50 px-4 py-20 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-extrabold md:text-5xl" style="color: var(--color-text)">
                    Our Services
                </h1>
                <p class="mx-auto mt-4 max-w-2xl text-lg" style="color: var(--color-text-muted)">
                    Comprehensive solutions tailored to help your business succeed at every stage.
                </p>
            </div>
        </section>

        <!-- Services Grid -->
        <UiSectionWrapper>
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <UiServiceCard v-for="service in site.services" :key="service.title" :icon="service.icon"
                    :title="service.title" :description="service.description" />
            </div>
        </UiSectionWrapper>

        <!-- Process Section -->
        <UiSectionWrapper title="Our Process" subtitle="A proven approach to delivering exceptional results." alt>
            <div class="mx-auto max-w-3xl">
                <div v-for="(step, i) in [
                    { title: 'Discovery', description: 'We listen, research, and understand your unique needs and goals.' },
                    { title: 'Strategy', description: 'We develop a clear plan with defined milestones and deliverables.' },
                    { title: 'Execution', description: 'Our team brings the plan to life with precision and creativity.' },
                    { title: 'Launch & Support', description: 'We deploy your solution and provide ongoing support and optimization.' },
                ]" :key="step.title" class="flex gap-6 py-8" :class="{ 'border-t border-secondary-200': i > 0 }">
                    <div class="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-lg font-bold"
                        style="background: color-mix(in srgb, var(--color-primary) 15%, #fff); color: var(--color-primary)">
                        {{ i + 1 }}
                    </div>
                    <div>
                        <h3 class="text-xl font-semibold" style="color: var(--color-text)">{{ step.title }}</h3>
                        <p class="mt-1" style="color: var(--color-text-muted)">{{ step.description }}</p>
                    </div>
                </div>
            </div>
        </UiSectionWrapper>

        <!-- CTA -->
        <section class="px-4 py-16 sm:px-6 lg:px-8"
            style="background: linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 80%, #000))">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-bold text-white">
                    Need a custom solution?
                </h2>
                <p class="mt-4 text-white/80">
                    Every business is unique. Let's discuss how we can tailor our services to fit your needs.
                </p>
                <div class="mt-8">
                    <UiAppButton to="/contact" size="lg" class="!bg-white hover:!bg-white/90"
                        style="color: var(--color-primary)">
                        Let's Talk
                    </UiAppButton>
                </div>
            </div>
        </section>
    </div>
</template>
