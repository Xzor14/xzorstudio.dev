<template>
  <section class="relative z-10 py-24 px-6 md:px-10 overflow-hidden" 
           :class="isDark ? 'bg-gradient-to-b from-transparent to-cyan-900/10' : 'bg-[#F5F0E6]'">
    
    <div class="max-w-7xl mx-auto">
      <div class="text-center mb-20 opacity-0 translate-y-10 step-header">
         <h3 class="text-3xl md:text-5xl font-serif mb-4" :class="isDark ? 'text-white' : 'text-[#2C2725]'">Cara Pemesanan</h3>
      </div>

      <div class="flex flex-col md:flex-row gap-12 md:gap-4 items-start justify-between relative">
        
        <div class="hidden md:block absolute top-12 left-20 right-20 h-[2px] z-0 overflow-hidden"
             :class="isDark ? 'bg-white/10' : 'bg-[#D6D0C4]'">
           <div class="absolute top-0 left-0 h-full w-full bg-cyan-400 origin-left scale-x-0 animate-line-connect"></div>
        </div>

        <div v-for="(step, i) in steps" :key="i" class="step-item relative z-10 flex flex-col items-center text-center opacity-0 translate-y-10 w-full md:w-1/3 group">
          
          <div class="w-24 h-24 rounded-full flex items-center justify-center text-4xl font-serif font-bold mb-8 border-4 shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-12 bg-clip-padding backdrop-filter backdrop-blur-sm"
               :class="isDark ? 'bg-black/60 border-cyan-500 text-cyan-400 shadow-[0_0_30px_rgba(0,201,255,0.2)]' : 'bg-white border-[#BDB7B1] text-[#5C5552]'">
            {{ i + 1 }}
          </div>
          
          <h4 class="text-xl font-bold mb-3 uppercase tracking-widest" :class="isDark ? 'text-white' : 'text-[#2C2725]'">
            {{ step.title }}
          </h4>
          <p class="text-sm max-w-xs opacity-70 leading-relaxed" :class="isDark ? 'text-cyan-100' : 'text-[#8A817C]'">
            {{ step.desc }}
          </p>
        </div>

      </div>
      
      <div class="text-center mt-20 step-cta opacity-0 scale-90">
        <button @click="$emit('cta-click')" 
                class="px-12 py-5 rounded-full font-bold tracking-[0.2em] transition-all hover:scale-105 border-2 hover:shadow-lg"
                :class="isDark ? 'border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black shadow-[0_0_20px_rgba(0,201,255,0.2)]' : 'border-[#5C5552] text-[#5C5552] hover:bg-[#5C5552] hover:text-white'">
          MULAI SEKARANG
        </button>
      </div>

    </div>
  </section>
</template>

<script setup>
import { onMounted } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
defineProps({ isDark: Boolean })
defineEmits(['cta-click'])

const steps = [
  { title: 'Pilih Tema', desc: 'Jelajahi katalog kami dan pilih desain yang paling sesuai dengan karakter Anda.' },
  { title: 'Kirim Data', desc: 'Isi formulir data mempelai, lokasi, dan galeri foto. Kami yang akan input untuk Anda.' },
  { title: 'Siap Sebar', desc: 'Dalam < 24 jam, undangan digital Anda sudah aktif dan siap dibagikan ke tamu.' }
]

onMounted(() => {
  const tl = gsap.timeline({
    scrollTrigger: { trigger: '.step-item', start: 'top 80%' }
  })
  tl.to('.step-header', { y: 0, opacity: 1, duration: 0.8 })
  tl.to('.animate-line-connect', { scaleX: 1, duration: 1.5, ease: 'power2.out' }, '-=0.5')
  tl.to('.step-item', { y: 0, opacity: 1, duration: 1, stagger: 0.3, ease: 'power3.out' }, '-=1.2')
  tl.to('.step-cta', { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(2)' }, '-=0.5')
})
</script>

<style scoped>
/* Animasi garis berjalan manual jika GSAP gagal */
.animate-line-connect {
    transition: transform 1.5s ease-out;
}
</style>

