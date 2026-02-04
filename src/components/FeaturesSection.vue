<template>
  <section class="relative z-10 py-24 px-6 md:px-10 overflow-hidden perspective-container">
    
    <div v-if="isDark" class="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>

    <div class="max-w-4xl mx-auto text-center mb-20 feature-header opacity-0 translate-y-10">
      <h3 class="text-3xl md:text-5xl font-serif mb-4" :class="isDark ? 'text-white' : 'text-[#2C2725]'">
        Fitur Premium
      </h3>
      <div class="h-[1px] w-24 mx-auto mb-6 bg-gradient-to-r from-transparent via-cyan-400 to-transparent"></div>
      <p class="opacity-70 max-w-xl mx-auto text-sm md:text-base" :class="isDark ? 'text-cyan-100' : 'text-[#8A817C]'">
        Teknologi undangan digital terlengkap untuk kenyamanan tamu Anda.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
      <div v-for="(feature, index) in features" :key="index" 
           class="feature-card group p-8 rounded-3xl border transition-all duration-500 hover:-translate-y-2 opacity-0 translate-y-20 relative overflow-hidden"
           :class="isDark ? 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-cyan-400/30' : 'bg-white border-[#E5E0D8] shadow-lg hover:shadow-xl'">
        
        <div class="absolute inset-0 bg-gradient-to-br from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

        <div class="w-16 h-16 rounded-2xl flex items-center justify-center text-3xl mb-6 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 relative z-10"
             :class="isDark ? 'bg-gradient-to-br from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-white/5' : 'bg-[#FEF9F2] border border-[#E5E0D8] text-[#5C5552]'">
          {{ feature.icon }}
        </div>

        <h4 class="text-xl font-bold mb-3 relative z-10" :class="isDark ? 'text-white' : 'text-[#2C2725]'">
          {{ feature.title }}
        </h4>
        <p class="text-sm leading-relaxed opacity-70 relative z-10" :class="isDark ? 'text-gray-300' : 'text-[#8A817C]'">
          {{ feature.desc }}
        </p>
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

const features = [
  { icon: '🎵', title: 'Auto-Play Music', desc: 'Musik latar otomatis menyala saat undangan dibuka, membangun suasana romantis.' },
  { icon: '💌', title: 'RSVP & Ucapan', desc: 'Tamu bisa konfirmasi kehadiran dan kirim doa langsung via WhatsApp atau dashboard.' },
  { icon: '📍', title: 'Navigasi Peta', desc: 'Integrasi Google Maps akurat untuk memandu tamu ke lokasi acara tanpa tersesat.' },
  { icon: '💸', title: 'Amplop Digital', desc: 'Terima hadiah cashless via QRIS/Transfer Bank dengan mudah dan aman.' },
  { icon: '📸', title: 'Galeri HD', desc: 'Pamerkan foto pre-wedding Anda dalam kualitas tinggi dengan tampilan slide interaktif.' },
  { icon: '⏳', title: 'Countdown Timer', desc: 'Hitung mundur waktu menuju hari bahagia untuk meningkatkan antusiasme tamu.' }
]

onMounted(() => {
  gsap.to('.feature-header', {
    scrollTrigger: { trigger: '.feature-header', start: 'top 80%' },
    y: 0, opacity: 1, duration: 1, ease: 'power3.out'
  })
  
  ScrollTrigger.batch('.feature-card', {
    start: 'top 85%',
    onEnter: batch => gsap.to(batch, { y: 0, opacity: 1, stagger: 0.15, duration: 1, ease: 'back.out(1.2)' })
  })
})
</script>

