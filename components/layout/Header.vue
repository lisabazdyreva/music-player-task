<script setup lang="ts">
import {useTracksStore} from '~/store';

const store = useTracksStore();
const handleIsPlayerShowedToggle = () => {
  store.togglePayerMode();
};
const buttonText = computed(() => `${store.playerMode === 'list' ? 'Show' : 'Hide'} player`); // todo to consts
</script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="links-list">
        <li class="links-item">
<!--          todo to consts-->
          <NuxtLink class="routing-link" to="/">Home</NuxtLink>
        </li>
        <li>
          <button
            class="player-mode-button"
            @click="handleIsPlayerShowedToggle"
          >
            {{ buttonText }}
          </button>
        </li>
        <li class="links-item">
          <NuxtLink class="routing-link" to="/tracks">My Playlist</NuxtLink>
        </li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  flex: 0 0 auto;
  height: var(--header-height);
  margin: 0 0.5rem;

  @media screen and (min-width: 768px) {
    margin: 0 2rem;
  }
}

.nav {
  width: 100%;
  height: 100%;
}

.links-list {
  box-sizing: border-box;
  display: flex;
  list-style: none;
  padding: 0.5rem 0;
  margin: 0;
  justify-content: space-between;
  align-items: center;
}

.links-item {
  margin-right: 1rem;
}

.links-item:last-child {
  margin-right: 0;
}

.routing-link {
  font-size: 0.8rem;
  font-weight: 500;
  display: block;
  padding: 20px 10px;
  text-decoration: none;
  color: var(--gray);

  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
}

.routing-link:hover,
.routing-link:focus {
  color: var(--electric-indigo);
}

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
