<script setup lang="ts">
import { ref } from 'vue'
import RoomOne from './RoomOne.vue'
import RoomTwo from './RoomTwo.vue'
import RoomThree from './RoomThree.vue'
import RoomFour from './RoomFour.vue'
import RoomFive from './RoomFive.vue'

const currentSlide = ref(0)
const slides = [
  { component: RoomOne },
  { component: RoomTwo },
  { component: RoomThree },
  { component: RoomFour },
  { component: RoomFive }
]

const nextSlide = () => {
  if (currentSlide.value < slides.length - 1) {
    currentSlide.value++
  }
}

const prevSlide = () => {
  if (currentSlide.value > 0) {
    currentSlide.value--
  }
}
</script>

<template>
  <div class="escape-room-container">
    <div class="slides-wrapper">
      <div
        v-for="(slide, index) in slides"
        :key="index"
        :class="['slide', {
          'active': index === currentSlide,
          'prev': index < currentSlide,
          'next': index > currentSlide
        }]"
      >
        <component :is="slide.component" />
      </div>
    </div>

    <div class="controls">
      <button
        @click="prevSlide"
        :disabled="currentSlide === 0"
        class="arrow-btn prev-btn"
      >
        ← Previous
      </button>

      <div class="slide-counter">
        {{ currentSlide + 1 }} / {{ slides.length }}
      </div>

      <button
        @click="nextSlide"
        :disabled="currentSlide === slides.length - 1"
        class="arrow-btn next-btn"
      >
        Next →
      </button>
    </div>
  </div>
</template>

<style scoped>
.escape-room-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  font-family: 'Arial', sans-serif;
  overflow: hidden;
  position: relative;
}

.slides-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1000px;
}

.slide {
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: inherit;
  padding: 60px 40px;
  text-align: center;
  transition: all 0.8s cubic-bezier(0.68, -0.55, 0.265, 1.55);
  opacity: 0;
  transform: translateX(100%) rotateY(45deg);
  pointer-events: none;
}

.slide.active {
  opacity: 1;
  transform: translateX(0) rotateY(0deg);
  pointer-events: auto;
  z-index: 10;
}

.slide.prev {
  opacity: 0;
  transform: translateX(-100%) rotateY(-45deg);
}

.slide.next {
  opacity: 0;
  transform: translateX(100%) rotateY(45deg);
}

.slide h1 {
  font-size: 3em;
  margin-bottom: 20px;
  color: #333;
}

.slide p {
  font-size: 1.5em;
  color: #666;
  line-height: 1.6;
}

.controls {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 30px;
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
}

.arrow-btn {
  padding: 12px 24px;
  font-size: 1em;
  background: rgba(255, 255, 255, 0.2);
  color: white;
  border: 2px solid white;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-weight: bold;
  min-width: 130px;
  backdrop-filter: blur(10px);
}

.arrow-btn:hover:not(:disabled) {
  background: rgba(255, 255, 255, 0.4);
  transform: scale(1.05);
  box-shadow: 0 5px 20px rgba(255, 255, 255, 0.3);
}

.arrow-btn:disabled {
  opacity: 0.3;
  cursor: not-allowed;
}

.slide-counter {
  font-size: 1.1em;
  color: white;
  font-weight: bold;
  min-width: 100px;
  text-align: center;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}
</style>
