<script setup>
import { ref, onMounted } from 'vue'

const balloons = ref([])
const hearts = ref([])

onMounted(() => {
  const colors = ['#D4A574', '#E8B4B8', '#D4AF37', '#F5E6D3', '#B8860B']
  
  for (let i = 0; i < 8; i++) {
    balloons.value.push({
      id: i,
      color: colors[Math.floor(Math.random() * colors.length)],
      left: Math.random() * 100,
      delay: Math.random() * 3,
      duration: 3 + Math.random() * 2,
      size: 30 + Math.random() * 20
    })
  }

  for (let i = 0; i < 6; i++) {
    hearts.value.push({
      id: i,
      left: Math.random() * 100,
      delay: Math.random() * 4,
      duration: 4 + Math.random() * 2,
      size: 16 + Math.random() * 12
    })
  }
})
</script>

<template>
  <div class="fixed inset-0 pointer-events-none overflow-hidden z-10">
    <!-- Balloons -->
    <div
      v-for="balloon in balloons"
      :key="'balloon-' + balloon.id"
      class="absolute bottom-0 balloon-container"
      :style="{
        left: balloon.left + '%',
        animation: `floatUp ${balloon.duration}s ease-in-out infinite`,
        animationDelay: balloon.delay + 's'
      }"
    >
      <div 
        class="balloon"
        :style="{
          backgroundColor: balloon.color,
          width: balloon.size + 'px',
          height: balloon.size * 1.25 + 'px'
        }"
      ></div>
    </div>

    <!-- Floating Hearts -->
    <div
      v-for="heart in hearts"
      :key="'heart-' + heart.id"
      class="absolute"
      :style="{
        left: heart.left + '%',
        top: (20 + Math.random() * 60) + '%',
        animation: `heartFloat ${heart.duration}s ease-in-out infinite`,
        animationDelay: heart.delay + 's',
        fontSize: heart.size + 'px',
        opacity: 0.6
      }"
    >
      💕
    </div>

    <!-- Sparkles -->
    <div
      v-for="i in 12"
      :key="'sparkle-' + i"
      class="sparkle-dot"
      :style="{
        left: (Math.random() * 100) + '%',
        top: (Math.random() * 100) + '%',
        animationDelay: (Math.random() * 2) + 's',
        width: (6 + Math.random() * 8) + 'px',
        height: (6 + Math.random() * 8) + 'px'
      }"
    ></div>
  </div>
</template>

<style scoped>
.balloon-container {
  will-change: transform;
}

.balloon {
  position: relative;
  border-radius: 50% 50% 50% 50% / 40% 40% 60% 60%;
  opacity: 0.7;
}

.balloon::after {
  content: '';
  position: absolute;
  bottom: -30px;
  left: 50%;
  width: 1px;
  height: 30px;
  background: #8B7355;
  transform: translateX(-50%);
}

.sparkle-dot {
  position: absolute;
  background: radial-gradient(circle, #D4AF37 0%, transparent 70%);
  border-radius: 50%;
  animation: sparkleAnim 1.5s ease-in-out infinite;
}

@keyframes floatUp {
  0%, 100% {
    transform: translateY(0px) rotate(-5deg);
  }
  50% {
    transform: translateY(-20px) rotate(5deg);
  }
}

@keyframes heartFloat {
  0%, 100% {
    transform: translateY(0) rotate(-5deg);
  }
  50% {
    transform: translateY(-15px) rotate(5deg);
  }
}

@keyframes sparkleAnim {
  0%, 100% {
    opacity: 1;
    transform: scale(1);
  }
  50% {
    opacity: 0.5;
    transform: scale(1.2);
  }
}
</style>
