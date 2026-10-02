<script setup lang="ts">
/**
 * ContactForm — Accessible contact form with client-side validation.
 */
const site = useSite();

const form = reactive({
    name: "",
    email: "",
    message: "",
});

const submitted = ref(false);
const errors = reactive<Record<string, string>>({});

function validate(): boolean {
    // Reset
    errors.name = "";
    errors.email = "";
    errors.message = "";

    let valid = true;

    if (!form.name.trim()) {
        errors.name = "Name is required.";
        valid = false;
    }

    if (!form.email.trim()) {
        errors.email = "Email is required.";
        valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
        errors.email = "Please enter a valid email address.";
        valid = false;
    }

    if (!form.message.trim()) {
        errors.message = "Message is required.";
        valid = false;
    }

    return valid;
}

function handleSubmit() {
    if (!validate()) return;

    // In production, replace with API call (e.g., /api/contact)
    console.log("Form submitted:", { ...form });
    submitted.value = true;

    // Reset form
    form.name = "";
    form.email = "";
    form.message = "";
}
</script>

<template>
    <form @submit.prevent="handleSubmit" class="mx-auto max-w-xl space-y-6" novalidate>
        <!-- Success message -->
        <div v-if="submitted" class="rounded-xl bg-green-50 border border-green-200 p-4 text-center text-green-700"
            role="alert">
            <p class="font-semibold">Thank you!</p>
            <p class="text-sm">We'll get back to you at {{ site.email }}.</p>
        </div>

        <!-- Name -->
        <div>
            <label for="contact-name" class="mb-1.5 block text-sm font-medium" style="color: var(--color-text)">
                Full Name
            </label>
            <input id="contact-name" v-model="form.name" type="text" autocomplete="name" placeholder="Jane Doe"
                class="w-full border border-secondary-300 px-4 py-2.5 placeholder-secondary-400 transition-colors focus:outline-none focus:ring-2"
                :class="{ 'border-red-400': errors.name }" :style="{
                    borderRadius: 'var(--radius)',
                    color: 'var(--color-text)',
                    '--tw-ring-color': 'var(--color-primary)',
                }" />
            <p v-if="errors.name" class="mt-1 text-sm text-red-500">{{ errors.name }}</p>
        </div>

        <!-- Email -->
        <div>
            <label for="contact-email" class="mb-1.5 block text-sm font-medium" style="color: var(--color-text)">
                Email Address
            </label>
            <input id="contact-email" v-model="form.email" type="email" autocomplete="email"
                placeholder="jane@example.com"
                class="w-full border border-secondary-300 px-4 py-2.5 placeholder-secondary-400 transition-colors focus:outline-none focus:ring-2"
                :class="{ 'border-red-400': errors.email }" :style="{
                    borderRadius: 'var(--radius)',
                    color: 'var(--color-text)',
                    '--tw-ring-color': 'var(--color-primary)',
                }" />
            <p v-if="errors.email" class="mt-1 text-sm text-red-500">{{ errors.email }}</p>
        </div>

        <!-- Message -->
        <div>
            <label for="contact-message" class="mb-1.5 block text-sm font-medium" style="color: var(--color-text)">
                Message
            </label>
            <textarea id="contact-message" v-model="form.message" rows="5" placeholder="Tell us about your project..."
                class="w-full resize-none border border-secondary-300 px-4 py-2.5 placeholder-secondary-400 transition-colors focus:outline-none focus:ring-2"
                :class="{ 'border-red-400': errors.message }" :style="{
                    borderRadius: 'var(--radius)',
                    color: 'var(--color-text)',
                    '--tw-ring-color': 'var(--color-primary)',
                }" />
            <p v-if="errors.message" class="mt-1 text-sm text-red-500">{{ errors.message }}</p>
        </div>

        <!-- Submit -->
        <UiAppButton type="submit" size="lg" class="w-full">
            Send Message
        </UiAppButton>
    </form>
</template>
