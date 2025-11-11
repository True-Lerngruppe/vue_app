<script setup lang="ts">
import BurgerMenu from './components/BurgerMenu.vue'
</script>

<template>
  <header>
    <BurgerMenu>
      <RouterLink to="/svg_converter">Svg to svg converter</RouterLink>
      <RouterLink to="/funny_something">Patricks lustige idee</RouterLink>
    </BurgerMenu>
  </header>

  <main>
    <!-- Simple svg images with chonky AND fonky dwayne :) -->
    <!--FonkyDwayne/-->
    <!--ChonkyDwayne/-->
    <RouterView />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>
