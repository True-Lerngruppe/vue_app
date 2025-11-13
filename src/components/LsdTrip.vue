<script setup lang="ts">

</script>

<template>
  <div class="container">
    <h1>Trippy</h1>
    <p>
      There is something hidden here!
      Can you find it?
    </p>
  </div>
  <div class="animated-background"/>
</template>

<style scoped>
.animated-background {
  /* Make it cover the full viewport */
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: -1;
  /* Put it behind all content */
  animation: trip 5s ease-in-out infinite;
}

.container {
  color: black;
}

h1 {
  font-size: 5em;
  animation: wobble 1s ease-in-out infinite;
}

@keyframes trip {
  0% {
    background: red;
  }

  25% {
    background: blue;
  }

  50% {
    background: yellow;
  }

  75% {
    background: green;
  }

  100% {
    background: red;
  }
}

@keyframes wobble {
  0%    {transform: translateY(0px) rotate(0deg); }
  25%   {transform: translateY(-3px) rotate(3deg); }
  50%   {transform: translateY(0px) rotate(0deg); }
  75%   {transform: translateY(3px) rotate(-3deg); }
  100%  {transform: translateY(0px) rotate(0deg); }
}
</style>
