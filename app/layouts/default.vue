<template>
  <a class="skip" href="#main">Перейти к содержанию</a>
  <AppHeader />
  <main id="main">
    <slot />
  </main>
  <AppFooter />
</template>

<script setup lang="ts">
const largeText = useState("large-text", () => false);

useHead({
  bodyAttrs: {
    class: computed(() => (largeText.value ? "large-text" : "")),
  },
});
</script>
