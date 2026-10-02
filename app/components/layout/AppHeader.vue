<script setup lang="ts">
/**
 * AppHeader — sticky navigation that picks up a background and shadow once
 * the page is scrolled, and collapses to a hamburger sheet on mobile.
 *
 * Accessibility notes:
 *  - the mobile sheet is a focus trap-free but Escape-closable dialog
 *  - body scroll is locked while it is open
 *  - the toggle exposes aria-expanded / aria-controls
 */
import { site, nav, headerCta } from "~~/content";
import { easeOutSoft } from "~/utils/motion";

const scrolled = ref(false);
const menuOpen = ref(false);
const reduced = usePrefersReducedMotion();

function onScroll() {
  scrolled.value = window.scrollY > 24;
}

function onKeydown(e: KeyboardEvent) {
  if (e.key === "Escape") menuOpen.value = false;
}

onMounted(() => {
  onScroll();
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("keydown", onKeydown);
});

onUnmounted(() => {
  window.removeEventListener("scroll", onScroll);
  window.removeEventListener("keydown", onKeydown);
  document.body.style.overflow = "";
});

watch(menuOpen, (open) => {
  document.body.style.overflow = open ? "hidden" : "";
});

/** Close the sheet after an in-page jump so the target is visible */
function go() {
  menuOpen.value = false;
}
</script>

<template>
  <header
    class="fixed inset-x-0 top-0 z-50 transition-all duration-300"
    :class="
      scrolled || menuOpen
        ? 'bg-cream/90 shadow-soft backdrop-blur-md'
        : 'bg-transparent'
    "
  >
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3 sm:px-6 lg:px-8"
      aria-label="Main"
    >
      <!-- Brand: illustration mark + typeset name, so the wordmark stays
           legible at header size (the full logo lockup does not) -->
      <a href="#top" class="flex shrink-0 items-center gap-2.5">
        <img
          :src="site.mark"
          alt=""
          width="256"
          height="256"
          class="h-10 w-10 shrink-0 transition-all duration-300 sm:h-12 sm:w-12"
          aria-hidden="true"
        />
        <span class="leading-none">
          <span class="block font-display text-xl font-extrabold tracking-tight text-primary-700 sm:text-2xl">
            Nitara
          </span>
          <span class="mt-0.5 hidden text-[11px] font-bold uppercase tracking-wider text-accent-700 sm:block">
            Special School &amp; Child Development Center
          </span>
        </span>
      </a>

      <!-- Desktop nav -->
      <ul class="hidden items-center gap-2 lg:flex" role="list">
        <li v-for="link in nav" :key="link.to">
          <a
            :href="link.to"
            class="inline-flex min-h-[44px] items-center rounded-full px-4 py-2.5 text-[15px] font-bold text-ink-muted transition-colors hover:bg-white hover:text-primary-700"
          >
            {{ link.label }}
          </a>
        </li>
      </ul>

      <!-- Desktop phone + CTA -->
      <div class="hidden shrink-0 items-center gap-4 lg:flex">
        <a
          :href="`tel:+${site.phoneRaw}`"
          class="flex items-center gap-2 text-[15px] font-extrabold text-primary-700 transition-colors hover:text-accent-700"
        >
          <Icon name="ph:phone-call-fill" class="h-4 w-4" aria-hidden="true" />
          {{ site.phone }}
        </a>
        <UiAppButton :to="headerCta.to" size="sm">{{ headerCta.label }}</UiAppButton>
      </div>

      <!-- Mobile: call + hamburger -->
      <div class="flex items-center gap-2 lg:hidden">
        <a
          :href="`tel:+${site.phoneRaw}`"
          class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-accent-500 text-white shadow-soft"
          :aria-label="`Call ${site.shortName} on ${site.phone}`"
        >
          <Icon name="ph:phone-fill" class="h-5 w-5" aria-hidden="true" />
        </a>
        <button
          class="inline-flex h-11 w-11 items-center justify-center rounded-full bg-white text-ink shadow-soft"
          :aria-expanded="menuOpen"
          aria-controls="mobile-nav"
          :aria-label="menuOpen ? 'Close menu' : 'Open menu'"
          @click="menuOpen = !menuOpen"
        >
          <Icon
            :name="menuOpen ? 'ph:x-bold' : 'ph:list-bold'"
            class="h-5 w-5"
            aria-hidden="true"
          />
        </button>
      </div>
    </nav>

    <!-- Mobile sheet -->
    <AnimatePresence>
      <Motion
        v-if="menuOpen"
        id="mobile-nav"
        as="div"
        class="overflow-hidden border-t border-black/5 bg-cream lg:hidden"
        :initial="{ height: 0, opacity: 0 }"
        :animate="{ height: 'auto', opacity: 1 }"
        :exit="{ height: 0, opacity: 0 }"
        :transition="reduced ? { duration: 0 } : { duration: 0.3, ease: easeOutSoft }"
      >
        <div class="space-y-1 px-4 py-5 sm:px-6">
          <a
            v-for="link in nav"
            :key="link.to"
            :href="link.to"
            class="block rounded-2xl px-4 py-3.5 text-lg font-bold text-ink transition-colors hover:bg-white"
            @click="go"
          >
            {{ link.label }}
          </a>

          <div class="space-y-3 pt-4">
            <UiAppButton :to="headerCta.to" size="md" class="w-full" @click="go">
              {{ headerCta.label }}
            </UiAppButton>
            <a
              :href="`tel:+${site.phoneRaw}`"
              class="flex items-center justify-center gap-2 py-1 font-extrabold text-primary-700"
            >
              <Icon name="ph:phone-call-fill" class="h-4 w-4" aria-hidden="true" />
              {{ site.phone }}
            </a>
          </div>
        </div>
      </Motion>
    </AnimatePresence>
  </header>
</template>
