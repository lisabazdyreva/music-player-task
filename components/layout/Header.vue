<script setup lang="ts">
import HidePlayerButton from '~/components/HidePlayerButton.vue';
import {AppRouter} from '~/consts/router';
</script>

<template>
  <header class="header">
    <nav class="nav">
      <ul class="links-list">
        <li class="links-item">
          <NuxtLink class="routing-link" :to="AppRouter.Main">Home</NuxtLink>
        </li>
        <li>
          <HidePlayerButton />
        </li>
        <li class="links-item">
          <NuxtLink class="routing-link" :to="AppRouter.TracksList">My Playlist</NuxtLink>
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
</style>
