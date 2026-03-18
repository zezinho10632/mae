<script setup>
import { ref } from 'vue'
import { useIntersectionObserver } from '@vueuse/core'

const emit = defineEmits(['blow-candles'])

const sectionRef = ref(null)
const isVisible = ref(false)
const candlesLit = ref(true)

useIntersectionObserver(sectionRef, ([{ isIntersecting }]) => {
  if (isIntersecting) {
    isVisible.value = true
  }
})

const blowCandles = () => {
  candlesLit.value = false
  emit('blow-candles')
  
  // Relight after a moment
  setTimeout(() => {
    candlesLit.value = true
  }, 3000)
}
</script>

<template>
  <section 
    ref="sectionRef"
    class="py-16 px-4 bg-gradient-to-b from-white/40 to-accent/20"
  >
    <div class="max-w-lg mx-auto text-center">
      <!-- Section Title -->
      <div 
        class="mb-8"
        :class="{ 'animate-fade-in-up': isVisible }"
      >
        <span class="text-4xl mb-4 block">🎂</span>
        <h2 class="font-display text-3xl md:text-4xl text-foreground mb-2">
          Hora do Bolo!
        </h2>
        <p class="font-sans text-muted">Mãe, faça um pedido e assopre as velinhas!</p>
      </div>

      <!-- Cake Illustration -->
      <div 
        class="relative inline-block mb-8"
        :class="{ 'animate-scale-in': isVisible }"
        :style="{ animationDelay: '300ms' }"
      >
        <!-- Cake Base -->
        <div class="relative">
          <!-- Candles Container -->
          <div class="flex justify-center gap-2 mb-2">
            <div 
              v-for="i in 5" 
              :key="i"
              class="relative"
            >
              <!-- Candle -->
              <div 
                class="w-3 h-12 rounded-t-full"
                :class="[
                  i % 2 === 0 ? 'bg-accent' : 'bg-primary'
                ]"
              ></div>
              <!-- Flame -->
              <div 
                v-if="candlesLit"
                class="absolute -top-4 left-1/2 -translate-x-1/2 w-4 h-6"
              >
                <div class="w-full h-full bg-gradient-to-t from-yellow-500 via-orange-400 to-yellow-300 
                            rounded-full animate-pulse opacity-90"
                     style="clip-path: ellipse(50% 70% at 50% 70%);"
                ></div>
              </div>
            </div>
          </div>

          <!-- Cake Layers -->
          <div class="relative">
            <!-- Frosting Top -->
            <div class="w-64 h-8 bg-white rounded-t-3xl mx-auto relative overflow-hidden">
              <div class="absolute inset-0 bg-gradient-to-b from-white to-gray-100"></div>
              <!-- Drip Effect -->
              <div class="absolute -bottom-2 left-4 w-4 h-6 bg-white rounded-b-full"></div>
              <div class="absolute -bottom-3 left-12 w-3 h-8 bg-white rounded-b-full"></div>
              <div class="absolute -bottom-2 right-8 w-5 h-5 bg-white rounded-b-full"></div>
              <div class="absolute -bottom-4 right-16 w-3 h-7 bg-white rounded-b-full"></div>
            </div>
            
            <!-- Top Layer -->
            <div class="w-64 h-16 bg-gradient-to-b from-pink-200 to-pink-300 mx-auto relative">
              <div class="absolute inset-x-0 top-0 h-2 bg-pink-100/50"></div>
            </div>
            
            <!-- Middle Frosting -->
            <div class="w-72 h-6 bg-white mx-auto relative">
              <div class="absolute -bottom-1 left-6 w-3 h-4 bg-white rounded-b-full"></div>
              <div class="absolute -bottom-2 left-16 w-4 h-5 bg-white rounded-b-full"></div>
              <div class="absolute -bottom-1 right-10 w-3 h-4 bg-white rounded-b-full"></div>
            </div>
            
            <!-- Bottom Layer -->
            <div class="w-72 h-20 bg-gradient-to-b from-primary/80 to-primary mx-auto rounded-b-lg relative overflow-hidden">
              <div class="absolute inset-x-0 top-0 h-2 bg-primary/50"></div>
              <!-- Decorations -->
              <div class="absolute bottom-3 left-4 w-2 h-2 bg-gold rounded-full"></div>
              <div class="absolute bottom-5 left-10 w-2 h-2 bg-accent rounded-full"></div>
              <div class="absolute bottom-3 right-6 w-2 h-2 bg-gold rounded-full"></div>
              <div class="absolute bottom-6 right-14 w-2 h-2 bg-accent rounded-full"></div>
            </div>
            
            <!-- Plate -->
            <div class="w-80 h-4 bg-gradient-to-b from-gray-200 to-gray-300 mx-auto rounded-b-full mt-1"></div>
          </div>
        </div>

        <!-- Sparkles around cake -->
        <div class="absolute -top-2 -left-4 text-xl animate-sparkle">✨</div>
        <div class="absolute -top-2 -right-4 text-xl animate-sparkle delay-300">✨</div>
        <div class="absolute top-1/2 -left-8 text-lg animate-sparkle delay-500">⭐</div>
        <div class="absolute top-1/2 -right-8 text-lg animate-sparkle delay-700">⭐</div>
      </div>

      <!-- Age Display -->
      <div 
        class="mb-8"
        :class="{ 'animate-fade-in-up': isVisible }"
        :style="{ animationDelay: '500ms' }"
      >
        <p class="font-script text-5xl gradient-text mb-2">53</p>
        <p class="font-sans text-muted">anos maravilhosos!</p>
      </div>

      <!-- Blow Button -->
      <button
        @click="blowCandles"
        class="px-8 py-4 bg-gradient-to-r from-accent to-primary text-white 
               rounded-full font-medium text-lg shadow-xl hover:shadow-2xl 
               transform hover:scale-105 transition-all duration-300"
        :class="{ 'animate-fade-in-up': isVisible }"
        :style="{ animationDelay: '700ms' }"
        :disabled="!candlesLit"
      >
        <span v-if="candlesLit">Assoprar Velinhas 💨</span>
        <span v-else>Pedido Feito! ✨</span>
      </button>

      <!-- Birthday Song Hint -->
      <p 
        class="mt-6 font-sans text-muted text-sm italic"
        :class="{ 'animate-fade-in-up': isVisible }"
        :style="{ animationDelay: '900ms' }"
      >
        Eu cantaria parabéns pra você o dia inteiro, mãe!
      </p>
    </div>
  </section>
</template>
