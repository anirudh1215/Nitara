<script setup lang="ts">
/**
 * AppHeader — Responsive sticky navbar.
 * Navigation links and brand name are driven by useSite().
 */
const site = useSite();
const route = useRoute();
const mobileMenuOpen = ref(false);

/** Close mobile menu on route change */
watch(
    () => route.fullPath,
    () => {
        mobileMenuOpen.value = false;
    }
);

/** Prevent body scroll when mobile menu is open */
watch(mobileMenuOpen, (open) => {
    if (import.meta.client) {
        document.body.style.overflow = open ? "hidden" : "";
    }
});
</script>

<template>
    <header class="sticky top-0 z-50 border-b border-secondary-100 backdrop-blur-lg"
        style="background: color-mix(in srgb, var(--color-bg) 80%, transparent)">
        <nav class="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
            aria-label="Main navigation">
            <!-- Brand / Logo -->
            <NuxtLink to="/" class="flex items-center gap-2 text-xl font-bold transition-colors"
                style="color: var(--color-text)" aria-label="Home">
                <span class="flex h-9 w-9 items-center justify-center text-sm font-bold text-white"
                    style="border-radius: var(--radius); background: var(--color-primary)">
                    {{ site.name.charAt(0) }}
                </span>
                <span class="hidden sm:inline">{{ site.name }}</span>
            </NuxtLink>

            <!-- Desktop Navigation -->
            <ul class="hidden items-center gap-1 md:flex" role="list">
                <li v-for="link in site.nav" :key="link.to">
                    <NuxtLink :to="link.to"
                        class="rounded-lg px-4 py-2 text-sm font-medium transition-colors hover:bg-secondary-50"
                        style="color: var(--color-text-muted)"
                        active-class="!bg-[color-mix(in_srgb,var(--color-primary)_10%,#fff)]">
                        {{ link.label }}
                    </NuxtLink>
                </li>
            </ul>

            <!-- Desktop CTA -->
            <div class="hidden md:block">
                <UiAppButton to="/contact" size="sm"> Get in Touch </UiAppButton>
            </div>

            <!-- Mobile Hamburger -->
            <button
                class="inline-flex items-center justify-center rounded-lg p-2 transition-colors hover:bg-secondary-50 md:hidden"
                style="color: var(--color-text-muted)" :aria-expanded="mobileMenuOpen" aria-label="Toggle menu"
                @click="mobileMenuOpen = !mobileMenuOpen">
                <!-- Hamburger Icon -->
                <svg v-if="!mobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
                <!-- Close Icon -->
                <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
        </nav>

        <!-- Mobile Menu Overlay -->
        <Transition enter-active-class="transition duration-200 ease-out" enter-from-class="opacity-0 -translate-y-2"
            enter-to-class="opacity-100 translate-y-0" leave-active-class="transition duration-150 ease-in"
            leave-from-class="opacity-100 translate-y-0" leave-to-class="opacity-0 -translate-y-2">
            <div v-if="mobileMenuOpen"
                class="absolute inset-x-0 top-full border-b border-secondary-100 bg-white px-4 py-6 shadow-lg md:hidden">
                <ul class="space-y-1" role="list">
                    <li v-for="link in site.nav" :key="link.to">
                        <NuxtLink :to="link.to"
                            class="block rounded-lg px-4 py-3 text-base font-medium transition-colors hover:bg-secondary-50"
                            style="color: var(--color-text)"
                            active-class="!bg-[color-mix(in_srgb,var(--color-primary)_10%,#fff)]">
                            {{ link.label }}
                        </NuxtLink>
                    </li>
                </ul>
                <div class="mt-4 px-4">
                    <UiAppButton to="/contact" size="md" class="w-full">
                        Get in Touch
                    </UiAppButton>
                </div>
            </div>
        </Transition>
    </header>
</template>
