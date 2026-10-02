<script setup lang="ts">
/**
 * TrustStrip — full-bleed marquee of the centre's credentials.
 * Scrolls infinitely, pauses on hover or keyboard focus.
 */
import { marquee } from "~~/content";
</script>

<template>
  <section class="bg-brand-blue" aria-label="What we offer">
    <UiMarquee :items="marquee" :duration="38" />
  </section>
</template>
