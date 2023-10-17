<script setup lang="ts">
import TracksItem from '~/components/TracksItem.vue';

const currentPlayer = ref<any>(null);
const currentTrackId = ref<number | null>(null);

const tracks = [
  {
    id: 1,
    name: 'track01',
    artist: 'Doja Cat',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3'
  },
  {
    id: 2,
    name: 'track02',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
  {
    id: 3,
    name: 'track03',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
  {
    id: 4,
    name: 'track04',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
  {
    id: 5,
    name: 'track05',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
  {
    id: 6,
    name: 'track06',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
  {
    id: 7,
    name: 'track07',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
  {
    id: 8,
    name: 'track08',
    artist: 'Eminem',
    cover: 'ссылка',
    url: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/308622/NF%20-%20Let%20You%20Down.mp3',
  },
];

const setPlayerData = (audioPlayer: any, id: number) => {
  currentPlayer.value = audioPlayer;
  currentTrackId.value = id;
};

const handleBeforePlay = (id: number, audioPlayer: any, next: any) => {
  if (!currentTrackId.value && !currentPlayer.value)  {
    setPlayerData(audioPlayer, id);
    next();
    return;
  }

  if (currentTrackId.value === id) {
    next();
    return;
  }

  stopPrevTrack();
  setPlayerData(audioPlayer, id);
  next();
};

const stopPrevTrack = () => {
  currentPlayer.value.pause();
  currentPlayer.value.currentTime = 0;
  currentPlayer.value.$refs.audio.currentTime = 0;
  currentPlayer.value.$refs.audioProgress.style.width = 0;
  currentPlayer.value.setPointPosition(0);
}
</script>

<template>
  <div class="tracks-list-wrapper">
    <client-only>
      <ul class="tracks-list">
        <TracksItem
          v-for="track in tracks"
          :key="track.id"
          :track="track"
          @handleBeforePlay="handleBeforePlay"
        />
      </ul>
    </client-only>
  </div>
</template>

<style scoped>
.tracks-list-wrapper {
  overflow: auto;
  padding: 1rem;
}

.tracks-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
