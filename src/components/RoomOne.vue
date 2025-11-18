<script setup lang="ts">
import { ref, computed, watch } from 'vue'

const userInput = ref('')
const isCorrect = ref(false)
const snoopDogTime = ref(0)
const snoopDogTimerId = ref<number | null>(null)
const showBoom = ref(false)
const boomTimerId = ref<number | null>(null)
const showSnoopDog = computed(() => userInput.value === '420')

const emit = defineEmits<{
  'puzzle-solved': []
}>()

const checkAnswer = () => {
  isCorrect.value = userInput.value === '69'
  if (isCorrect.value) {
    emit('puzzle-solved')
  }
}

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  userInput.value = target.value
  checkAnswer()
}

// Watch for when 420 is entered
watch(showSnoopDog, (newVal) => {
  if (newVal) {
    snoopDogTime.value = 0
    showBoom.value = false
    snoopDogTimerId.value = window.setInterval(() => {
      snoopDogTime.value += 0.1
      if (snoopDogTime.value >= 10) {
        snoopDogTime.value = 10
        if (snoopDogTimerId.value) {
          clearInterval(snoopDogTimerId.value)
          snoopDogTimerId.value = null
        }
        // Show boom animation
        showBoom.value = true
        // Hide boom after 1 second
        boomTimerId.value = window.setTimeout(() => {
          showBoom.value = false
          // Emit puzzle-solved after boom disappears
          emit('puzzle-solved')
        }, 1000)
      }
    }, 100)
  } else {
    if (snoopDogTimerId.value) {
      clearInterval(snoopDogTimerId.value)
      snoopDogTimerId.value = null
    }
    if (boomTimerId.value) {
      clearTimeout(boomTimerId.value)
      boomTimerId.value = null
    }
    snoopDogTime.value = 0
    showBoom.value = false
  }
})

const bounceIntensity = computed(() => {
  return Math.min(1 + (snoopDogTime.value / 10) * 3, 4)
})

const showSnoopDogImages = computed(() => {
  return showSnoopDog.value && snoopDogTime.value < 10
})

const showFunnyMessage = computed(() => {
  return showSnoopDog.value && snoopDogTime.value >= 10
})
</script>

<template>
  <div class="room1-container">
    <h1>Welcome to Room 1</h1>
    <p>This is the first room of the escape room adventure.</p>

    <div v-if="showSnoopDogImages" class="snoop-dog-container">
      <img
        src="/images/SnoopDog.gif"
        alt="Snoop Dog"
        class="snoop-dog left"
        :style="{ animationDuration: `${1 / bounceIntensity}s` }"
      />
      <img
        src="/images/SnoopDog.gif"
        alt="Snoop Dog"
        class="snoop-dog right"
        :style="{ animationDuration: `${1 / bounceIntensity}s` }"
      />
    </div>

    <div v-if="showBoom" class="boom-container">
      <img
        src="/images/Boom.gif"
        alt="Boom"
        class="boom left"
      />
      <img
        src="/images/Boom.gif"
        alt="Boom"
        class="boom right"
      />
    </div>

    <div class="puzzle-section">
      <h2>Enter the most funniest number</h2>
      <input
        type="text"
        :value="userInput"
        @input="handleInput"
        placeholder="Enter a number..."
        class="entry-field"
      />
      <p v-if="isCorrect" class="success-message">Correct! You can proceed to the next room.</p>
      <p v-else-if="showFunnyMessage" class="funny-message">Okay, the number is really funny, now that I think about it.</p>
      <p v-else-if="userInput && !isCorrect" class="error-message">Wrong number, try again!</p>
    </div>
  </div>
</template>

<style scoped>
.room1-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  position: relative;
}

h1 {
  font-size: 2.5em;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.9);
}

.snoop-dog-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  gap: 20px;
  pointer-events: none;
}

.snoop-dog {
  height: 150px;
  width: auto;
  animation: bounce 1s infinite;
}

.snoop-dog.left {
  transform: scaleX(1);
}

.snoop-dog.right {
  transform: scaleX(-1);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-30px);
  }
}

.boom-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  gap: 20px;
  pointer-events: none;
}

.boom {
  height: 150px;
  width: auto;
  animation: fadeInOut 1s ease-in-out forwards;
}

.boom.left {
  transform: scaleX(1);
}

.boom.right {
  transform: scaleX(-1);
}

@keyframes fadeInOut {
  0% {
    opacity: 1;
    transform: scale(0.8);
  }
  50% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(1.1);
  }
}

.puzzle-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
}

h2 {
  font-size: 1.8em;
  color: white;
  margin: 0;
}

.entry-field {
  padding: 12px 20px;
  font-size: 1.2em;
  border: 2px solid white;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  text-align: center;
  transition: all 0.3s ease;
}

.entry-field:focus {
  outline: none;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  background: white;
}

.success-message {
  color: #90EE90;
  font-weight: bold;
  font-size: 1.1em;
  text-shadow: 0 0 10px rgba(144, 238, 144, 0.5);
}

.error-message {
  color: #FF6B6B;
  font-weight: bold;
  font-size: 1.1em;
}

.funny-message {
  color: #90EE90;
  font-weight: bold;
  font-size: 1.1em;
  text-shadow: 0 0 10px rgba(144, 238, 144, 0.5);
}
</style>

<style scoped>
.room1-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 30px;
  position: relative;
}

h1 {
  font-size: 2.5em;
  color: white;
  text-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
}

p {
  font-size: 1.2em;
  color: rgba(255, 255, 255, 0.9);
}

.snoop-dog-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 0 40px;
  gap: 20px;
  pointer-events: none;
}

.snoop-dog {
  height: 150px;
  width: auto;
  animation: bounce 1s infinite;
  transition: transform 0.1s linear;
}

.snoop-dog.left {
  transform: scaleX(1);
}

.snoop-dog.right {
  animation: bounce 1s infinite;
  transform: scaleX(-1);
}

@keyframes bounce {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

.puzzle-section {
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 30px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 2px solid rgba(255, 255, 255, 0.2);
  z-index: 10;
}

h2 {
  font-size: 1.8em;
  color: white;
  margin: 0;
}

.entry-field {
  padding: 12px 20px;
  font-size: 1.2em;
  border: 2px solid white;
  border-radius: 8px;
  background: rgba(255, 255, 255, 0.95);
  color: #333;
  text-align: center;
  transition: all 0.3s ease;
}

.entry-field:focus {
  outline: none;
  box-shadow: 0 0 15px rgba(255, 255, 255, 0.5);
  background: white;
}

.success-message {
  color: #90EE90;
  font-weight: bold;
  font-size: 1.1em;
  text-shadow: 0 0 10px rgba(144, 238, 144, 0.5);
}

.error-message {
  color: #FF6B6B;
  font-weight: bold;
  font-size: 1.1em;
}

.funny-message {
  color: #90EE90;
  font-weight: bold;
  font-size: 1.1em;
  text-shadow: 0 0 10px rgba(144, 238, 144, 0.5);
}
</style>

