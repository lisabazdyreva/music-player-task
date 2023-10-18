<script setup lang="ts">
import {AppRouter} from '~/consts/router';
</script>

<template>
  <div>
    <h1
      class="page-header"
    >
      Music App
    </h1>

    <NuxtLink class="routing-link" :to="AppRouter.TracksList">Go to playlist >></NuxtLink>
  </div>
</template>

<style scoped>
.routing-link {
  text-decoration: none;
  color: var(--electric-indigo);
}
</style>
