<script setup lang="ts">
</script>

<template>
  <div>
    <h1
      class="page-header"
    >
      Music App
    </h1>
<!--    todo to consts-->
    <NuxtLink class="routing-link" to="/tracks">Go to playlist >></NuxtLink>
  </div>
</template>

<style scoped>
.routing-link {
  text-decoration: none;
  color: var(--electric-indigo);
}
</style>
