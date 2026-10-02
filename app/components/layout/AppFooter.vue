<script setup lang="ts">
/**
 * AppFooter — Multi-column footer with nav, contact info, and social links.
 */
const site = useSite();

const currentYear = new Date().getFullYear();

const legalLinks = [
    { label: "Privacy Policy", to: "/privacy-policy" },
    { label: "Terms & Conditions", to: "/terms" },
];
</script>

<template>
    <footer class="bg-secondary-900 text-secondary-300">
        <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
            <div class="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
                <!-- Brand Column -->
                <div class="lg:col-span-1">
                    <NuxtLink to="/" class="mb-4 flex items-center gap-2 text-xl font-bold text-white">
                        <span class="flex h-9 w-9 items-center justify-center text-sm font-bold text-white"
                            style="border-radius: var(--radius); background: var(--color-primary)">
                            {{ site.name.charAt(0) }}
                        </span>
                        {{ site.name }}
                    </NuxtLink>
                    <p class="mt-4 text-sm leading-relaxed text-secondary-400">
                        {{ site.seo.defaultDescription }}
                    </p>
                </div>

                <!-- Quick Links -->
                <div>
                    <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                        Quick Links
                    </h3>
                    <ul class="space-y-3" role="list">
                        <li v-for="link in site.nav" :key="link.to">
                            <NuxtLink :to="link.to"
                                class="text-sm text-secondary-400 transition-colors hover:text-white">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Legal -->
                <div>
                    <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                        Legal
                    </h3>
                    <ul class="space-y-3" role="list">
                        <li v-for="link in legalLinks" :key="link.to">
                            <NuxtLink :to="link.to"
                                class="text-sm text-secondary-400 transition-colors hover:text-white">
                                {{ link.label }}
                            </NuxtLink>
                        </li>
                    </ul>
                </div>

                <!-- Contact Info -->
                <div>
                    <h3 class="mb-4 text-sm font-semibold uppercase tracking-wider text-white">
                        Contact
                    </h3>
                    <ul class="space-y-3 text-sm text-secondary-400" role="list">
                        <li class="flex items-start gap-2">
                            <Icon name="ph:map-pin-duotone" class="mt-0.5 h-4 w-4 shrink-0"
                                style="color: var(--color-primary)" />
                            {{ site.address }}
                        </li>
                        <li>
                            <a :href="`tel:${site.phone}`"
                                class="flex items-center gap-2 transition-colors hover:text-white">
                                <Icon name="ph:phone-duotone" class="h-4 w-4 shrink-0"
                                    style="color: var(--color-primary)" />
                                {{ site.phone }}
                            </a>
                        </li>
                        <li>
                            <a :href="`mailto:${site.email}`"
                                class="flex items-center gap-2 transition-colors hover:text-white">
                                <Icon name="ph:envelope-duotone" class="h-4 w-4 shrink-0"
                                    style="color: var(--color-primary)" />
                                {{ site.email }}
                            </a>
                        </li>
                    </ul>

                    <!-- Social Icons -->
                    <div class="mt-6 flex gap-3">
                        <a v-if="site.social.facebook" :href="site.social.facebook" target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-800 text-secondary-400 transition-colors hover:text-white"
                            aria-label="Facebook">
                            <Icon name="mdi:facebook" class="h-4 w-4" />
                        </a>
                        <a v-if="site.social.twitter" :href="site.social.twitter" target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-800 text-secondary-400 transition-colors hover:text-white"
                            aria-label="Twitter / X">
                            <Icon name="ri:twitter-x-fill" class="h-4 w-4" />
                        </a>
                        <a v-if="site.social.instagram" :href="site.social.instagram" target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-800 text-secondary-400 transition-colors hover:text-white"
                            aria-label="Instagram">
                            <Icon name="mdi:instagram" class="h-4 w-4" />
                        </a>
                        <a v-if="site.social.linkedin" :href="site.social.linkedin" target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-800 text-secondary-400 transition-colors hover:text-white"
                            aria-label="LinkedIn">
                            <Icon name="mdi:linkedin" class="h-4 w-4" />
                        </a>
                        <a v-if="site.social.github" :href="site.social.github" target="_blank"
                            rel="noopener noreferrer"
                            class="flex h-9 w-9 items-center justify-center rounded-lg bg-secondary-800 text-secondary-400 transition-colors hover:text-white"
                            aria-label="GitHub">
                            <Icon name="mdi:github" class="h-4 w-4" />
                        </a>
                    </div>
                </div>
            </div>

            <!-- Bottom Bar -->
            <div class="mt-12 border-t border-secondary-800 pt-8 text-center text-sm text-secondary-500">
                <p>&copy; {{ currentYear }} {{ site.name }}. All rights reserved.</p>
            </div>
        </div>
    </footer>
</template>
