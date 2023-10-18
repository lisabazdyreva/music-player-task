<script setup lang="ts">
const track = {
  id: 6,
    name: 'track06',
  artist: 'Eminem',
  cover: 'ссылка',
  url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
};
</script>

<template>
  <footer class="footer">
    <TracksItem
      :track="track"
    />
  </footer>
</template>

<style scoped>
  .footer {
    box-sizing: border-box;
    height: var(--footer-height);
    margin-top: 1rem;
    border-radius: 5px 5px 0 0;
    padding: 1rem 1rem;
    background-color: rgba(0, 0, 0, 0.2);
    color: purple;
    flex: 0 0 auto;
  }
</style>
