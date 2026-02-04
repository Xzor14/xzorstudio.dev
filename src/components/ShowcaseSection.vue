<template>
  <section id="showcase" class="relative z-10 py-24 md:py-32 px-4 md:px-6 min-h-screen overflow-hidden selection:bg-violet-500/30">
    
    <div class="absolute inset-0 overflow-hidden pointer-events-none">
      <div class="absolute top-[-10%] right-[-5%] w-[60vw] h-[60vw] bg-violet-600/20 rounded-full blur-[100px] animate-blob mix-blend-screen"></div>
      <div class="absolute bottom-[-10%] left-[-5%] w-[50vw] h-[50vw] bg-fuchsia-600/20 rounded-full blur-[100px] animate-blob animation-delay-2000 mix-blend-screen"></div>
      <div class="absolute top-[40%] left-[30%] w-[40vw] h-[40vw] bg-cyan-500/10 rounded-full blur-[100px] animate-blob animation-delay-4000 mix-blend-screen"></div>
      
      <div class="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150 mix-blend-overlay"></div>
      <div class="absolute inset-0 bg-grid-pattern opacity-[0.03]" :style="{ backgroundImage: `radial-gradient(${isDark ? '#fff' : '#000'} 1px, transparent 1px)` }"></div>
    </div>

    <div class="max-w-[1600px] mx-auto relative z-20">
      
      <div class="mb-20 flex flex-col items-center text-center perspective-1000">
        
        <div class="group relative inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 cursor-default overflow-hidden transition-transform hover:scale-105 duration-500 border border-white/10 bg-white/5 backdrop-blur-md"
             data-aos="fade-down">
          <div class="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-fuchsia-500/20 to-violet-500/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
          <span class="relative flex h-2 w-2">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-2 w-2 bg-violet-500"></span>
          </span>
          <span class="relative text-xs font-bold uppercase tracking-[0.2em] bg-gradient-to-r from-violet-200 to-fuchsia-200 bg-clip-text text-transparent">
            {{ totalThemes }} Premium Collections
          </span>
        </div>

        <h1 class="text-6xl md:text-8xl lg:text-9xl font-black mb-8 tracking-tighter leading-[0.9]" data-aos="fade-up" data-aos-delay="100">
          <span class="block bg-gradient-to-b from-white via-white/90 to-white/50 bg-clip-text text-transparent drop-shadow-2xl"
                :class="!isDark && '!text-slate-900'">
            Discover
          </span>
          <span class="relative inline-block">
            <span class="absolute -inset-2 blur-2xl bg-gradient-to-r from-violet-600 to-fuchsia-600 opacity-50"></span>
            <span class="relative bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-500 bg-clip-text text-transparent animate-text-shimmer bg-[length:200%_auto]">
              The Magic
            </span>
          </span>
        </h1>

        <div class="w-full max-w-5xl mx-auto space-y-8" data-aos="fade-up" data-aos-delay="200">
          
          <div class="relative group max-w-xl mx-auto z-50">
            <div class="absolute -inset-1 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
            <div class="relative flex items-center bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 focus-within:ring-2 focus-within:ring-violet-500/50"
                 :class="!isDark && 'bg-white/80 border-slate-200'">
              <span class="pl-6 text-white/50" :class="!isDark && 'text-slate-400'">
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
              </span>
              <input 
                v-model="searchQuery"
                type="text" 
                placeholder="Find your perfect theme..."
                class="w-full px-5 py-5 bg-transparent text-sm font-medium focus:outline-none transition-colors placeholder-white/30"
                :class="isDark ? 'text-white' : 'text-slate-900 placeholder-slate-400'"
              >
              <button v-if="searchQuery" @click="searchQuery = ''" class="pr-6 text-white/50 hover:text-white transition-colors">
                <svg class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </div>
          </div>

          <div class="flex flex-wrap justify-center gap-3 p-2 rounded-2xl transition-all duration-300">
            <button 
              v-for="tab in categories" 
              :key="tab.id"
              @click="activeTab = tab.id"
              class="relative px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 overflow-hidden group"
              :class="activeTab === tab.id ? 'text-white shadow-lg scale-105' : (isDark ? 'text-white/60 hover:text-white hover:bg-white/5' : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100')"
            >
              <div v-if="activeTab === tab.id" class="absolute inset-0 bg-gradient-to-r from-violet-600 to-fuchsia-600 rounded-xl"></div>
              <span class="relative z-10 flex items-center gap-2">
                <span>{{ tab.icon }}</span>
                <span>{{ tab.name }}</span>
                <span class="px-2 py-0.5 text-[10px] rounded-full bg-white/20 backdrop-blur-sm">
                  {{ getCategoryCount(tab.id) }}
                </span>
              </span>
            </button>
          </div>
        </div>
      </div>

      <TransitionGroup 
        name="project-grid" 
        tag="div" 
        class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8 perspective-1000"
      >
        <div 
          v-for="(item, index) in filteredProjects" 
          :key="item.id"
          class="group relative h-[500px] w-full"
          @mousemove="handleMouseMove($event, item.id)"
          @mouseleave="handleMouseLeave(item.id)"
        >
          <div 
            class="card-wrapper absolute inset-0 rounded-[2rem] transition-all duration-200 ease-out preserve-3d"
            :id="`card-${item.id}`"
            :style="cardStyles[item.id]"
          >
            <div class="absolute inset-0 rounded-[2rem] overflow-hidden bg-[#1a1a1a] border border-white/5 shadow-2xl"
                 :class="!isDark && 'bg-white border-slate-200'">
              
              <div class="absolute inset-0">
                <img :src="item.image" :alt="item.title" 
                     class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                     loading="lazy">
                <div class="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black/90 opacity-90 transition-opacity duration-300 group-hover:opacity-100"></div>
              </div>

              <div class="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none bg-gradient-to-tr from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>

              <div class="absolute inset-0 p-6 flex flex-col justify-between z-20 translate-z-20">
                
                <div class="flex justify-between items-start transform translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <span class="px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white/10 backdrop-blur-md border border-white/20 text-white shadow-lg">
                    {{ item.category.split(' ')[0] }}
                  </span>
                  
                  <div class="flex gap-2">
                     <button @click.stop="openLink(item.demoUrl)" 
                             class="p-2 rounded-full bg-white text-black hover:scale-110 transition-transform shadow-lg shadow-white/20"
                             title="Preview">
                        <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"/></svg>
                     </button>
                  </div>
                </div>

                <div class="transform translate-y-[20px] group-hover:translate-y-0 transition-all duration-300">
                  <h3 class="text-2xl font-black text-white mb-2 leading-tight drop-shadow-md">{{ item.title }}</h3>
                  
                  <div class="flex items-center justify-between gap-4 mt-4 pt-4 border-t border-white/10">
                    <div>
                      <p class="text-[10px] uppercase tracking-widest text-white/60 mb-1">Starting at</p>
                      <p class="text-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-200 to-fuchsia-200">
                        {{ formatPrice(item.price) }}
                      </p>
                    </div>
                    
                    <a :href="generateWhatsappLink(item)" target="_blank"
                       class="px-4 py-2 rounded-xl bg-white text-black text-xs font-bold uppercase tracking-wider hover:bg-violet-50 transition-colors shadow-lg shadow-white/10 flex items-center gap-2">
                       Order
                       <svg class="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3"/></svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            
            <div 
               class="absolute -inset-[1px] rounded-[2rem] z-[-1] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
               :style="{ 
                 background: `radial-gradient(600px circle at ${mousePositions[item.id]?.x || 50}% ${mousePositions[item.id]?.y || 50}%, rgba(139, 92, 246, 0.5), transparent 40%)` 
               }"
            ></div>
          </div>
        </div>
      </TransitionGroup>

      <div v-if="filteredProjects.length === 0" class="py-32 text-center" data-aos="zoom-in">
        <div class="inline-block p-6 rounded-full bg-white/5 mb-6 animate-bounce">
          <span class="text-4xl">🔭</span>
        </div>
        <h3 class="text-2xl font-bold mb-2">No themes found</h3>
        <p class="text-white/50">Try adjusting your search or category filters.</p>
        <button @click="resetFilters" class="mt-6 text-violet-400 hover:text-violet-300 font-medium underline underline-offset-4">
          Clear all filters
        </button>
      </div>

      <div class="mt-32 relative rounded-[3rem] overflow-hidden border border-white/10 bg-[#0a0a0a] group" 
           :class="!isDark && 'bg-slate-50 border-slate-200'"
           data-aos="fade-up">
        
        <div class="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity duration-1000">
             <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-b from-violet-600 to-transparent rounded-full blur-[120px] mix-blend-screen animate-pulse-slow"></div>
             <div class="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-t from-fuchsia-600 to-transparent rounded-full blur-[120px] mix-blend-screen animate-pulse-slow animation-delay-2000"></div>
        </div>

        <div class="relative z-10 p-12 md:p-24 text-center">
           <h2 class="text-5xl md:text-7xl font-black mb-6 tracking-tight">
             <span class="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-violet-400 bg-clip-text text-transparent animate-gradient bg-[length:200%_auto]">
               Custom Vision?
             </span>
           </h2>
           <p class="text-lg md:text-xl opacity-60 max-w-2xl mx-auto mb-12 leading-relaxed">
             We don't just use templates. We craft experiences. Let's build a digital invitation that is uniquely yours.
           </p>
           
           <div class="flex flex-col sm:flex-row items-center justify-center gap-6">
             <a :href="whatsappContactUrl" target="_blank"
                class="group relative px-8 py-4 rounded-2xl bg-white text-black font-bold text-sm overflow-hidden transition-transform hover:scale-105">
               <span class="relative z-10 flex items-center gap-2">
                 Start Custom Project
                 <svg class="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </span>
               <div class="absolute inset-0 bg-gradient-to-r from-violet-200 to-fuchsia-200 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
             </a>
           </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed, reactive } from 'vue'
