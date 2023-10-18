<script setup lang="ts">
import {PropType} from 'vue';
import {useTracksStore} from '~/store';

const store = useTracksStore();
const props = defineProps({
  track: Object as PropType<{ name: string; artist: string; url: string; id: number; cover: string; }>,
});

const isCurrentTrack = computed(() => props.track?.id === store.currentTrackId);

const handleTrackItemClick = () => {
  if (store.currentTrackId === props.track?.id) {
    store.setIsCurrentTrackPlayed(!store.isCurrentTrackPlayed);
    return;
  }

  if (props.track) {
    store.setCurrentTrackId(props?.track?.id);
    store.setTracksOrder();
  }
};
</script>

<template>
  <li
    :class="`track-item ${ isCurrentTrack ? 'track-item-active': ''}`"
    @click="handleTrackItemClick"
  >
    <button class="cover-control">
      <svg class="control-icon" aria-hidden="true" width="100%" height="100%">
        <use
          v-if="isCurrentTrack && store.isCurrentTrackPlayed"
          href="#icon-pause"
        />
        <use
          v-else
          href="#icon-play"
        />
      </svg>

      <img
        class="cover-image"
        :src="track.cover"
        :alt="track?.name"
      />
    </button>
    <div class="track-info">
      <span class="track-name">{{ track.name }}</span> by {{ track.artist }}
    </div>

  </li>
</template>

<style scoped>
.track-item {
  display: grid;
  align-items: center;
  grid-template-columns: 70px auto;
  margin: 0.5rem 0;
  padding: 0.5rem 0;

  border-bottom: 1px dotted var(--light-gray);
  cursor: pointer;

  @media screen and (min-width: 768px) {
    grid-template-columns: 100px auto;
    font-size: 1rem;
    margin: 1rem 0;
  }
}

.control-icon {
  display: none;
  position: absolute;
  opacity: 0.8;
  color: var(--electric-indigo);
  width: 20px;
  height: 20px;
  top: 15px;
  left: 15px;

  @media screen and (min-width: 768px) {
    width: 30px;
    height: 30px;
    top: 20px;
    left: 20px;
  }
}

.cover-control:focus .control-icon,
.track-item:hover .control-icon,
.track-item-active .control-icon {
  display: block;
}

.track-name {
  color: var(--electric-indigo);
  display: block;
  font-size: 0.8rem;
  font-weight: 700;
  margin-bottom: 0.2rem;

  @media screen and (min-width: 768px) {
    display: inline;
    font-size: 1.1rem;
    margin-right: 5px;
  }
}

.cover-control {
  cursor: pointer;
  border: none;
  padding: 0;
  position: relative;
  border-radius: 5px;
  overflow: hidden;
  width: 50px;
  height: 50px;

  @media screen and (min-width: 768px) {
    width: 70px;
    height: 70px;
  }
}

.cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.track-info {
  font-size: 0.7rem;
  font-weight: 400;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
}
</style>
