<script setup lang="ts">
/**
 * About Page — Company story, mission, values, and team placeholder.
 */
const site = useSite();

useSEO({
    title: "About Us",
    description: `Learn more about ${site.name} — our mission, values, and the team behind the work.`,
    canonicalPath: "/about",
});

const values = [
    {
        icon: "ph:crosshair-duotone",
        title: "Purpose-Driven",
        description: "Every project starts with understanding your goals and ends with measurable results.",
    },
    {
        icon: "ph:handshake-duotone",
        title: "Collaborative",
        description: "We work as an extension of your team, ensuring transparency and alignment throughout.",
    },
    {
        icon: "ph:rocket-launch-duotone",
        title: "Innovation-First",
        description: "We leverage cutting-edge tools and technologies to give your business a competitive edge.",
    },
    {
        icon: "ph:sparkle-duotone",
        title: "Quality Obsessed",
        description: "Attention to detail is in our DNA. We deliver polished work that stands the test of time.",
    },
];

const faqs = [
    {
        question: "What industries do you work with?",
        answer: "We work across a wide range of industries including technology, healthcare, finance, retail, and non-profits. Our solutions are tailored to each sector's unique challenges.",
    },
    {
        question: "How long does a typical project take?",
        answer: "Project timelines vary based on scope and complexity. A branding project may take 4–6 weeks, while a full website build can range from 8–16 weeks. We'll provide a clear timeline during our initial consultation.",
    },
    {
        question: "Do you offer ongoing support after launch?",
        answer: "Yes! We offer maintenance and support packages to keep your digital products running smoothly, including updates, monitoring, and priority bug fixes.",
    },
    {
        question: "What is your pricing model?",
        answer: "We offer both project-based and retainer pricing models. Every engagement starts with a discovery phase to accurately scope and quote the work.",
    },
    {
        question: "Can you work with our existing brand guidelines?",
        answer: "Absolutely. We're experienced in working within established brand systems, ensuring consistency while bringing fresh creative energy to your projects.",
    },
];
</script>

<template>
    <div>
        <!-- Page Header -->
        <section class="bg-secondary-50 px-4 py-20 sm:px-6 lg:px-8">
            <div class="mx-auto max-w-4xl text-center">
                <h1 class="text-4xl font-extrabold md:text-5xl" style="color: var(--color-text)">
                    About {{ site.name }}
                </h1>
                <p class="mx-auto mt-4 max-w-2xl text-lg" style="color: var(--color-text-muted)">
                    We're a team of passionate professionals dedicated to helping businesses thrive in the digital
                    landscape.
                </p>
            </div>
        </section>

        <!-- Our Story -->
        <UiSectionWrapper title="Our Story">
            <div class="mx-auto max-w-3xl space-y-6 text-lg leading-relaxed" style="color: var(--color-text-muted)">
                <p>
                    Founded with a vision to bridge the gap between great ideas and exceptional execution,
                    {{ site.name }} has grown into a trusted partner for businesses of all sizes.
                </p>
                <p>
                    We started as a small team with big ambitions and a deep love for craftsmanship.
                    Over the years, we've honed our skills across strategy, design, and development to deliver
                    solutions that don't just look good — they perform.
                </p>
                <p>
                    Today, our portfolio spans startups, established enterprises, and everything in between.
                    What hasn't changed is our commitment to quality, communication, and results.
                </p>
            </div>
        </UiSectionWrapper>

        <!-- Our Values -->
        <UiSectionWrapper title="Our Values" subtitle="The principles that guide everything we do." alt>
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                <div v-for="value in values" :key="value.title"
                    class="bg-white p-8 text-center shadow-sm border border-secondary-100"
                    style="border-radius: var(--radius)">
                    <div class="mx-auto mb-4 flex h-14 w-14 items-center justify-center"
                        style="border-radius: var(--radius); background: color-mix(in srgb, var(--color-primary) 10%, #fff)">
                        <Icon :name="value.icon" class="h-7 w-7" style="color: var(--color-primary)" />
                    </div>
                    <h3 class="mb-2 text-lg font-semibold" style="color: var(--color-text)">
                        {{ value.title }}
                    </h3>
                    <p class="text-sm leading-relaxed" style="color: var(--color-text-muted)">
                        {{ value.description }}
                    </p>
                </div>
            </div>
        </UiSectionWrapper>

        <!-- Team Placeholder -->
        <UiSectionWrapper title="Meet the Team" subtitle="The talented people behind our success.">
            <div class="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
                <div v-for="member in ['Alex Thompson', 'Maria Garcia', 'James Wilson']" :key="member"
                    class="group border border-secondary-200 p-8 text-center transition-all duration-300 hover:shadow-lg"
                    style="border-radius: var(--radius)">
                    <div class="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-bold"
                        style="background: color-mix(in srgb, var(--color-primary) 15%, #fff); color: var(--color-primary)">
                        {{member.split(' ').map(w => w[0]).join('')}}
                    </div>
                    <h3 class="text-lg font-semibold" style="color: var(--color-text)">{{ member }}</h3>
                    <p class="text-sm" style="color: var(--color-text-muted)">Team Member</p>
                </div>
            </div>
            <p class="mt-8 text-center text-sm" style="color: var(--color-text-muted)">
                Replace with your actual team members in the page component.
            </p>
        </UiSectionWrapper>

        <!-- FAQ Section -->
        <UiSectionWrapper title="Frequently Asked Questions"
            subtitle="Answers to common questions about working with us." alt>
            <UiFaqSection :items="faqs" />
        </UiSectionWrapper>

        <!-- CTA -->
        <section class="px-4 py-16 sm:px-6 lg:px-8"
            style="background: linear-gradient(135deg, var(--color-primary), color-mix(in srgb, var(--color-primary) 80%, #000))">
            <div class="mx-auto max-w-3xl text-center">
                <h2 class="text-3xl font-bold text-white">Want to work with us?</h2>
                <p class="mt-4 text-white/80">
                    We'd love to hear about your project. Let's start a conversation.
                </p>
                <div class="mt-8">
                    <UiAppButton to="/contact" size="lg" class="!bg-white hover:!bg-white/90"
                        style="color: var(--color-primary)">
                        Get in Touch
                    </UiAppButton>
                </div>
            </div>
        </section>
    </div>
</template>
