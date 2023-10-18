<script setup lang="ts">

</script>

<template>
  <header class="header">
    <nav>
      <ul class="links-list">
        <li class="links-item"><NuxtLink class="routing-link" to="/">Home</NuxtLink></li>
        <li class="links-item"> <NuxtLink class="routing-link" to="/">My Playlist</NuxtLink></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
  .header {
    flex: 0 0 auto;
    height: 60px;
    margin: 0 1rem;
  }

  .links-list {
    display: flex;
    list-style: none;
    padding: 0;
    margin: 0;
    justify-content: space-between;
  }

  .links-item {
    margin-right: 1rem;
  }

  .links-item:last-child {
    margin-right: 0;
  }

  .routing-link {
    display: block;
    padding: 20px 10px;
    text-decoration: none;
    color: var(--light-gray)
  }

  .routing-link:hover,
  .routing-link:focus {
    color: var(--electric-indigo);
  }
</style>
