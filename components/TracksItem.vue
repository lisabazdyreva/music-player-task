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
  <li>
    <audio-player
      ref="audioPlayerRef"
      :audio-list="[url]"
      theme-color="#111111"
      :show-prev-button="false"
      :show-next-button="false"
      :show-playback-rate="false"
      :before-play="handleBeforePlay"
    />
    <div>
      <span>{{ `${name} by ${artist}` }}</span>
    </div>
  </li>
</template>

<style scoped>

</style>
