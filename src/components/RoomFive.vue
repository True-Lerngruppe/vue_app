<script setup lang="ts">
const emit = defineEmits<{
  enableMenu: [];
}>();

function unlockMenu() {
  emit('enableMenu');
}
</script>

<template>
  <div class="room5-container">
    <button class="hidden-button" @click="unlockMenu" aria-label="Secret button" title="Secret button"></button>
    <h1>Welcome to Room 5</h1>
    <p>This is the fifth room of the escape room adventure.</p>
  </div>
</template>

<style scoped>
.room5-container {
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.hidden-button {
  position: fixed;
  top: 10px;
  right: 10px;
  width: 20px;
  height: 20px;
  background: transparent;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s ease;
  z-index: 100;
}

.hidden-button:hover {
  border-color: rgba(255, 255, 255, 0.7);
  background: rgba(255, 255, 255, 0.1);
}

.hidden-button:active {
  transform: scale(0.95);
}
</style>
