<script setup lang="ts">
import {PropType} from 'vue';

const props = defineProps({
  currentTrack: Object as PropType<{ name: string; cover: string; artist: string; }>,
  type: String,
});
</script>

<template>
  <button class="cover-control">
    <svg class="cover-icon" aria-hidden="true" width="100%" height="100%">
      <use :href="`#icon-${props.type}`"/>
    </svg>
    <img
      class="cover-image"
      :src="props.currentTrack.cover"
      :alt="props.currentTrack.name"
    />
  </button>
  <div class="track-info-wrapper">
    <span class="track-name">{{ props.currentTrack.name }}</span><br/> {{ props.currentTrack.artist }}
  </div>
</template>

<style scoped>
.cover-control {
  cursor: pointer;
  border: none;
  padding: 0;
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
}

.cover-control:hover,
.cover-control:focus-visible {
  box-shadow: var(--shadow-hover);
}

.cover-control:focus-visible {
  outline: 2px solid var(--bg-color);
}

.cover-control:hover::before,
.cover-control:focus-visible::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 50px;
  height: 50px;
}

.cover-icon {
  position: absolute;
  opacity: 0.8;
  top: 10px;
  left: 10px;
  color: var(--extra-light-gray);
}

.cover-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.track-info-wrapper {
  margin-left: 20px;
  font-size: 0.8rem;
  color: var(--gray);

  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.track-name {
  color: var(--player-controls-color);
  font-weight: 700;
}
</style>
