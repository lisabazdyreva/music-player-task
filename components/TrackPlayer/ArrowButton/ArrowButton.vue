<script setup lang="ts">
const props = defineProps({
  arrowValue: String,
});
</script>

<template>
  <button class="arrow-button">
    <svg
      aria-hidden="true"
      width="100%"
      height="100%"
    >
      <use :href="`#icon-play-${props.arrowValue}`"/>
    </svg>
  </button>
</template>

<style scoped>
.arrow-button {
  background-color: transparent;
  color:  var(--player-controls-color);
  border: none;
  cursor: pointer;
}

.arrow-button:hover,
.arrow-button:focus-visible {
  color: var(--gray);
}

.arrow-button:focus-visible {
  outline: 2px solid var(--bg-color);
}
</style>

