<script setup lang="ts">
</script>

<template>
  <main class="main">
    <NuxtPage/>
  </main>
</template>

<style scoped>
.main {
  flex: 1 0 auto;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  margin: 0 0.5rem;

  @media screen and (min-width: 768px) {
    margin: 0 2rem;
  }
}
</style>
