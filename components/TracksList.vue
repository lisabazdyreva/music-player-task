<script setup lang="ts">
import TracksItem from '~/components/TracksItem.vue';
import {useTracksStore} from '~/store';

const store = useTracksStore();
const tracks = computed(() => store.tracksFiltered);
const tracksListRef = ref(null);

const handleListClick = () => {
  if (tracksListRef.value) {
    tracksListRef.value.scrollIntoView({behavior: "smooth"});
  }
};
</script>

<template>
  <div class="tracks-list-wrapper">
    <ul
      ref="tracksListRef"
      class="tracks-list"
      @click="handleListClick"
    >
      <TracksItem
        v-for="track in tracks"
        :key="track.id"
        :track="track"
        :tracksList="tracksListRef"
      />
    </ul>
  </div>
</template>

<style scoped>
.tracks-list-wrapper {
  overflow: auto;
  padding: 0 0.5rem;

  @media screen and (min-width: 768px) {
    padding: 0 1rem;
  }
}

.tracks-list {
  list-style: none;
  padding: 0;
  margin: 0;
}
</style>
