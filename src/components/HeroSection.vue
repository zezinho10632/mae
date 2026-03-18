<script setup>
import { ref, onMounted } from 'vue'

const emit = defineEmits(['celebrate'])
const isVisible = ref(false)

onMounted(() => {
  setTimeout(() => {
    isVisible.value = true
  }, 100)
})

const celebrate = () => {
  emit('celebrate')
}
</script>

<template>
  <section class="min-h-screen flex items-center justify-center px-4 py-12 relative">
    <div class="text-center max-w-lg mx-auto">
      <!-- Age Badge -->
      <div
        class="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-6 py-2 
               rounded-full mb-6 shadow-lg transition-all duration-700"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 -translate-y-5': !isVisible }"
        :style="{ transitionDelay: '200ms' }"
      >
        <span class="text-2xl">✨</span>
        <span class="font-display text-primary font-semibold">53 Anos de Vida</span>
        <span class="text-2xl">✨</span>
      </div>

      <!-- Main Title -->
      <h1 
        class="font-script text-5xl md:text-7xl gradient-text mb-4 leading-tight transition-all duration-700"
        :class="{ 'opacity-100 scale-100': isVisible, 'opacity-0 scale-90': !isVisible }"
        :style="{ transitionDelay: '400ms' }"
      >
        Feliz Aniversario
      </h1>

      <!-- Name -->
      <h2 
        class="font-display text-6xl md:text-8xl text-foreground mb-6 tracking-wide transition-all duration-700"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-8': !isVisible }"
        :style="{ transitionDelay: '600ms' }"
      >
        Monica
      </h2>

      <!-- Decorative Hearts -->
      <div 
        class="flex justify-center gap-4 text-4xl mb-8 transition-all duration-700"
        :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
        :style="{ transitionDelay: '800ms' }"
      >
        <span class="animate-heart-beat">💖</span>
        <span class="animate-heart-beat" style="animation-delay: 200ms">💝</span>
        <span class="animate-heart-beat" style="animation-delay: 400ms">💖</span>
      </div>

      <!-- Subtitle -->
      <p 
        class="font-sans text-muted text-lg md:text-xl mb-8 leading-relaxed transition-all duration-700"
        :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
        :style="{ transitionDelay: '1000ms' }"
      >
        Mae, hoje e o seu dia!<br>
        Celebro a mulher mais importante da minha vida.
      </p>

      <!-- CTA Button -->
      <button
        @click="celebrate"
        class="px-8 py-4 bg-gradient-to-r from-primary to-gold text-white 
               rounded-full font-medium text-lg shadow-xl hover:shadow-2xl 
               transform hover:scale-105 transition-all duration-300"
        :class="{ 'opacity-100 translate-y-0': isVisible, 'opacity-0 translate-y-5': !isVisible }"
        :style="{ transitionDelay: '1200ms' }"
      >
        Soltar Confetes 🎉
      </button>

      <!-- Scroll Indicator -->
      <div 
        class="absolute bottom-8 left-1/2 -translate-x-1/2 text-muted animate-bounce transition-all duration-700"
        :class="{ 'opacity-100': isVisible, 'opacity-0': !isVisible }"
        :style="{ transitionDelay: '1500ms' }"
      >
        <svg class="w-6 h-6 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3"/>
        </svg>
        <span class="text-sm">Role para baixo</span>
      </div>
    </div>

    <!-- Background Decoration -->
    <div class="absolute top-10 left-10 text-6xl opacity-20 animate-float">🎈</div>
    <div class="absolute top-20 right-10 text-5xl opacity-20 animate-float-slow">🎀</div>
    <div class="absolute bottom-32 left-5 text-4xl opacity-20 animate-float-slower">🌸</div>
    <div class="absolute bottom-40 right-8 text-5xl opacity-20 animate-float">🎂</div>
  </section>
</template>