import { store } from '../store.js'

const props = defineProps({ isDark: Boolean })
const MY_PHONE_NUMBER = '6283822079009'
const whatsappContactUrl = `https://wa.me/${MY_PHONE_NUMBER}?text=Halo XzorStudio! Saya tertarik dengan layanan custom design.`

// Data & State
const categories = [
  { id: 'Luxury Series', name: 'Luxury', icon: '💎' },
  { id: 'Premium Series', name: 'Premium', icon: '✨' },
  { id: 'Floral Series', name: 'Floral', icon: '🌸' },
  { id: 'Modern Series', name: 'Modern', icon: '🎨' },
  { id: 'Clean Series', name: 'Clean', icon: '🎐' },
]

const activeTab = ref('Luxury Series')
const searchQuery = ref('')
const mousePositions = reactive({})
const cardStyles = reactive({})

// 3D Tilt Logic
const handleMouseMove = (e, id) => {
  const card = document.getElementById(`card-${id}`)
  if (!card) return

  const rect = card.getBoundingClientRect()
  const x = e.clientX - rect.left
  const y = e.clientY - rect.top
  
  // Calculate percentage for spotlight
  if (!mousePositions[id]) mousePositions[id] = {}
  mousePositions[id].x = (x / rect.width) * 100
  mousePositions[id].y = (y / rect.height) * 100

  // Calculate tilt rotation
  const centerX = rect.width / 2
  const centerY = rect.height / 2
  const rotateX = ((y - centerY) / centerY) * -5 // Max -5deg to 5deg
  const rotateY = ((x - centerX) / centerX) * 5  // Max -5deg to 5deg

  cardStyles[id] = {
    transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`,
  }
}

const handleMouseLeave = (id) => {
  mousePositions[id] = { x: 50, y: 50 } // Reset spotlight to center
  cardStyles[id] = {
    transform: `perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)`,
  }
}

// Computed Data
const filteredProjects = computed(() => {
  if (!store || !store.projects) return []
  
  let filtered = store.projects.filter(p => p.category === activeTab.value)
  
  if (searchQuery.value.trim()) {
    const query = searchQuery.value.toLowerCase()
    filtered = filtered.filter(p => 
      p.title.toLowerCase().includes(query) || 
      p.category.toLowerCase().includes(query)
    )
  }
  return filtered
})

const totalThemes = computed(() => store?.projects?.length || 0)

// Helper Methods
const getCategoryCount = (id) => store?.projects?.filter(p => p.category === id).length || 0

const formatPrice = (val) => new Intl.NumberFormat('id-ID', { 
  style: 'currency', currency: 'IDR', minimumFractionDigits: 0 
}).format(val)

const generateWhatsappLink = (item) => {
  const msg = `Halo XzorStudio! 👋 Saya mau pesan tema *${item.title}* (${formatPrice(item.price)}).`
  return `https://wa.me/${MY_PHONE_NUMBER}?text=${encodeURIComponent(msg)}`
}

