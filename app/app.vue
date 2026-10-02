<template>
  <NuxtRouteAnnouncer />
  <!-- Skip link: first thing a keyboard user reaches -->
  <a
    href="#main"
    class="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-white focus:px-5 focus:py-3 focus:font-bold focus:text-primary-700 focus:shadow-lift"
  >
    Skip to main content
  </a>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
