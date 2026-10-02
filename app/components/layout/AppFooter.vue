<script setup lang="ts">
/**
 * AppFooter — link columns, contact details, social icons and the
 * parent-organisation line from the logo.
 */
import { site, footerColumns } from "~~/content";

const year = new Date().getFullYear();

const socials = computed(() =>
  [
    { key: "facebook", url: site.social.facebook, icon: "mdi:facebook", label: "Facebook" },
    { key: "instagram", url: site.social.instagram, icon: "mdi:instagram", label: "Instagram" },
    { key: "youtube", url: site.social.youtube, icon: "mdi:youtube", label: "YouTube" },
    { key: "whatsapp", url: site.whatsapp, icon: "mdi:whatsapp", label: "WhatsApp" },
  ].filter((s) => !!s.url)
);
</script>

<template>
  <footer class="bg-ink text-white/70">
    <div class="brand-rule" aria-hidden="true" />

    <div class="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
      <div class="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <!-- Brand -->
        <div>
          <a href="#top" class="inline-block rounded-2xl bg-white p-3" aria-label="Back to top">
            <img
              :src="site.logo"
              :alt="`${site.name} logo`"
              width="400"
              height="351"
              loading="lazy"
              class="h-20 w-auto"
            />
          </a>
          <p class="mt-5 max-w-sm text-sm leading-relaxed">
            A special school and child development centre in Sector 24, Rohini —
            special education, therapy and early intervention for children with
            special needs.
          </p>
          <p class="mt-4 font-display font-bold text-white">{{ site.motto }}</p>

          <ul class="mt-6 flex gap-2.5" role="list">
            <li v-for="s in socials" :key="s.key">
              <a
                :href="s.url"
                target="_blank"
                rel="noopener noreferrer"
                class="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-accent-500"
                :aria-label="`${site.shortName} on ${s.label}`"
              >
                <Icon :name="s.icon" class="h-5 w-5" aria-hidden="true" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Link columns -->
        <div v-for="col in footerColumns" :key="col.title">
          <h2 class="mb-4 font-display text-sm font-bold uppercase tracking-wider text-white">
            {{ col.title }}
          </h2>
          <ul class="space-y-1" role="list">
            <li v-for="link in col.links" :key="link.label">
              <NuxtLink
                v-if="link.to.startsWith('/')"
                :to="link.to"
                class="inline-flex min-h-[32px] items-center py-1 text-sm transition-colors hover:text-white"
              >
                {{ link.label }}
              </NuxtLink>
              <a v-else :href="link.to" class="inline-flex min-h-[32px] items-center py-1 text-sm transition-colors hover:text-white">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Contact row -->
      <div class="mt-12 grid gap-5 border-t border-white/10 pt-8 sm:grid-cols-3">
        <p class="flex items-start gap-2.5 text-sm">
          <Icon name="ph:map-pin-fill" class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
          {{ site.address }}
        </p>
        <a
          :href="`tel:+${site.phoneRaw}`"
          class="flex items-start gap-2.5 text-sm transition-colors hover:text-white"
        >
          <Icon name="ph:phone-fill" class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
          {{ site.phone }}
        </a>
        <a
          :href="`mailto:${site.email}`"
          class="flex items-start gap-2.5 break-all text-sm transition-colors hover:text-white"
        >
          <Icon name="ph:envelope-fill" class="mt-0.5 h-4 w-4 shrink-0 text-brand-yellow" aria-hidden="true" />
          {{ site.email }}
        </a>
      </div>

      <div
        class="mt-8 flex flex-col items-center gap-1.5 border-t border-white/10 pt-7 text-center text-sm text-white/50"
      >
        <p>&copy; {{ year }} {{ site.name }}. All rights reserved.</p>
        <p>{{ site.parentOrg }}</p>
      </div>
    </div>
  </footer>
</template>
