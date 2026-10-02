<script setup lang="ts">
/**
 * Terms & Conditions Page
 */
const site = useSite();

useSEO({
    title: "Terms & Conditions",
    description: `Terms and Conditions for ${site.name}. Please read these terms carefully before using our services.`,
    canonicalPath: "/terms",
});
</script>

<template>
    <div>
        <!-- Page Header -->
        <section class="bg-secondary-50 px-4 py-16 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-extrabold md:text-5xl" style="color: var(--color-text)">
                    Terms &amp; Conditions
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
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">1. Agreement to Terms</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        By accessing and using the {{ site.name }} website, you agree to be bound by these Terms and
                        Conditions. If you disagree with any part of these terms, you may not access our website or use
                        our services.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">2. Services</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        {{ site.name }} provides professional business services as described on our website. We reserve
                        the right to modify, suspend, or discontinue any aspect of our services at any time without
                        prior notice.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">3. Intellectual Property</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        All content on this website, including text, graphics, logos, and software, is the property of
                        {{ site.name }} and is protected by applicable intellectual property laws. You may not
                        reproduce, distribute, or create derivative works without our express written permission.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">4. User Responsibilities</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        You agree to use our website and services only for lawful purposes and in a way that does not
                        infringe upon the rights of others or restrict their use and enjoyment of the website.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">5. Limitation of Liability</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        {{ site.name }} shall not be liable for any indirect, incidental, special, consequential, or
                        punitive damages arising out of your use of our website or services. Our total liability shall
                        not exceed the amount paid by you for the specific service in question.
                    </p>
                </section>

                <section class="mb-10">
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">6. Governing Law</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        These Terms shall be governed and construed in accordance with the laws of the jurisdiction in
                        which {{ site.name }} operates, without regard to its conflict of law provisions.
                    </p>
                </section>

                <section>
                    <h2 class="text-2xl font-bold" style="color: var(--color-text)">7. Contact</h2>
                    <p class="mt-4 leading-relaxed" style="color: var(--color-text-muted)">
                        If you have questions about these Terms, please contact us at
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
