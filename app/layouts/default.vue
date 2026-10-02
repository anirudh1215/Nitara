<script setup lang="ts">
/**
 * Default layout — header, page content, footer.
 * The header is fixed, so page content starts at the top of the document
 * and each section manages its own top padding.
 */
</script>

<template>
  <div class="flex min-h-screen flex-col bg-cream">
    <LayoutAppHeader />
    <main id="main" class="flex-1">
      <slot />
    </main>
    <LayoutAppFooter />
  </div>
</template>
