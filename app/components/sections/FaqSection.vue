<script setup lang="ts">
/**
 * FaqSection — accordion.
 *
 * Accessibility: each question is a real <button> carrying aria-expanded and
 * aria-controls; the panel is a region labelled by its button. Arrow keys,
 * Home and End move between questions, which is what screen-reader users
 * expect from a disclosure group.
 *
 * Motion: the panel animates its height via AnimatePresence, and the plus
 * icon rotates 45° into a cross.
 */
import { faqs, faqSection } from "~~/content";
import { easeOutSoft } from "~/utils/motion";

const open = ref<number | null>(0);
const reduced = usePrefersReducedMotion();
const buttons = ref<HTMLButtonElement[]>([]);

function toggle(i: number) {
  open.value = open.value === i ? null : i;
}

function onKeydown(e: KeyboardEvent, i: number) {
  const last = faqs.length - 1;
  let target: number | null = null;

  if (e.key === "ArrowDown") target = i === last ? 0 : i + 1;
  else if (e.key === "ArrowUp") target = i === 0 ? last : i - 1;
  else if (e.key === "Home") target = 0;
  else if (e.key === "End") target = last;

  if (target !== null) {
    e.preventDefault();
    buttons.value[target]?.focus();
  }
}
</script>

<template>
  <section id="faq" class="bg-mint px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto max-w-3xl">
      <UiSectionHeading
        :eyebrow="faqSection.eyebrow"
        :heading="faqSection.heading"
        color="#2a7d24"
      />

      <div class="mt-14 space-y-4">
        <UiReveal v-for="(item, i) in faqs" :key="item.question" :index="i">
          <div class="overflow-hidden rounded-[1.5rem] bg-white shadow-soft">
            <h3>
              <button
                :id="`faq-btn-${i}`"
                ref="buttons"
                type="button"
                class="flex w-full items-center justify-between gap-5 px-6 py-5 text-left sm:px-7"
                :aria-expanded="open === i"
                :aria-controls="`faq-panel-${i}`"
                @click="toggle(i)"
                @keydown="onKeydown($event, i)"
              >
                <span class="font-display text-lg font-bold text-ink sm:text-xl">
                  {{ item.question }}
                </span>
                <span
                  class="flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300"
                  :class="open === i ? 'bg-brand-green text-white' : 'bg-mint text-brand-green'"
                  :style="{ transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }"
                  aria-hidden="true"
                >
                  <Icon name="ph:plus-bold" class="h-4 w-4" />
                </span>
              </button>
            </h3>

            <AnimatePresence>
              <Motion
                v-if="open === i"
                :id="`faq-panel-${i}`"
                as="div"
                role="region"
                :aria-labelledby="`faq-btn-${i}`"
                class="overflow-hidden"
                :initial="{ height: 0, opacity: 0 }"
                :animate="{ height: 'auto', opacity: 1 }"
                :exit="{ height: 0, opacity: 0 }"
                :transition="
                  reduced ? { duration: 0 } : { duration: 0.38, ease: easeOutSoft }
                "
              >
                <p class="px-6 pb-6 leading-relaxed text-ink-muted sm:px-7">
                  {{ item.answer }}
                </p>
              </Motion>
            </AnimatePresence>
          </div>
        </UiReveal>
      </div>
    </div>
  </section>
</template>
