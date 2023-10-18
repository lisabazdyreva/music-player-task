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
  color: var(--extra-light-gray);
  border: none;
  cursor: pointer;
}

.arrow-button:hover {
  color: var(--light-gray);
}
</style>
