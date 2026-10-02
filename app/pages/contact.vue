<script setup lang="ts">
/**
 * Contact Page — Contact form with business info sidebar.
 */
const site = useSite();

useSEO({
    title: "Contact Us",
    description: `Get in touch with ${site.name}. We'd love to hear about your project.`,
    canonicalPath: "/contact",
});
</script>

<template>
    <div>
        <!-- Page Header -->
        <section class="bg-secondary-50 px-4 py-20 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-extrabold md:text-5xl" style="color: var(--color-text)">
                    Contact Us
                </h1>
                <p class="mx-auto mt-4 max-w-2xl text-lg" style="color: var(--color-text-muted)">
                    Have a question or ready to start a project? We'd love to hear from you.
                </p>
            </div>
        </section>

        <!-- Contact Content -->
        <UiSectionWrapper>
            <div class="grid gap-12 lg:grid-cols-5">
                <!-- Form Column -->
                <div class="lg:col-span-3">
                    <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-text)">
                        Send us a message
                    </h2>
                    <UiContactForm />
                </div>

                <!-- Info Column -->
                <div class="lg:col-span-2">
                    <div class="bg-secondary-50 p-8" style="border-radius: var(--radius)">
                        <h2 class="mb-6 text-2xl font-bold" style="color: var(--color-text)">
                            Get in touch
                        </h2>

                        <div class="space-y-6">
                            <!-- Address -->
                            <div class="flex gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center"
                                    style="border-radius: var(--radius); background: color-mix(in srgb, var(--color-primary) 15%, #fff); color: var(--color-primary)">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold" style="color: var(--color-text)">Address</h3>
                                    <p class="text-sm" style="color: var(--color-text-muted)">{{ site.address }}</p>
                                </div>
                            </div>

                            <!-- Phone -->
                            <div class="flex gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center"
                                    style="border-radius: var(--radius); background: color-mix(in srgb, var(--color-primary) 15%, #fff); color: var(--color-primary)">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold" style="color: var(--color-text)">Phone</h3>
                                    <a :href="`tel:${site.phone}`" class="text-sm hover:underline"
                                        style="color: var(--color-primary)">
                                        {{ site.phone }}
                                    </a>
                                </div>
                            </div>

                            <!-- Email -->
                            <div class="flex gap-4">
                                <div class="flex h-10 w-10 shrink-0 items-center justify-center"
                                    style="border-radius: var(--radius); background: color-mix(in srgb, var(--color-primary) 15%, #fff); color: var(--color-primary)">
                                    <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                                            d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                    </svg>
                                </div>
                                <div>
                                    <h3 class="font-semibold" style="color: var(--color-text)">Email</h3>
                                    <a :href="`mailto:${site.email}`" class="text-sm hover:underline"
                                        style="color: var(--color-primary)">
                                        {{ site.email }}
                                    </a>
                                </div>
                            </div>
                        </div>

                        <!-- Map Placeholder -->
                        <div class="mt-8 flex h-48 items-center justify-center rounded-xl bg-secondary-200"
                            style="color: var(--color-text-muted)">
                            <p class="text-sm">Map integration placeholder</p>
                        </div>
                    </div>
                </div>
            </div>
        </UiSectionWrapper>
    </div>
</template>
