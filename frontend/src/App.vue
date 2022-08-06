<template>
  <q-layout view="lhh LpR lff">
    <q-page-container>
      <q-page>
        <HomeView />
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import HomeView from './views/HomeView.vue';
export default {
  name: "App",
  components: {
    HomeView
},
};
</script>

<style>
</style>
