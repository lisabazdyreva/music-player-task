<script setup lang="ts">
import {Ref} from 'vue';
import AudioPlayer from '@liripeng/vue-audio-player';
import {useTracksStore} from '~/store';

import ArrowButton from '~/components/TrackPlayer/ArrowButton/ArrowButton.vue';
import ControlButton from '~/components/TrackPlayer/ControlButton/ControlButton.vue';

import {ArrowButtonDirection, ControlButtonType,} from '~/consts';
import {getPlayerNativeControlsColor} from '~/utils';

const store = useTracksStore();

const currentTrack = computed(() => store.tracksFiltered[0]);
const isCurrentTrackPlayed = computed(() => store.isCurrentTrackPlayed);

const audioPlayerRef = ref<Ref<HTMLElement> | null>(null);

const themeColor = ref<Ref<string> | null>(null);

watch(currentTrack, async (_new, _old) => {
  if (!audioPlayerRef.value) {
    return;
  }

  const index = getCurrentIndex(store.currentTrackId);
  audioPlayerRef.value.currentPlayIndex = index;

  await nextTick();

  audioPlayerRef.value.play();
  store.setIsCurrentTrackPlayed(true);
});

watch(isCurrentTrackPlayed, async (newValue, oldValue) => {
  if (!audioPlayerRef.value) {
    return;
  }

  if (newValue === false) {
    audioPlayerRef.value.pause();
  }

  if (newValue) {
    audioPlayerRef.value.play();
  }
});

const handleBeforeNext = (next: any) => {
  const nextId = store.tracksFiltered[1].id;

  setTrack(nextId);
  next();
};

const handleBeforePrev = (next: any) => {
  const nextId = store.tracksFiltered[store.tracksFiltered.length - 1].id;

  setTrack(nextId);
  next();
};

const setTrack = (id: number) => {
  store.setCurrentTrackId(id);
  store.setTracksOrder();
};

const getCurrentIndex = (currentId: number) => {
  return store.tracks.findIndex(({id}) => id === currentId);
};

onMounted(() => {
  const isDarkTheme = window.matchMedia("(prefers-color-scheme: dark)").matches;
  themeColor.value = getPlayerNativeControlsColor(isDarkTheme);
})

</script>

<template>
  <client-only>
    <div class="player-wrapper custom-player">
      <audio-player
        ref="audioPlayerRef"
        :audio-list="store.tracks.map(({url}) => url)"
        :theme-color="themeColor"
        :show-playback-rate="false"
        :before-next="handleBeforeNext"
        :before-prev="handleBeforePrev"
    >
        <template #play-start>
          <ControlButton
            :currentTrack="currentTrack"
            :type="ControlButtonType.Play"
          />
        </template>


        <template #play-pause>
          <ControlButton
            :currentTrack="currentTrack"
            :type="ControlButtonType.Pause"
          />
        </template>

        <template #play-prev>
          <ArrowButton :arrowValue="ArrowButtonDirection.Prev"/>
        </template>

        <template #play-next>
          <ArrowButton :arrowValue="ArrowButtonDirection.Next"/>
        </template>
      </audio-player>
    </div>
  </client-only>
</template>

<style scoped>
.player-wrapper {
  grid-column: 1 / -1;
}

.main-control {

}
</style>
