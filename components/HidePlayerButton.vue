<script setup lang="ts">
import {useTracksStore} from '~/store';
const store = useTracksStore();

const handleIsPlayerShowedToggle = () => {
  store.togglePayerShowed();
};
const buttonText = computed(() => `${store.isPlayerShowed ? 'Hide' : 'Show'} player`);
</script>

<template>
  <button
    class="player-mode-button"
    @click="handleIsPlayerShowedToggle"
  >
    {{ buttonText }}
  </button>
</template>

<style scoped>

.player-mode-button {
  position: relative;
  background-color: var(--electric-indigo);
  color: #ffffff;
  padding: 1.5em;
  border-radius: 50%;
  overflow: hidden;
  border: none;
  max-width: 300px;
  min-width: min-content;
  align-self: center;
  font-weight: 700;
  cursor: pointer;
  font-size: 0.7rem;

  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
}

.player-mode-button:hover::before,
.player-mode-button:focus::before {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0, 0.2);
}
</style>
