<template>
  <header 
    class="fixed top-0 w-full z-[100] transition-all duration-700 font-sans border-b"
    :class="[
      (isScrolled || isDark) 
        ? 'bg-black/70 backdrop-blur-2xl border-white/10 shadow-lg' 
        : 'bg-[#FEF9F2]/90 backdrop-blur-xl border-[#E5E0D8]',
      isScrolled ? 'py-4' : 'py-6'
    ]"
  >
    <div class="px-6 md:px-10 flex justify-between items-center relative z-[101]">

      <div class="cursor-pointer select-none z-[200]" @click="scrollTo('home')">
        <h1 class="text-2xl font-extrabold tracking-[0.15em] transition-colors"
            :class="isDark ? 'text-white' : 'text-[#2C2725]'">
          XZORSTUDIO
        </h1>
      </div>

      <nav class="hidden md:flex items-center gap-1 p-1.5 rounded-full border transition-colors duration-500"
           :class="isDark ? 'border-white/10 bg-white/5' : 'border-black/5 bg-black/5'">
        
        <a v-for="item in navItems" :key="item.key" 
           @click.prevent="scrollTo(item.key)"
           class="px-6 py-2.5 text-[11px] font-bold uppercase tracking-[0.15em] cursor-pointer hover:text-cyan-500 transition-colors"
           :class="isDark ? 'text-gray-300' : 'text-[#5C5552]'">
          {{ item.name }}
        </a>

        <div class="w-[1px] h-4 mx-3" :class="isDark ? 'bg-white/10' : 'bg-black/5'"></div>

        <button @click="openAdmin"
           class="px-6 py-2.5 text-[10px] font-extrabold tracking-[0.15em] rounded-full transition-all duration-500 hover:scale-105 border cursor-pointer"
           :class="isDark ? 'bg-cyan-400/10 border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black' : 'bg-[#2C2725] border-[#2C2725] text-white hover:bg-black'">
          LOGIN
        </button>
      </nav>

      <button @click="toggleMenu" class="md:hidden p-2 z-[200]">
        <div class="w-6 h-5 flex flex-col justify-between">
          <span class="block w-full h-[2px] transition-transform" :class="[isDark ? 'bg-white' : 'bg-black', mobileMenuOpen ? 'rotate-45 translate-y-2.5' : '']"></span>
          <span class="block w-full h-[2px] transition-opacity" :class="[isDark ? 'bg-white' : 'bg-black', mobileMenuOpen ? 'opacity-0' : '']"></span>
          <span class="block w-full h-[2px] transition-transform" :class="[isDark ? 'bg-white' : 'bg-black', mobileMenuOpen ? '-rotate-45 -translate-y-2' : '']"></span>
        </div>
      </button>

    </div>
  </header>

  <div v-if="mobileMenuOpen" 
       class="fixed inset-0 z-[99] flex flex-col items-center justify-center bg-white dark:bg-black transition-all">
       
       <nav class="flex flex-col items-center gap-8">
         <a v-for="item in navItems" :key="item.key" 
            @click="handleMobileClick(item.key)"
            class="text-3xl font-serif tracking-widest cursor-pointer hover:text-cyan-500"
            :class="isDark ? 'text-white' : 'text-black'">
           {{ item.name }}
         </a>

         <button @click="openAdmin" class="mt-8 text-xs font-bold uppercase tracking-widest opacity-50 hover:opacity-100"
                 :class="isDark ? 'text-white' : 'text-black'">
           Access Admin System
         </button>
       </nav>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { isAdminOpen } from '../store.js' // <--- IMPORT SAKLAR

const props = defineProps({ isDark: Boolean, isScrolled: Boolean })
const emit = defineEmits(['navigate'])
const mobileMenuOpen = ref(false)

const navItems = [
  { name: 'Home', key: 'home' },
  { name: 'About', key: 'about' },
  { name: 'Katalog', key: 'showcase' },
  { name: 'Contact', key: 'contact' }
]

// FUNGSI UTAMA: BUKA ADMIN
const openAdmin = () => {
  console.log("Tombol Login Diklik!") // Cek Console kalau macet
  isAdminOpen.value = true // Nyalakan saklar
  mobileMenuOpen.value = false // Tutup menu kalau di mobile
}

const scrollTo = (id) => {
  emit('navigate', id)
}

const handleMobileClick = (id) => {
  mobileMenuOpen.value = false
  emit('navigate', id)
}

const toggleMenu = () => mobileMenuOpen.value = !mobileMenuOpen.value
</script>

