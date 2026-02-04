<template>
  <div 
    class="min-h-screen relative font-sans selection:bg-cyan-400/30 selection:text-cyan-600 transition-colors duration-1000 overflow-x-hidden"
    :class="isDark ? 'bg-[#050505] text-white' : 'bg-[#FEF9F2] text-black'"
    @mousemove="handleMouseMove"
  >
    
    <CanvasBackground :isActive="isDark" />
    
    <TheHeader 
      v-if="activePage !== 'admin'" 
      :isDark="isDark" 
      :isScrolled="isScrolled" 
      :mousePos="mousePos" 
      @navigate="handleNavigation" 
    />

    <div class="min-h-screen flex flex-col" :class="{ 'pt-20': activePage !== 'admin' }">
      <Transition 
        mode="out-in"
        enter-active-class="transition duration-500 ease-out"
        enter-from-class="opacity-0 translate-y-5"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition duration-300 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 translate-y--5"
      >
        
        <div v-if="activePage === 'home'" key="home">
          <HeroSection 
            :isDark="isDark" 
            :mousePos="mousePos"
            @cta-click="handleNavigation('showcase')" 
          />
          <FeaturesSection :isDark="isDark" />
          <AboutSection :isDark="isDark" /> 
          <StepsSection :isDark="isDark" @cta-click="handleNavigation('showcase')" />
          <TheFooter :isDark="isDark" />
        </div>

        <div v-else-if="activePage === 'showcase'" key="showcase">
          <ShowcaseSection :isDark="isDark" />
          <PricingSection :isDark="isDark" />
          <FAQSection :isDark="isDark" />
          <ContactSection :isDark="isDark" />
          <TheFooter :isDark="isDark" />
        </div>

        <div v-else-if="activePage === 'admin'" key="admin" class="relative z-[999]">
          <AdminView :isDark="isDark" @close="isAdminOpen = false" />
        </div>

        <div v-else-if="activePage === 'about'" key="about">
           <AboutSection :isDark="isDark" />
           <TheFooter :isDark="isDark" />
        </div>

        <div v-else-if="activePage === 'contact'" key="contact">
           <ContactSection :isDark="isDark" />
           <TheFooter :isDark="isDark" />
        </div>

      </Transition>
    </div>

  </div>
</template>

<script setup>
import { ref, reactive, onMounted, onUnmounted, watch } from 'vue'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Lenis from 'lenis'

// IMPORT STORE
import { initStore, isAdminOpen } from './store.js' 

// IMPORT COMPONENTS
import CanvasBackground from './components/CanvasBackground.vue'
import TheHeader from './components/TheHeader.vue'
import HeroSection from './components/HeroSection.vue'
import FeaturesSection from './components/FeaturesSection.vue' 
import StepsSection from './components/StepsSection.vue'       
import ShowcaseSection from './components/ShowcaseSection.vue'
import TheFooter from './components/TheFooter.vue'             
import AdminView from './components/AdminView.vue' 
import PricingSection from './components/PricingSection.vue'
import FAQSection from './components/FAQSection.vue'
import AboutSection from './components/AboutSection.vue'
import ContactSection from './components/ContactSection.vue'

gsap.registerPlugin(ScrollTrigger)

// --- GLOBAL STATE ---
const currentTime = ref(new Date())
const isDark = ref(false) // <--- UBAH JADI FALSE (Default Siang)
const isScrolled = ref(false)
const timeParts = reactive({ hours: '00', minutes: '00', seconds: '00' })
const mousePos = reactive({ x: 0, y: 0, centerX: 0, centerY: 0 })
const activePage = ref('home') 

// --- SAKLAR ADMIN OTOMATIS ---
watch(isAdminOpen, (newValue) => {
  if (newValue === true) {
    activePage.value = 'admin'
  } else {
    activePage.value = 'home'
  }
})

// --- NAVIGATION LOGIC ---
const handleNavigation = (key) => {
  if (activePage.value === key) return
  activePage.value = key
  window.scrollTo({ top: 0, behavior: 'smooth' })
  setTimeout(() => { ScrollTrigger.refresh() }, 500)
}

// --- SMOOTH SCROLL ---
let lenis = null
const initSmoothScroll = () => {
  lenis = new Lenis({
    duration: 1.2,
    easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    smoothWheel: true,
  })
  lenis.on('scroll', ScrollTrigger.update)
  gsap.ticker.add((time) => { lenis.raf(time * 1000) })
  gsap.ticker.lagSmoothing(0)
  lenis.on('scroll', ({ scroll }) => { isScrolled.value = scroll > 50 })
}

// --- UTILS ---
const handleMouseMove = (e) => {
  if (window.innerWidth < 768) return 
  mousePos.centerX = (e.clientX / window.innerWidth) - 0.5
  mousePos.centerY = (e.clientY / window.innerHeight) - 0.5
}

// --- FUNGSI JAM & AUTO DARK MODE ---
const updateClock = () => {
  const now = new Date()
  currentTime.value = now
  const h = now.getHours()
  
  // === BAGIAN INI SAYA AKTIFKAN LAGI ===
  // Jika jam 6 sore s/d jam 6 pagi = MODE MALAM (True)
  // Selain itu (Siang) = MODE TERANG (False)
  isDark.value = h >= 18 || h < 6 
  // ======================================

  timeParts.hours = h.toString().padStart(2, '0')
  timeParts.minutes = now.getMinutes().toString().padStart(2, '0')
  timeParts.seconds = now.getSeconds().toString().padStart(2, '0')
}

let clockTimer
onMounted(() => {
  initStore()
  updateClock() // Jalankan sekali di awal agar langsung menyesuaikan jam
  initSmoothScroll()
  clockTimer = setInterval(updateClock, 1000)
})

onUnmounted(() => {
  clearInterval(clockTimer)
  if (lenis) lenis.destroy()
})
</script>

