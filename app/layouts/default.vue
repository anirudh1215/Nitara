<script setup lang="ts">
/**
 * Default Layout — Header + page content + Footer.
 * Applies global background, text color, and font from CSS variables.
 */
</script>

<template>
    <div class="flex min-h-screen flex-col" style="
      background-color: var(--color-bg);
      color: var(--color-text);
      font-family: var(--font-family);
    ">
        <LayoutAppHeader />
        <main class="flex-1">
            <slot />
        </main>
        <LayoutAppFooter />
    </div>
</template>
