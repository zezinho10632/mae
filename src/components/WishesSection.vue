<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const sectionRef = ref(null)
const isVisible = ref(false)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true
  }
})

const wishes = [
  { icon: '💖', text: 'Muito amor' },
  { icon: '😄', text: 'Felicidade sem fim' },
  { icon: '🌟', text: 'Realizações' },
  { icon: '🏥', text: 'Saúde perfeita' },
  { icon: '💰', text: 'Prosperidade' },
  { icon: '🌈', text: 'Paz interior' },
  { icon: '✈️', text: 'Muitas viagens' },
  { icon: '🤗', text: 'Abraços apertados' },
  { icon: '🎁', text: 'Surpresas boas' },
  { icon: '☀️', text: 'Dias ensolarados' },
  { icon: '🦋', text: 'Leveza na vida' },
  { icon: '🌺', text: 'Beleza sempre' },
]
</script>

<template>
  <section 
    ref="sectionRef"
    class="py-16 px-4"
  >
    <div class="max-w-lg mx-auto">
      <!-- Section Title -->
      <div 
        class="text-center mb-10"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <span class="text-4xl mb-4 block">🌟</span>
        <h2 class="font-display text-3xl md:text-4xl text-foreground mb-2">
          Votos de Felicidade
        </h2>
        <p class="font-sans text-muted">Que este novo ano traga...</p>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Wishes Grid -->
      <div class="grid grid-cols-3 gap-3 mb-10">
        <div 
          v-for="(wish, index) in wishes"
          :key="index"
          class="bg-white/70 backdrop-blur-sm rounded-2xl p-4 text-center shadow-lg
                 transform hover:scale-105 transition-all duration-300 cursor-pointer
                 hover:bg-white/90"
          :class="{ 'animate-scale-in': isVisible }"
          :style="{ animationDelay: (100 + index * 50) + 'ms' }"
        >
          <span class="text-2xl mb-2 block">{{ wish.icon }}</span>
          <p class="font-sans text-foreground text-xs font-medium">{{ wish.text }}</p>
        </div>
      </div>

      <!-- Special Wish Card -->
      <div 
        class="glass rounded-3xl p-8 text-center glow"
        :class="{ 'animate-fade-in-up': isVisible }"
        :style="{ animationDelay: '800ms' }"
      >
        <div class="text-5xl mb-4 animate-heart-beat">💝</div>
        <p class="font-script text-3xl text-primary mb-4">
          Meu maior desejo como filho...
        </p>
        <p class="font-sans text-muted leading-relaxed">
          É poder retribuir pelo menos um pouquinho de tudo que você fez por mim. 
          Quero te ver feliz, saudável e realizada por muitos e muitos anos, mãe.
          Você merece todas as coisas boas desse mundo!
        </p>
        <div class="flex justify-center gap-2 mt-6">
          <span class="text-2xl">🌸</span>
          <span class="text-2xl">💕</span>
          <span class="text-2xl">🌸</span>
        </div>
      </div>

      <!-- Quote -->
      <blockquote 
        class="mt-10 text-center"
        :class="{ 'animate-fade-in-up': isVisible }"
        :style="{ animationDelay: '1000ms' }"
      >
        <p class="font-script text-2xl text-primary mb-2">
          "Mãe é sinônimo de amor, e você é a prova viva disso."
        </p>
        <footer class="font-sans text-muted text-sm">— Com todo amor do seu filho</footer>
      </blockquote>
    </div>
  </section>
</template>
