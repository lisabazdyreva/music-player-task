<script setup lang="ts">
</script>

<template>
  <h2 class="page-header">My playlist</h2>
  <TracksList/>
</template>

<style scoped>
.page-header {
  margin: 1rem 0 1rem;
  font-size: 1.2rem;
  color: var(--black);
  font-weight: 700;
  user-select: none;

  @media screen and (min-width: 768px) {
    font-size: 2rem;
    margin: 1rem 0 2rem;
  }
}
</style>
