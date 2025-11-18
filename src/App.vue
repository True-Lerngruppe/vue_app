<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router';
import { ref, watch } from 'vue';
import BurgerMenu from './components/BurgerMenu.vue'

const route = useRoute();
const isMenuEnabled = ref(true);

// Disable menu when on escape room route
watch(() => route.path, (newPath) => {
  if (newPath === '/escape_room') {
    isMenuEnabled.value = false;
  }
});

const handleEnableMenu = () => {
  isMenuEnabled.value = true;
};
</script>

<template>
  <BurgerMenu :is-enabled="isMenuEnabled">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/svg_converter">Svg to svg converter</RouterLink>
    <RouterLink to="/impressum">Impressum</RouterLink>
    <RouterLink to="/funny_something">Patricks lustige idee</RouterLink>
    <RouterLink to="/trippy">Go for a trip</RouterLink>
    <RouterLink to="/escape_room">Escape Room</RouterLink>
  </BurgerMenu>

  <main>
    <RouterView @enable-menu="handleEnableMenu" />
  </main>
</template>

<style scoped>
main {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}
</style>
