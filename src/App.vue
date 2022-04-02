<template>
  <TheTopbar />

  <main class="flex flex-col justify-center items-start overflow-auto mt-16">
    <RouterView />
  </main>
</template>

<script setup>
  import TheTopbar from './components/layout/TheTopbar.vue'
</script>
