<script setup lang="ts">
/**
 * ContactForm — Accessible enquiry form for parents.
 * Posts to /api/enquiry. If forwarding is not configured on the server,
 * the visitor is shown the phone / WhatsApp fallback rather than a
 * message that quietly goes nowhere.
 */
import { site } from "~~/content";

const form = reactive({
    parentName: "",
    phone: "",
    email: "",
    childAge: "",
    concern: "",
    message: "",
    /** Honeypot — hidden from real users */
    website: "",
});

type Status = "idle" | "sending" | "sent" | "unavailable" | "error";
const status = ref<Status>("idle");
const errors = reactive<Record<string, string>>({});

const concerns = [
    "Not sure yet / general enquiry",
    "Speech or language delay",
    "Autism spectrum",
    "ADHD or attention difficulties",
    "Delayed milestones",
    "Learning difficulty at school",
    "Behaviour concerns",
    "Physical / motor difficulties",
    "Other",
];

function validate(): boolean {
    Object.keys(errors).forEach((k) => delete errors[k]);

    if (!form.parentName.trim()) errors.parentName = "Please tell us your name.";

    if (!form.phone.trim()) {
        errors.phone = "A phone number helps us call you back.";
    } else if (!/^[+\d][\d\s-]{7,16}$/.test(form.phone.trim())) {
        errors.phone = "Please enter a valid phone number.";
    }

    if (form.email.trim() && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())) {
        errors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
        errors.message = "Please tell us a little about your child.";
    }

    return Object.keys(errors).length === 0;
}

async function handleSubmit() {
    if (!validate()) return;

    status.value = "sending";

    try {
        await $fetch("/api/enquiry", { method: "POST", body: { ...form } });
        status.value = "sent";
        Object.assign(form, {
            parentName: "",
            phone: "",
            email: "",
            childAge: "",
            concern: "",
            message: "",
            website: "",
        });
    } catch (err: unknown) {
        const e = err as { statusCode?: number; data?: { data?: { errors?: Record<string, string> } } };

        if (e?.statusCode === 422 && e.data?.data?.errors) {
            Object.assign(errors, e.data.data.errors);
            status.value = "idle";
        } else if (e?.statusCode === 501) {
            // Server has no forwarding destination configured yet.
            status.value = "unavailable";
        } else {
            status.value = "error";
        }
    }
}

/** Shared input styling */
const fieldClass =
    "w-full rounded-2xl border-2 border-black/10 bg-cream px-4 py-3 font-semibold text-ink placeholder-ink-muted/60 transition-colors focus:border-primary-400 focus:bg-white focus:outline-none";
</script>

