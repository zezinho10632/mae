<script setup>
import { ref, onMounted } from 'vue'
import confetti from 'canvas-confetti'
import HeroSection from './components/HeroSection.vue'
import MessageSection from './components/MessageSection.vue'
import GallerySection from './components/GallerySection.vue'
import WishesSection from './components/WishesSection.vue'
import CakeSection from './components/CakeSection.vue'
import FooterSection from './components/Footer.vue'
import FloatingElements from './components/FloatingElements.vue'

const showContent = ref(false)
const hasStarted = ref(false)
const isVisible = ref(false)

const launchConfetti = () => {
  const duration = 5 * 1000
  const animationEnd = Date.now() + duration
  const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 100 }

  const randomInRange = (min, max) => Math.random() * (max - min) + min

  const interval = setInterval(() => {
    const timeLeft = animationEnd - Date.now()

    if (timeLeft <= 0) {
      return clearInterval(interval)
    }

    const particleCount = 50 * (timeLeft / duration)

    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      colors: ['#D4A574', '#D4AF37', '#E8B4B8', '#F5E6D3', '#fff']
    })
    confetti({
      ...defaults,
      particleCount,
      origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      colors: ['#D4A574', '#D4AF37', '#E8B4B8', '#F5E6D3', '#fff']
    })
  }, 250)
}

const startCelebration = () => {
  hasStarted.value = true
  launchConfetti()
  setTimeout(() => {
    showContent.value = true
  }, 500)
}

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})
</script>

<template>
  <div class="min-h-screen relative overflow-hidden">
    <!-- Initial Screen -->
    <Transition name="fade">
      <div 
        v-if="!hasStarted"
        class="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-background via-secondary to-accent/20"
      >
        <div class="text-center px-6">
          <div 
            class="text-6xl md:text-8xl mb-6 animate-bounce-slow"
            :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
            style="transition: opacity 0.5s ease"
          >
            🎁
          </div>
          <p 
            class="font-sans text-muted/80 mb-2 text-sm uppercase tracking-widest transition-all duration-500"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
            :style="{ transitionDelay: '200ms' }"
          >
            Para a melhor mae do mundo
          </p>
          <h1 
            class="font-script text-4xl md:text-6xl text-primary mb-4 transition-all duration-500"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
            :style="{ transitionDelay: '400ms' }"
          >
            Mae, isso e pra voce!
          </h1>
          <p 
            class="font-sans text-muted mb-8 text-lg transition-all duration-500"
            :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-4': !isVisible }"
            :style="{ transitionDelay: '600ms' }"
          >
            Com amor, do seu filho
          </p>
          <button
            @click="startCelebration"
            class="px-8 py-4 bg-primary text-white rounded-full font-medium text-lg
                   shadow-lg hover:shadow-xl transform hover:scale-105 transition-all
                   duration-300 animate-pulse-glow"
            :class="{ 'opacity-100 scale-100': isVisible, 'opacity-0 scale-90': !isVisible }"
            :style="{ transitionDelay: '800ms' }"
          >
            Abrir Presente
          </button>
        </div>
      </div>
    </Transition>

    <!-- Main Content -->
    <div v-if="hasStarted" class="relative">
      <FloatingElements />
      
      <Transition name="slide-up">
        <div v-if="showContent">
          <HeroSection @celebrate="launchConfetti" />
          <MessageSection />
          <GallerySection />
          <CakeSection @blow-candles="launchConfetti" />
          <WishesSection />
          <FooterSection />
        </div>
      </Transition>
    </div>
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.slide-up-enter-active {
  transition: all 0.8s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}
</style>
