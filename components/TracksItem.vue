<script setup lang="ts">
import {PropType} from 'vue';
import AudioPlayer from '@liripeng/vue-audio-player';

const audioPlayerRef = ref<any>(null);

const props = defineProps({
  track: Object as PropType<{name: string; artist: string; url: string; id: number;}>,
});

const emits = defineEmits(['handleBeforePlay']);
const { name, artist, url } = props.track;

const handleBeforePlay = (next: any) => {
  emits('handleBeforePlay', props.track?.id, audioPlayerRef.value, next);
};
</script>

<template>
  <li class="track-item">
    <div class="player-wrapper custom-player">
      <audio-player
        ref="audioPlayerRef"
        :audio-list="[url]"
        theme-color="#6600ff"
        :show-prev-button="false"
        :show-next-button="false"
        :show-playback-rate="false"
        :show-volume-button="false"
        :before-play="handleBeforePlay"
      >
        <template #play-start>
          <div class="cover-wrapper">
            <svg class="play-button" aria-hidden="true" width="100%" height="100%">
              <use href="#icon-play" />
            </svg>
            <img
              class="cover-image"
              src="/img/cover.jpeg"
              alt="Обложка альбома"
            />
          </div>
          <div class="track-info-wrapper">
            <span class="track-info">{{name}}</span> {{ `by ${artist}` }}
          </div>
        </template>

        <template #play-pause>
          <div class="cover-wrapper">
            <svg class="play-button" aria-hidden="true" width="100%" height="100%">
              <use href="#icon-pause" />
            </svg>
            <img
              class="cover-image"
              src="/img/cover.jpeg"
              alt="Обложка альбома"
            />
          </div>
          <div class="track-info-wrapper">
            <span class="track-info">{{name}}</span> {{ `by ${artist}` }}
          </div>
        </template>
      </audio-player>
    </div>
  </li>
</template>

<style scoped>
.track-item {
  display: grid;
  grid-template-columns: 50px auto;
  align-items: center;
}

.player-wrapper {
  grid-column: 1 / -1;
}

.cover-wrapper {
  position: relative;
  width: 50px;
  height: 50px;
  border-radius: 5px;
  overflow: hidden;
  color: red;
}

.cover-wrapper:hover::before {
  content: "";
  background-color: rgba(0, 0, 0, 0.3);
  position: absolute;
  width: 50px;
  height: 50px;
  /* todo box-shadow?? */
}

.play-button {
  position: absolute;
  opacity: 0.6;
  top: 10px;
  left: 10px;
  color: #000000;
}

.play-button:hover {
  color: #6600ff;
  opacity: 0.8;
}

.cover-image {
  object-fit: cover;
  width: 100%;
  height: 100%;
}

.track-info-wrapper {
  margin-left: 20px;
  font-size: 0.8rem;
  font-family: 'Montserrat-SemiBold', sans-serif;
  color: #000000;
}

.track-info {
  color: #6600ff;
  font-family: 'Montserrat-Bold', sans-serif;
}
</style>
<!--//.custom-player-->
