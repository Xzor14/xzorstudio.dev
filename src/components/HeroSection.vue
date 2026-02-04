<template>
  <div class="relative w-full overflow-hidden font-sans">
    
    <section class="relative z-10 min-h-[90vh] flex items-center px-6 md:px-12 pt-32 pb-20">
      <div class="w-full max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        
        <div class="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left relative z-20">
          
          <div class="gsap-hero-item inline-flex items-center gap-2 px-4 py-2 rounded-full border mb-8 backdrop-blur-md opacity-0"
               :class="isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/10'">
            <span class="relative flex h-2 w-2">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-cyan-400"></span>
              <span class="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
            </span>
            <span class="text-[10px] font-bold tracking-[0.2em] uppercase" :class="isDark ? 'text-cyan-300' : 'text-black'">
              #1 Digital Invitation Platform
            </span>
          </div>

          <h1 class="text-5xl sm:text-6xl md:text-7xl xl:text-8xl font-serif leading-[1.1] md:leading-[1] mb-8 tracking-tight relative">
            <span class="gsap-hero-item block opacity-0" :class="isDark ? 'text-white' : 'text-black'">
              Undangan
            </span>
            <span class="gsap-hero-item block font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-white to-cyan-300 bg-[length:200%_auto] animate-text-shimmer pb-2 opacity-0">
              Masa Depan.
            </span>
          </h1>

          <p class="gsap-hero-item text-sm md:text-xl leading-relaxed mb-10 max-w-lg opacity-0 font-light"
             :class="isDark ? 'text-gray-200' : 'text-gray-700'">
            Platform undangan digital premium. Desain modern, fitur interaktif, dan link instan untuk momen spesial Anda.
          </p>

          <div class="gsap-hero-item opacity-0">
            <button @click="$emit('cta-click')" 
                    class="group relative px-12 py-5 rounded-full font-bold text-xs tracking-[0.2em] transition-transform duration-500 hover:scale-105 overflow-hidden shadow-2xl"
                    :class="isDark ? 'bg-white text-black hover:shadow-[0_0_50px_rgba(255,255,255,0.4)]' : 'bg-black text-white hover:shadow-xl'">
              <span class="relative z-10 flex items-center justify-center gap-3">
                LIHAT TEMPLATE
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" class="group-hover:translate-x-1 transition-transform duration-300"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </span>
            </button>
          </div>

        </div>

        <div class="lg:col-span-5 relative h-[500px] md:h-[700px] flex items-center justify-center w-full perspective-container">
           
           <div ref="tiltContainer" class="relative w-[280px] md:w-[340px] h-[550px] md:h-[650px] preserve-3d will-change-transform opacity-0 scale-90">
              
              <div class="absolute inset-0 bg-[#050505] rounded-[3.5rem] border-[8px] border-[#151515] shadow-2xl overflow-hidden transform translate-z-20 group will-change-transform">
                 <div class="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-white/10 to-transparent pointer-events-none z-30 opacity-50"></div>
                 <div class="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-b-xl z-30"></div>
                 <div class="w-full h-full bg-gradient-to-br from-gray-900 to-black relative scale-105 flex flex-col items-center justify-center p-6 text-center">
                    <svg class="absolute inset-0 w-full h-full opacity-[0.07] pointer-events-none" width="100%" height="100%">
                      <pattern id="pattern-circles" x="0" y="0" width="30" height="30" patternUnits="userSpaceOnUse">
                        <circle cx="15" cy="15" r="1" fill="currentColor" class="text-white"/>
                      </pattern>
                      <rect x="0" y="0" width="100%" height="100%" fill="url(#pattern-circles)"></rect>
                    </svg>
                    <div class="screen-icon w-24 h-24 mb-6 text-cyan-200 opacity-90 will-change-transform">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0.8"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/></svg>
                    </div>
                    <div class="relative z-10">
                      <div class="text-[10px] uppercase tracking-[0.4em] mb-2 text-cyan-400">The Wedding Of</div>
                      <div class="text-4xl font-serif italic text-white mb-6">Romeo & Juliet</div>
                      <div class="text-xs text-gray-400 font-light tracking-widest mb-8">24 . 08 . 2026</div>
                      <div class="w-full h-10 border border-white/20 rounded-full flex items-center justify-center text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-sm">
                        Open Invitation
                      </div>
                    </div>
                 </div>
              </div>

              <div class="float-card-1 absolute top-32 -right-6 md:-right-16 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl transform translate-z-50 will-change-transform"
                   :class="isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-white/60 border-black/10 text-black'">
                 <div class="flex items-center gap-4">
                    <div class="w-10 h-10 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-500 flex items-center justify-center text-white shadow-lg spin-icon">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 18V5l12-2v13"/><circle cx="6" cy="18" r="3"/><circle cx="18" cy="16" r="3"/></svg>
                    </div>
                    <div>
                       <div class="text-[9px] uppercase tracking-wider opacity-60">Now Playing</div>
                       <div class="text-xs font-bold">Beautiful In White</div>
                    </div>
                 </div>
              </div>

              <div class="float-card-2 absolute bottom-40 -left-6 md:-left-12 p-4 rounded-2xl border backdrop-blur-xl shadow-2xl transform translate-z-40 will-change-transform"
                   :class="isDark ? 'bg-black/60 border-white/10 text-white' : 'bg-white/60 border-black/10 text-black'">
                 <div class="flex items-center gap-4">
                    <div class="text-2xl envelope-icon text-green-400">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                    </div>
                    <div>
                       <div class="text-lg font-bold font-mono">150+</div>
                       <div class="text-[9px] uppercase tracking-wider opacity-60">RSVP Confirmed</div>
                    </div>
                 </div>
              </div>

           </div>
        </div>
      </div>
    </section>

    <section class="relative z-10 py-24 px-0 md:px-12">
      <div class="max-w-[1400px] mx-auto px-6">
        <div class="mb-16 text-center md:text-left">
          <span class="text-cyan-500 text-[10px] font-bold tracking-[0.3em] uppercase block mb-3">Kenapa Digital?</span>
          <h2 class="text-3xl md:text-5xl font-serif leading-tight" :class="isDark ? 'text-white' : 'text-black'">Keunggulan Fitur</h2>
        </div>

        <div class="flex flex-col md:flex-row gap-4 h-auto md:h-[500px] overflow-x-auto md:overflow-visible snap-x snap-mandatory pb-8 md:pb-0 px-6 md:px-0 -mx-6 md:mx-0 scrollbar-hide">
          <div v-for="(card, i) in features" :key="i"
               class="gsap-feature-card relative min-w-[85vw] md:min-w-0 md:flex-1 group rounded-[2.5rem] overflow-hidden border transition-all duration-[800ms] ease-[cubic-bezier(0.2,0.8,0.2,1)] md:hover:flex-[3] snap-center cursor-default opacity-0 translate-y-20"
               :class="isDark ? 'bg-[#111]/80 border-white/5' : 'bg-white/80 border-black/5'">
             
             <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 bg-gradient-to-b" :class="card.glowClass"></div>
             <div class="absolute -right-10 -bottom-10 w-64 h-64 opacity-5 md:opacity-0 md:group-hover:opacity-10 transition-all duration-700 md:translate-y-10 md:group-hover:translate-y-0 rotate-12" :class="isDark ? 'text-white' : 'text-black'" v-html="card.svgPath"></div>

             <div class="relative z-10 h-full p-8 md:p-10 flex flex-col justify-between h-[350px] md:h-full">
               <div class="flex justify-between items-start">
                 <div class="w-14 h-14 rounded-2xl flex items-center justify-center text-3xl" :class="isDark ? 'bg-white/5' : 'bg-gray-100'">{{ card.emoji }}</div>
                 <div class="text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full border opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100" :class="isDark ? 'bg-black/50 border-white/20 text-white' : 'bg-white/50 border-black/20 text-black'">{{ card.tag }}</div>
               </div>
               <div>
                 <h3 class="text-2xl font-bold mb-3 whitespace-nowrap" :class="isDark ? 'text-white' : 'text-black'">{{ card.title }}</h3>
                 <p class="text-sm leading-relaxed opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-all duration-500 md:translate-y-4 md:group-hover:translate-y-0" :class="isDark ? 'text-gray-300' : 'text-gray-600'">{{ card.desc }}</p>
               </div>
             </div>
          </div>
        </div>
      </div>
    </section>

    <section class="relative z-10 py-24 px-6 md:px-12 border-t" :class="isDark ? 'border-white/5' : 'border-black/5'">
      <div class="max-w-[1400px] mx-auto">
        <div class="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 class="text-3xl md:text-5xl font-serif leading-tight mb-2" :class="isDark ? 'text-white' : 'text-black'">XzorStudio Ecosystem</h2>
            <p class="text-sm md:text-base opacity-60" :class="isDark ? 'text-gray-400' : 'text-black'">Ekosistem digital lengkap untuk setiap momen hidup Anda.</p>
          </div>
        </div>

        <div class="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          <div v-for="(item, i) in roadmapItems" :key="i"
               class="gsap-roadmap-item opacity-0 translate-y-10 group relative aspect-square rounded-[2rem] p-6 md:p-8 flex flex-col justify-between transition-all duration-500 hover:-translate-y-2 border overflow-hidden"
               :class="isDark ? 'bg-[#0f0f0f]/80 border-white/5 hover:border-cyan-500/30' : 'bg-white/80 border-black/5 hover:shadow-xl'">
            <div class="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div class="relative z-10 flex justify-between items-start">
              <span class="text-3xl md:text-4xl grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-300">{{ item.icon }}</span>
              <span class="w-2 h-2 rounded-full" :class="item.status === 'Soon' ? 'bg-gray-500' : 'bg-green-500 animate-pulse'"></span>
            </div>
            <div class="relative z-10">
              <h4 class="text-sm md:text-lg font-bold mb-1" :class="isDark ? 'text-white' : 'text-black'">{{ item.title }}</h4>
              <span class="text-[9px] uppercase tracking-widest opacity-50" :class="isDark ? 'text-gray-400' : 'text-gray-600'">{{ item.status }}</span>
            </div>
          </div>
        </div>

        <div class="mt-24 text-center">
          <button @click="$emit('cta-click')" 
                  class="px-12 py-5 rounded-full font-bold text-xs tracking-[0.25em] transition-all hover:scale-105 border-2"
                  :class="isDark ? 'border-white text-white hover:bg-white hover:text-black' : 'border-black text-black hover:bg-black hover:text-white'">
             MULAI BUAT UNDANGAN
          </button>
        </div>

      </div>
    </section>

  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted, reactive } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)

