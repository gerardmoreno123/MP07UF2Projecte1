<script setup>
import NavBar from "./components/NavBar.vue";
import HomeView from './views/HomeView.vue';

</script>

<template>
  <div class="min-h-screen flex flex-col">
    <NavBar />
    <main class="flex-grow">
      <router-view></router-view>
    </main>
  </div>
</template>
