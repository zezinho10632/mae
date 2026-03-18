<script setup>
import { ref } from 'vue'
import confetti from 'canvas-confetti'

const hearts = ref(['💖', '💕', '💝', '💗', '💓'])
const currentHeartIndex = ref(0)

const cycleHeart = () => {
  currentHeartIndex.value = (currentHeartIndex.value + 1) % hearts.value.length
  
  confetti({
    particleCount: 20,
    spread: 50,
    origin: { y: 0.9 },
    colors: ['#D4A574', '#D4AF37', '#E8B4B8']
  })
}
</script>

<template>
  <footer class="py-16 px-4 bg-gradient-to-b from-accent/20 to-primary/20">
    <div class="max-w-lg mx-auto text-center">
      <!-- Final Message -->
      <div class="mb-8">
        <h2 class="font-script text-4xl md:text-5xl gradient-text mb-4">
          Feliz Aniversário!
        </h2>
        <p class="font-display text-2xl text-foreground mb-2">Monica</p>
        <p class="font-sans text-muted">18 de Março de 2026</p>
      </div>

      <!-- Animated Heart -->
      <button
        @click="cycleHeart"
        class="text-6xl mb-8 animate-heart-beat cursor-pointer
               hover:scale-110 transition-transform active:scale-95"
      >
        {{ hearts[currentHeartIndex] }}
      </button>

      <!-- Love Message -->
      <div class="glass rounded-2xl p-6 mb-8">
        <p class="font-script text-xl text-primary mb-2">
          Com todo amor do seu Nilsinho,
        </p>
        <p class="font-sans text-muted text-sm">
          Mãe, obrigado por ser exatamente quem você é. Por cada abraço, cada puxão de orelha
          e cada vez que você acreditou em mim antes de eu acreditar em mim mesmo.
          Que Deus te guarde sempre. Eu te amo demais!
        </p>
      </div>

      <!-- Decorative Elements -->
      <div class="flex justify-center items-center gap-4 mb-8">
        <span class="text-2xl animate-float">🎈</span>
        <span class="text-3xl animate-float-slow">🎂</span>
        <span class="text-2xl animate-float-slower">🎁</span>
        <span class="text-3xl animate-float">🎉</span>
        <span class="text-2xl animate-float-slow">🌸</span>
      </div>

      <!-- Copyright -->
      <p class="font-sans text-muted/60 text-xs">
        Feito com 💝 pelo seu filho Nilsinho, que te ama muito
      </p>
      <p class="font-sans text-muted/40 text-xs mt-2">
        53 anos da melhor mãe do mundo
      </p>
    </div>
  </footer>
</template>