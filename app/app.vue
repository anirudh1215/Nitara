<script setup lang="ts">
/**
 * Root App — Injects global theme CSS variables and renders layout system.
 */
useTheme();
</script>

<template>
  <NuxtRouteAnnouncer />
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
