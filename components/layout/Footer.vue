<script setup lang="ts">
import TrackPlayer from '~/components/TrackPlayer/TrackPlayer.vue';
</script>

<template>
  <footer class="footer">
    <TrackPlayer/>
  </footer>
</template>

<style scoped>
.footer {
  box-sizing: border-box;
  height: var(--footer-height);
  margin-top: 1rem;
  border-radius: 5px 5px 0 0;
  padding: 1rem 0.5rem;
  background-color: var(--electric-indigo);
  flex: 0 0 auto;

  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
}
</style>
