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
    text: 'Mãe, antes de entender qualquer coisa da vida, eu já sabia que te amava. Você foi meu primeiro lar, minha primeira segurança. Tudo que sou começou em você.'
  },
  {
    icon: '🌟',
    title: 'Minha Força',
    text: 'Eu te vi carregar o peso do mundo nos ombros sem reclamar. Te vi sorrir quando estava cansada, só pra me ver bem. Aprendi com você que amor de verdade é ação, todo dia.'
  },
  {
    icon: '🏡',
    title: 'Onde Eu Sempre Volto',
    text: 'Não importa o que a vida trouxer, você sempre vai ser meu ponto de volta. Seu abraço ainda é o lugar mais seguro que eu conheço, e sempre vai ser.'
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
          Minha <span class="font-script text-2xl text-primary">Mãe</span>, minha Monica,
        </p>
        <p class="font-sans text-muted leading-relaxed mb-4">
          Hoje você faz 53 anos e eu só consigo pensar em quanto eu tenho sorte de ser seu filho.
          Não é fácil colocar em palavras tudo que você representa pra mim, mas hoje eu preciso tentar.
        </p>
        <p class="font-sans text-muted leading-relaxed mb-4">
          Você me criou com tanto amor que eu aprendi, só de te observar, como se trata as pessoas,
          como se mantém de pé nas horas difíceis e como se doa de verdade por quem a gente ama.
        </p>
        <p class="font-sans text-muted leading-relaxed mb-4">
          Cada esforço que você fez por mim, eu guardo aqui dentro. E eu peço a Deus todo dia
          que te dê saúde, paz e muita alegria — porque você merece tudo de bom que existe nessa vida.
        </p>
        <p class="font-script text-2xl text-primary mt-6">
          Te amo muito, mãe. Do seu Nilsinho. 💕
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