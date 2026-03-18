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

const memories = [
  { year: '1973', title: 'Nascimento', icon: '👶', description: 'Chegou ao mundo a pessoa que seria minha mãe' },
  { year: '---', title: 'Virou Mãe', icon: '🤱', description: 'O dia mais feliz da sua vida: eu nasci!' },
  { year: '---', title: 'Meu Crescimento', icon: '👨‍👩‍👦', description: 'Você me ensinou tudo que sei' },
  { year: '---', title: 'Minha Guerreira', icon: '💪', description: 'Superou todas as dificuldades por mim' },
  { year: '---', title: 'Melhor Amiga', icon: '🤗', description: 'Além de mãe, minha confidente' },
  { year: '2026', title: '53 Anos', icon: '🎂', description: 'Celebrando a melhor mãe do mundo!' },
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
        class="text-center mb-12"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <span class="text-4xl mb-4 block">📷</span>
        <h2 class="font-display text-3xl md:text-4xl text-foreground mb-2">
          Nossa História
        </h2>
        <p class="font-sans text-muted">A jornada de uma mãe incrível</p>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full mt-4"></div>
      </div>

      <!-- Timeline -->
      <div class="relative">
        <!-- Timeline Line -->
        <div class="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-gold to-accent"></div>

        <!-- Timeline Items -->
        <div class="space-y-8">
          <div 
            v-for="(memory, index) in memories"
            :key="index"
            class="relative pl-16"
            :class="{ 'animate-fade-in-up': isVisible }"
            :style="{ animationDelay: (200 + index * 150) + 'ms' }"
          >
            <!-- Timeline Dot -->
            <div 
              class="absolute left-3 w-7 h-7 bg-white rounded-full border-4 border-primary 
                     flex items-center justify-center shadow-lg z-10"
            >
              <span class="text-xs">{{ memory.icon }}</span>
            </div>

            <!-- Content Card -->
            <div 
              class="bg-white/80 backdrop-blur-sm rounded-2xl p-5 shadow-lg
                     transform hover:scale-[1.02] transition-all duration-300"
            >
              <div class="flex items-center gap-3 mb-2">
                <span 
                  class="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-semibold"
                >
                  {{ memory.year }}
                </span>
                <h3 class="font-display text-lg text-foreground">
                  {{ memory.title }}
                </h3>
              </div>
              <p class="font-sans text-muted text-sm">
                {{ memory.description }}
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Fun Fact Card -->
      <div 
        class="mt-12 glass rounded-3xl p-6 text-center"
        :class="{ 'animate-scale-in': isVisible }"
        :style="{ animationDelay: '1200ms' }"
      >
        <span class="text-3xl mb-4 block">🎯</span>
        <h3 class="font-display text-xl text-foreground mb-4">Você Sabia?</h3>
        <div class="grid grid-cols-2 gap-4">
          <div class="bg-white/50 rounded-xl p-4">
            <p class="font-display text-3xl text-primary">19.358</p>
            <p class="font-sans text-muted text-xs">dias de vida</p>
          </div>
          <div class="bg-white/50 rounded-xl p-4">
            <p class="font-display text-3xl text-primary">464.592</p>
            <p class="font-sans text-muted text-xs">horas vividas</p>
          </div>
          <div class="bg-white/50 rounded-xl p-4">
            <p class="font-display text-3xl text-primary">636</p>
            <p class="font-sans text-muted text-xs">meses de amor</p>
          </div>
          <div class="bg-white/50 rounded-xl p-4">
            <p class="font-display text-3xl text-primary">∞</p>
            <p class="font-sans text-muted text-xs">de amor pra dar</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
