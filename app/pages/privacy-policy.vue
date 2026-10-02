<script setup lang="ts">
/**
 * Privacy Policy Page
 */
const site = useSite();

useSEO({
    title: "Privacy Policy",
    description: `Privacy Policy for ${site.name}. Learn how we collect, use, and protect your information.`,
    canonicalPath: "/privacy-policy",
});
</script>

<template>
    <div>
        <!-- Page Header -->
        <section class="bg-secondary-50 px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-extrabold md:text-5xl" style="color: var(--color-text)">
                    Privacy Policy
                </h1>
                <p class="mt-4" style="color: var(--color-text-muted)">
                    Last updated: {{ new Date().toLocaleDateString('en-US', {
                        month: 'long', day: 'numeric', year:
                    'numeric' }) }}
                </p>
            </div>
        </section>

        <!-- Content -->
        <UiSectionWrapper>
            <article class="mx-auto max-w-3xl">
                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">1. Information We Collect</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        {{ site.name }} ("we", "our", or "us") collects information you provide directly to us, such as
                        when you fill out a contact form, subscribe to our newsletter, or communicate with us. This may
                        include your name, email address, phone number, and any message content you provide.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">2. How We Use Your Information</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        We use the information we collect to respond to your inquiries, provide our services, improve
                        our website, send you marketing communications (with your consent), and comply with legal
                        obligations.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">3. Information Sharing</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        We do not sell, trade, or otherwise transfer your personal information to third parties without
                        your consent, except as necessary to provide our services, comply with law, or protect our
                        rights.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">4. Data Security</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        We implement appropriate technical and organizational measures to protect your personal
                        information against unauthorized access, alteration, disclosure, or destruction.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">5. Cookies</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        Our website may use cookies to enhance your browsing experience. You can choose to disable
                        cookies through your browser settings, though this may affect certain features of our website.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">6. Your Rights</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        You have the right to access, correct, or delete your personal data. To exercise these rights,
                        please contact us at
                        <a :href="`mailto:${site.email}`" class="hover:underline" style="color: var(--color-primary)">{{
                            site.email }}</a>.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">7. Contact Us</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        If you have any questions about this Privacy Policy, please contact us at
                        <a :href="`mailto:${site.email}`" class="hover:underline" style="color: var(--color-primary)">{{
                            site.email }}</a>
                        or visit our <NuxtLink to="/contact" class="hover:underline"
                            style="color: var(--color-primary)">contact page</NuxtLink>.
                    </p>
                </section>
            </article>
        </UiSectionWrapper>
    </div>
</template>
