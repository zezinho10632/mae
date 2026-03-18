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

const messages = [
  {
    icon: '💝',
    title: 'Meu Primeiro Amor',
    text: 'Mãe, você foi meu primeiro amor e sempre será o maior. Obrigado por cada noite mal dormida cuidando de mim, cada lágrima enxugada e cada sorriso que arrancou de mim.'
  },
  {
    icon: '🌟',
    title: 'Minha Heroína',
    text: 'Você é minha heroína, mãe! Vi você enfrentar tantas batalhas e nunca desistir. Sua força me ensinou a levantar sempre, não importa quantas vezes eu caia.'
  },
  {
    icon: '🏡',
    title: 'Meu Lar é Você',
    text: 'Não importa onde eu esteja no mundo, meu lar sempre será onde você estiver. Seu abraço é meu refúgio e seu colo ainda é meu lugar favorito.'
  }
]
</script>

<template>
  <section 
    ref="sectionRef"
    class="py-16 px-4 bg-white/40 backdrop-blur-sm"
  >
    <div class="max-w-lg mx-auto">
      <!-- Section Title -->
      <div 
        class="text-center mb-12"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <span class="text-4xl mb-4 block">💌</span>
        <h2 class="font-display text-3xl md:text-4xl text-foreground mb-2">
          Carta do Seu Filho
        </h2>
        <div class="w-20 h-1 bg-gradient-to-r from-primary to-gold mx-auto rounded-full"></div>
      </div>

      <!-- Main Message Card -->
      <div 
        class="glass rounded-3xl p-8 mb-8 text-center glow"
        :class="{ 'animate-scale-in': isVisible }"
        :style="{ animationDelay: '200ms' }"
      >
        <p class="font-sans text-foreground text-lg leading-relaxed mb-6">
          Mãezinha querida, <span class="font-script text-2xl text-primary">Monica</span>,
        </p>
        <p class="font-sans text-muted leading-relaxed mb-4">
          Hoje você completa 53 anos e eu não poderia deixar de dizer o quanto você é 
          importante pra mim. Desde pequeno, você sempre foi minha proteção, minha guia e meu maior exemplo.
        </p>
        <p class="font-sans text-muted leading-relaxed mb-4">
          Obrigado por tudo que você fez e faz por mim. Por cada sacrifício, cada conselho, 
          cada bronca que me fez crescer. Eu sou quem sou graças a você, mãe.
        </p>
        <p class="font-sans text-muted leading-relaxed mb-4">
          Que Deus te abençoe muito e te dê muitos anos de vida com saúde para que eu possa 
          continuar tendo o privilégio de te chamar de MÃE.
        </p>
        <p class="font-script text-2xl text-primary mt-6">
          Te amo demais, mãe! 💕
        </p>
      </div>

      <!-- Message Cards -->
      <div class="space-y-6">
        <div 
          v-for="(message, index) in messages"
          :key="index"
          class="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg
                 transform hover:scale-[1.02] transition-all duration-300"
          :class="{ 'animate-fade-in-up': isVisible }"
          :style="{ animationDelay: (400 + index * 150) + 'ms' }"
        >
          <div class="flex items-start gap-4">
            <span class="text-3xl flex-shrink-0">{{ message.icon }}</span>
            <div>
              <h3 class="font-display text-xl text-foreground mb-2">
                {{ message.title }}
              </h3>
              <p class="font-sans text-muted text-sm leading-relaxed">
                {{ message.text }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
