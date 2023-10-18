<script setup lang="ts">
import {useTracksStore} from '~/store';

import Header from '~/components/layout/Header.vue';
import Layout from '~/components/layout/Layout.vue';
import Footer from '~/components/layout/Footer.vue';

const store = useTracksStore();
</script>

<template>
  <Header/>
  <Layout :class="`layout-height${store.isPlayerShowed ? '' : '-full'}`"/>
  <Footer v-show="store.isPlayerShowed" />
</template>

<style scoped>
.layout-height {
  max-height: calc(100% - var(--header-height) - var(--footer-height) - 1rem);
}

.layout-height-full {
  max-height: calc(100% - var(--header-height) - 1rem);
}
</style>