const props = defineProps({
  isDark: Boolean,
  mousePos: Object
})

defineEmits(['cta-click'])

const tiltContainer = ref(null)
const isDesktop = ref(false)

// PHYSICS STATE
const tilt = reactive({
  currentX: 0,
  currentY: 0,
  targetX: 0,
  targetY: 0
})

// SMOOTHING LERP
const lerp = (start, end, factor) => start + (end - start) * factor

const updateMedia = () => { isDesktop.value = window.innerWidth >= 1024 }

const updateTilt = () => {
  if (!isDesktop.value || !tiltContainer.value) return
  tilt.targetX = props.mousePos.centerY * -10
  tilt.targetY = props.mousePos.centerX * 10
  tilt.currentX = lerp(tilt.currentX, tilt.targetX, 0.06)
  tilt.currentY = lerp(tilt.currentY, tilt.targetY, 0.06)
  tiltContainer.value.style.transform = `perspective(1000px) rotateX(${tilt.currentX}deg) rotateY(${tilt.currentY}deg)`
}

onMounted(() => {
  updateMedia()
  window.addEventListener('resize', updateMedia)
  
  // USE GSAP TICKER FOR ULTRA SMOOTH ANIMATION
  gsap.ticker.add(updateTilt)

  const tl = gsap.timeline({ defaults: { ease: 'power4.out' } })
  
  // Text Entrance
  tl.fromTo('.gsap-hero-item', 
    { y: 50, opacity: 0 },
    { y: 0, opacity: 1, duration: 1.5, stagger: 0.15, delay: 0.2 }
  )

  // 3D Visual Entrance
  gsap.fromTo(tiltContainer.value,
    { opacity: 0, scale: 0.8, y: 100 },
    { opacity: 1, scale: 1, y: 0, duration: 1.8, ease: 'elastic.out(1, 0.75)', delay: 0.5 }
  )

  // Floating Elements (Sine Wave)
  gsap.to('.float-card-1', { y: -20, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' })
  gsap.to('.float-card-2', { y: -15, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 })
  gsap.to('.screen-icon', { y: -5, duration: 3, repeat: -1, yoyo: true, ease: 'sine.inOut' })

  // Scroll Animations
  gsap.to('.gsap-feature-card', {
    scrollTrigger: { trigger: '.gsap-feature-card', start: 'top 85%' },
    y: 0, opacity: 1, duration: 1, stagger: 0.15, ease: 'power3.out'
  })
  
  gsap.to('.gsap-roadmap-item', {
    scrollTrigger: { trigger: '.gsap-roadmap-item', start: 'top 85%' },
    y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'back.out(1.2)'
  })
})

onUnmounted(() => {
  window.removeEventListener('resize', updateMedia)
  gsap.ticker.remove(updateTilt)
})

const features = [
  { title: 'Praktis', desc: 'Satu link untuk semua tamu.', emoji: '🚀', tag: 'Efficiency', glowClass: 'from-cyan-500/10 to-transparent', svgPath: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/></svg>' },
  { title: 'Hemat', desc: 'Solusi ekonomis nan mewah.', emoji: '💸', tag: 'Value', glowClass: 'from-purple-500/10 to-transparent', svgPath: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M11.8 10.9c-2.27-.59-3-1.2-3-2.15 0-1.09 1.01-1.85 2.7-1.85 1.78 0 2.44.85 2.5 2.1h2.21c-.07-1.72-1.12-3.3-3.21-3.81V3h-3v2.16c-1.94.42-3.5 1.68-3.5 3.61 0 2.31 1.91 3.46 4.7 4.13 2.5.6 3 1.48 3 2.41 0 .69-.49 1.79-2.7 1.79-2.06 0-2.87-.92-2.98-2.1h-2.2c.12 2.19 1.76 3.42 3.68 3.83V21h3v-2.15c1.95-.37 3.5-1.5 3.5-3.55 0-2.84-2.43-3.81-4.7-4.4z"/></svg>' },
  { title: 'Eco', desc: 'Tanpa limbah kertas.', emoji: '🌿', tag: 'Green', glowClass: 'from-green-500/10 to-transparent', svgPath: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16.17 3.82 21.34l1.89.66l.95-2.3c.48.17.98.3 1.34.3C19 20 22 3 22 3c-1 2-8 2.25-13 3.25S2 11.5 2 13.5s1.75 3.75 1.75 3.75C7 8 17 8 17 8z"/></svg>' },
  { title: 'Interaktif', desc: 'Musik, Galeri HD, Animasi.', emoji: '✨', tag: 'Wow', glowClass: 'from-blue-500/10 to-transparent', svgPath: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"/></svg>' }
]
const roadmapItems = [
  { title: 'Birthday', icon: '🎂', status: 'Soon' },
  { title: 'Aqiqah', icon: '👶', status: 'Soon' },
  { title: 'Web CV', icon: '💼', status: 'Dev' },
  { title: 'Compro', icon: '🏢', status: 'Plan' },
]
</script>

<style scoped>
.preserve-3d { transform-style: preserve-3d; }
.translate-z-20 { transform: translateZ(20px); }
.translate-z-40 { transform: translateZ(40px); }
.translate-z-50 { transform: translateZ(50px); }

/* Hide Scrollbar */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

/* Animations */
@keyframes textShimmer { 0% { background-position: 200% center; } 100% { background-position: -200% center; } }
.animate-text-shimmer { animation: textShimmer 3s linear infinite; }
.spin-icon { animation: spin 8s linear infinite; }
@keyframes spin { 100% { transform: rotate(360deg); } }
</style>

