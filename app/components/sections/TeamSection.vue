<script setup lang="ts">
/**
 * TeamSection — staff grid. Cards stagger in and lift on hover, with a
 * slow zoom on the portrait.
 */
import { team, teamSection } from "~~/content";
</script>

<template>
  <section id="team" class="bg-lilac px-4 py-20 sm:px-6 sm:py-24 lg:px-8 lg:py-28">
    <div class="mx-auto max-w-7xl">
      <UiSectionHeading
        :eyebrow="teamSection.eyebrow"
        :heading="teamSection.heading"
        :body="teamSection.body"
        color="#7b3f98"
      />

      <ul class="mt-16 grid gap-7 sm:grid-cols-2 lg:grid-cols-4" role="list">
        <UiReveal
          v-for="(member, i) in team"
          :key="`${member.role}-${i}`"
          as="li"
          :index="i"
        >
          <article
            class="group h-full overflow-hidden rounded-[2rem] bg-white shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-lift"
          >
            <div class="overflow-hidden">
              <UiSmartImage
                :src="member.image.src"
                :alt="member.image.alt"
                :width="400"
                :height="480"
                sizes="(min-width: 1024px) 300px, (min-width: 640px) 50vw, 100vw"
                img-class="h-64 w-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
            <div class="p-6">
              <h3 class="text-lg text-ink">{{ member.name }}</h3>
              <p
                class="mt-1 text-sm font-extrabold"
                :style="{ color: member.textColor }"
              >
                {{ member.role }}
              </p>
              <p class="mt-3 text-sm leading-relaxed text-ink-muted">
                {{ member.bio }}
              </p>
            </div>
          </article>
        </UiReveal>
      </ul>
    </div>
  </section>
</template>