const openLink = (url) => {
  if(url && url !== '#') window.open(url, '_blank')
}

const resetFilters = () => {
  searchQuery.value = ''
  activeTab.value = 'Luxury Series'
}
</script>

<style scoped>
/* 1. FLUID GRID ANIMATIONS */
/* Ini adalah kunci agar kartu 'mengalir' ke posisi baru */
.project-grid-move,
.project-grid-enter-active,
.project-grid-leave-active {
  transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);
}

.project-grid-enter-from,
.project-grid-leave-to {
  opacity: 0;
  transform: translateY(30px) scale(0.9);
}

/* Memastikan item yang tidak berpindah tetap smooth layout-nya */
.project-grid-leave-active {
  position: absolute; 
}

/* 2. 3D & PERSPECTIVE */
.perspective-1000 {
  perspective: 1000px;
}

.preserve-3d {
  transform-style: preserve-3d;
  will-change: transform;
}

.translate-z-20 {
  transform: translateZ(20px);
}

/* 3. BACKGROUND ANIMATIONS */
@keyframes blob {
  0% { transform: translate(0px, 0px) scale(1); }
  33% { transform: translate(30px, -50px) scale(1.1); }
  66% { transform: translate(-20px, 20px) scale(0.9); }
  100% { transform: translate(0px, 0px) scale(1); }
}

@keyframes text-shimmer {
  0% { background-position: 200% center; }
  100% { background-position: -200% center; }
}

.animate-blob {
  animation: blob 10s infinite;
}

.animate-text-shimmer {
  animation: text-shimmer 3s linear infinite;
}

.animation-delay-2000 {
  animation-delay: 2s;
}

.animation-delay-4000 {
  animation-delay: 4s;
}

/* 4. UTILITIES */
.bg-grid-pattern {
  background-size: 40px 40px;
  mask-image: linear-gradient(to bottom, transparent, 10% black, 90% black, transparent);
}
</style>