<template>
    <form class="space-y-5" novalidate @submit.prevent="handleSubmit">
        <!-- Success -->
        <div v-if="status === 'sent'" class="rounded-2xl border border-green-200 bg-green-50 p-5 text-green-800"
            role="status">
            <p class="flex items-center gap-2 font-bold">
                <Icon name="ph:check-circle-fill" class="h-5 w-5" aria-hidden="true" />
                Thank you — we have your message.
            </p>
            <p class="mt-1 text-sm">
                Someone from {{ site.shortName }} will call you back. If it is urgent, please ring
                <a :href="`tel:+${site.phoneRaw}`" class="font-semibold underline">{{ site.phone }}</a>.
            </p>
        </div>

        <!-- Forwarding not configured / network failure -->
        <div v-else-if="status === 'unavailable' || status === 'error'"
            class="rounded-2xl border border-amber-200 bg-amber-50 p-5 text-amber-900" role="alert">
            <p class="flex items-center gap-2 font-bold">
                <Icon name="ph:warning-circle-fill" class="h-5 w-5" aria-hidden="true" />
                We couldn't send that just now.
            </p>
            <p class="mt-1 text-sm">
                Please call or WhatsApp us instead — we would rather hear from you directly than
                have your message go missing.
            </p>
            <div class="mt-4 flex flex-col gap-2 sm:flex-row">
                <UiAppButton :href="`tel:+${site.phoneRaw}`" size="sm">
                    <Icon name="ph:phone-call-fill" class="h-4 w-4" aria-hidden="true" />
                    {{ site.phone }}
                </UiAppButton>
                <UiAppButton v-if="site.whatsapp" :href="site.whatsapp" size="sm" variant="outline">
                    <Icon name="mdi:whatsapp" class="h-4 w-4" aria-hidden="true" />
                    WhatsApp
                </UiAppButton>
            </div>
        </div>

        <template v-if="status !== 'sent'">
            <!-- Honeypot (hidden from users, catches bots) -->
            <div class="absolute left-[-9999px]" aria-hidden="true">
                <label for="website">Leave this field empty</label>
                <input id="website" v-model="form.website" type="text" tabindex="-1" autocomplete="off" />
            </div>

            <div class="grid gap-5 sm:grid-cols-2">
                <!-- Parent name -->
                <div>
                    <label for="parentName" class="mb-1.5 block text-sm font-bold text-ink">
                        Your name <span class="text-accent-700">*</span>
                    </label>
                    <input id="parentName" v-model="form.parentName" type="text" autocomplete="name"
                        placeholder="Parent / guardian name" :class="[fieldClass, errors.parentName && 'border-red-400']"
                        :aria-invalid="!!errors.parentName"
                        :aria-describedby="errors.parentName ? 'err-parentName' : undefined" />
                    <p v-if="errors.parentName" id="err-parentName" class="mt-1 text-sm text-red-600">
                        {{ errors.parentName }}
                    </p>
                </div>

                <!-- Phone -->
                <div>
                    <label for="phone" class="mb-1.5 block text-sm font-bold text-ink">
                        Phone number <span class="text-accent-700">*</span>
                    </label>
                    <input id="phone" v-model="form.phone" type="tel" autocomplete="tel" inputmode="tel"
                        placeholder="10-digit mobile number" :class="[fieldClass, errors.phone && 'border-red-400']"
                        :aria-invalid="!!errors.phone"
                        :aria-describedby="errors.phone ? 'err-phone' : undefined" />
                    <p v-if="errors.phone" id="err-phone" class="mt-1 text-sm text-red-600">
                        {{ errors.phone }}
                    </p>
                </div>

                <!-- Email -->
                <div>
                    <label for="email" class="mb-1.5 block text-sm font-bold text-ink">
                        Email <span class="font-normal text-ink-muted">(optional)</span>
                    </label>
                    <input id="email" v-model="form.email" type="email" autocomplete="email"
                        placeholder="you@example.com" :class="[fieldClass, errors.email && 'border-red-400']"
                        :aria-invalid="!!errors.email"
                        :aria-describedby="errors.email ? 'err-email' : undefined" />
                    <p v-if="errors.email" id="err-email" class="mt-1 text-sm text-red-600">
                        {{ errors.email }}
                    </p>
                </div>

                <!-- Child's age -->
                <div>
                    <label for="childAge" class="mb-1.5 block text-sm font-bold text-ink">
                        Child's age <span class="font-normal text-ink-muted">(optional)</span>
                    </label>
                    <input id="childAge" v-model="form.childAge" type="text" placeholder="e.g. 4 years 6 months"
                        :class="fieldClass" />
                </div>
            </div>

            <!-- Concern -->
            <div>
                <label for="concern" class="mb-1.5 block text-sm font-bold text-ink">
                    What brings you to us?
                </label>
                <select id="concern" v-model="form.concern" :class="fieldClass">
                    <option value="">Select one…</option>
                    <option v-for="c in concerns" :key="c" :value="c">{{ c }}</option>
                </select>
            </div>

            <!-- Message -->
            <div>
                <label for="message" class="mb-1.5 block text-sm font-bold text-ink">
                    Tell us about your child <span class="text-accent-700">*</span>
                </label>
                <textarea id="message" v-model="form.message" rows="5"
                    placeholder="What have you noticed? Has your child been assessed before? Anything you would like us to know."
                    :class="[fieldClass, 'resize-none', errors.message && 'border-red-400']"
                    :aria-invalid="!!errors.message"
                    :aria-describedby="errors.message ? 'err-message' : undefined" />
                <p v-if="errors.message" id="err-message" class="mt-1 text-sm text-red-600">
                    {{ errors.message }}
                </p>
            </div>

            <UiAppButton type="submit" size="lg" class="w-full" :disabled="status === 'sending'">
                {{ status === "sending" ? "Sending…" : "Send Enquiry" }}
            </UiAppButton>

            <p class="text-center text-sm text-ink-muted">
                We treat everything you share about your child as confidential.
                See our <NuxtLink to="/privacy-policy" class="underline">privacy policy</NuxtLink>.
            </p>
        </template>
    </form>
</template>
