<template>
  <div class="fixed inset-0 z-[200] flex flex-col font-sans overflow-hidden transition-colors duration-500"
       :class="isDark ? 'bg-[#000000] text-white' : 'bg-[#F2F2F7] text-black'"
       :style="{ fontFamily: '-apple-system, BlinkMacSystemFont, sans-serif' }">
    
    <aside class="hidden lg:flex fixed left-0 top-0 bottom-0 w-72 border-r z-50 flex-col pt-10 px-6"
           :class="isDark ? 'bg-[#1C1C1E] border-white/10' : 'bg-white border-[#E5E5EA]'">
        
        <div class="flex items-center gap-3 mb-10 px-2">
          <div class="w-10 h-10 rounded-[10px] bg-blue-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-blue-500/30">
            A
          </div>
          <div>
            <h1 class="font-bold text-xl tracking-tight">App Store</h1>
            <p class="text-[11px] font-medium opacity-50 uppercase tracking-widest">Connect</p>
          </div>
        </div>

        <nav class="space-y-1">
          <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
                  class="w-full flex items-center gap-3 px-4 py-3 rounded-[10px] text-[15px] font-medium transition-all"
                  :class="activeTab === tab.key 
                    ? (isDark ? 'bg-blue-500/20 text-blue-400' : 'bg-[#F2F2F7] text-blue-600') 
                    : 'opacity-60 hover:opacity-100 hover:bg-gray-100 dark:hover:bg-white/5'">
             <span class="text-lg">{{ tab.icon }}</span> {{ tab.label }}
          </button>
        </nav>

        <div class="mt-auto pb-6">
          <button @click="$emit('close')" class="w-full py-3 rounded-[12px] bg-red-50 text-red-500 dark:bg-red-500/10 dark:text-red-400 font-semibold text-sm hover:opacity-80 transition-opacity">
            Sign Out
          </button>
        </div>
    </aside>

    <main class="flex-1 lg:ml-72 flex flex-col h-full relative overflow-hidden">
      
      <div class="h-[env(safe-area-inset-top)] w-full shrink-0" :class="isDark ? 'bg-black' : 'bg-[#F2F2F7]'"></div>

      <div class="sticky top-0 z-20 px-4 py-2 transition-all duration-300 border-b shrink-0"
           :class="isDark ? 'bg-[#1C1C1E]/80 border-[#38383A]' : 'bg-[#F2F2F7]/80 border-[#C6C6C8]'"
           style="backdrop-filter: blur(20px) saturate(180%);">
        
        <div class="flex justify-between items-center mb-3 pt-2">
           <button @click="$emit('close')" 
                   class="w-8 h-8 rounded-full flex items-center justify-center transition-colors active:opacity-50"
                   :class="isDark ? 'bg-[#2C2C2E] text-gray-400' : 'bg-[#E5E5EA] text-gray-500'">
             <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6L6 18M6 6l12 12"/></svg>
           </button>

           <h1 class="text-[17px] font-bold tracking-tight absolute left-1/2 -translate-x-1/2">
             {{ getTitle(activeTab) }}
           </h1>

           <button v-if="activeTab !== 'settings'" @click="openModal()" 
                   class="w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center shadow-lg active:scale-90 transition-transform">
             <svg width="20" height="20" fill="none" stroke="currentColor" stroke-width="2.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 4v16m8-8H4"/></svg>
           </button>
           <div v-else class="w-8 h-8"></div> </div>

        <div v-if="activeTab === 'catalog'" class="relative group pb-1">
          <div class="absolute inset-y-0 left-3 flex items-center pointer-events-none">
            <svg class="w-4 h-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
          </div>
          <input v-model="searchQuery" type="text" placeholder="Search" 
                 class="w-full pl-9 pr-4 py-2 rounded-[10px] text-[17px] outline-none transition-all"
                 :class="isDark ? 'bg-[#2C2C2E] placeholder-[#8E8E93] text-white' : 'bg-[#E3E3E8] placeholder-[#8E8E93] text-black'">
        </div>
      </div>

      <div class="flex-1 overflow-y-auto px-4 pb-32 custom-scrollbar">
        
        <div v-if="activeTab === 'catalog'">
          <div class="py-4">
            <h2 class="text-[34px] font-bold tracking-tight leading-none mb-1">Dashboard</h2>
            <p class="text-[13px] font-semibold uppercase opacity-60 text-gray-500">{{ currentDate }}</p>
          </div>

          <div class="flex gap-3 overflow-x-auto pb-6 -mx-4 px-4 scrollbar-hide snap-x">
            <div v-for="(stat,i) in stats" :key="i"
                 class="min-w-[160px] p-4 rounded-[14px] flex flex-col justify-between h-28 snap-start relative overflow-hidden"
                 :class="isDark ? 'bg-[#1C1C1E]' : 'bg-white shadow-[0_2px_8px_rgba(0,0,0,0.04)]'">
               <div class="flex justify-between items-start">
                 <span class="text-2xl">{{ stat.icon }}</span>
                 <span class="text-[11px] font-bold px-2 py-0.5 rounded-full" :style="{ color: stat.color, backgroundColor: stat.color + '20' }">{{ stat.trend }}</span>
               </div>
               <div>
                 <div class="text-2xl font-bold tracking-tight">{{ stat.value }}</div>
                 <div class="text-[13px] opacity-60 font-medium">{{ stat.label }}</div>
               </div>
            </div>
          </div>

          <div class="p-0.5 rounded-[9px] mb-6 flex overflow-hidden"
               :class="isDark ? 'bg-[#1C1C1E]' : 'bg-[#E3E3E8]'">
            <button v-for="cat in ['All', 'Luxury', 'Modern']" :key="cat"
                    @click="activeFilter = cat"
                    class="flex-1 py-1.5 text-[13px] font-semibold rounded-[7px] transition-all duration-200"
                    :class="activeFilter === cat 
                      ? (isDark ? 'bg-[#636366] text-white shadow-sm' : 'bg-white text-black shadow-sm') 
                      : 'opacity-60'">
              {{ cat }}
            </button>
          </div>

          <h3 class="text-[20px] font-bold mb-3 px-2">Items</h3>
          
          <div class="overflow-hidden rounded-[12px] space-y-[1px]"
               :class="isDark ? 'bg-[#38383A]' : 'bg-[#E5E5EA]'">
            
            <div v-if="filteredProjects.length === 0" class="p-8 text-center" :class="isDark ? 'bg-[#1C1C1E]' : 'bg-white'">
               <p class="opacity-50">No themes found</p>
            </div>

            <div v-for="item in filteredProjects" :key="item.id" 
                 class="p-4 flex gap-4 transition-colors active:bg-gray-100 dark:active:bg-[#2C2C2E]"
                 :class="isDark ? 'bg-[#1C1C1E]' : 'bg-white'">
              
              <div class="w-16 h-16 shrink-0 rounded-[8px] bg-gray-200 overflow-hidden relative">
                <img :src="item.image" class="w-full h-full object-cover" @error="handleImageError">
              </div>

              <div class="flex-1 min-w-0 flex flex-col justify-center">
                <div class="flex justify-between items-start">
                  <h4 class="text-[17px] font-semibold truncate pr-2 leading-tight">{{ item.title }}</h4>
                  <span class="text-[15px] opacity-40">›</span>
                </div>
                <p class="text-[15px] opacity-60 mb-1">{{ item.category }}</p>
                <div class="flex items-center justify-between">
                   <span class="text-[13px] font-medium text-blue-500">{{ formatPrice(item.price) }}</span>
                   <div class="flex gap-3">
                      <button @click.stop="editItem(item)" class="text-[13px] font-medium text-blue-500">Edit</button>
                      <button @click.stop="deleteItem(item.id)" class="text-[13px] font-medium text-red-500">Delete</button>
                   </div>
                </div>
              </div>
            </div>

          </div>
          
          <p class="text-center text-[13px] opacity-40 mt-8 mb-20">
            Synced with iCloud • {{ filteredProjects.length }} items
          </p>
        </div>

        <div v-else-if="activeTab === 'settings'" class="pt-6">
          
          <div class="flex items-center gap-4 px-4 mb-8">
            <div class="w-16 h-16 rounded-full bg-gradient-to-tr from-blue-500 to-cyan-400 p-[2px]">
               <div class="w-full h-full rounded-full border-4 overflow-hidden" :class="isDark ? 'border-black bg-gray-800' : 'border-white bg-gray-200'">
                 <img src="https://ui-avatars.com/api/?name=Admin&background=random" class="w-full h-full object-cover">
               </div>
            </div>
            <div>
              <h2 class="text-2xl font-bold">Administrator</h2>
              <p class="text-[15px] opacity-60">admin@xzor.dev</p>
            </div>
          </div>

          <div class="mx-4 overflow-hidden rounded-[12px] space-y-[1px] mb-8"
               :class="isDark ? 'bg-[#38383A]' : 'bg-[#E5E5EA]'">
             
             <div class="p-4 flex justify-between items-center" :class="isDark ? 'bg-[#1C1C1E]' : 'bg-white'">
               <span class="text-[17px]">Appearance</span>
               <span class="text-[17px] opacity-50">Auto ></span>
             </div>
             <div class="p-4 flex justify-between items-center" :class="isDark ? 'bg-[#1C1C1E]' : 'bg-white'">
               <span class="text-[17px]">Notifications</span>
               <span class="text-[17px] opacity-50">On ></span>
             </div>
          </div>

          <div class="mx-4 overflow-hidden rounded-[12px]"
               :class="isDark ? 'bg-[#1C1C1E]' : 'bg-white'">
             <button @click="$emit('close')" class="w-full p-4 text-[17px] text-red-500 font-medium active:bg-gray-100 dark:active:bg-[#2C2C2E] transition-colors">
               Log Out
             </button>
          </div>
          
          <p class="text-center text-[13px] opacity-40 mt-4">
            Version 2.0.1 (Build 18A34)
          </p>

        </div>

      </div>

      <div class="lg:hidden absolute bottom-0 w-full border-t z-30 pb-[env(safe-area-inset-bottom)]"
           :class="isDark ? 'bg-[#1C1C1E]/90 border-[#38383A]' : 'bg-[#F9F9F9]/90 border-[#B0B0B0]'"
           style="backdrop-filter: blur(20px);">
         
         <div class="flex justify-around items-center pt-2 pb-1">
           <button v-for="tab in tabs" :key="tab.key" @click="activeTab = tab.key"
                   class="flex flex-col items-center gap-1 w-16 group">
              <span class="text-2xl transition-colors" :class="activeTab === tab.key ? 'text-blue-500' : 'opacity-40'">{{ tab.icon }}</span>
              <span class="text-[10px] font-medium transition-colors" :class="activeTab === tab.key ? 'text-blue-500' : 'opacity-40'">{{ tab.label }}</span>
           </button>
         </div>
      </div>

    </main>

    <Transition name="fade">
      <div v-if="showModal" @click="closeModal" class="fixed inset-0 z-[300] bg-black/40 backdrop-blur-sm"></div>
    </Transition>

    <Transition name="slide-up">
      <div v-if="showModal" 
           class="fixed bottom-0 left-0 right-0 z-[301] rounded-t-[14px] overflow-hidden flex flex-col h-[92vh] md:h-auto md:max-h-[80vh] md:w-[600px] md:inset-0 md:m-auto md:rounded-[14px]"
           :class="isDark ? 'bg-[#1C1C1E]' : 'bg-[#F2F2F7]'">
        
        <div class="px-4 py-3 flex justify-between items-center border-b shrink-0" 
             :class="isDark ? 'bg-[#2C2C2E] border-[#38383A]' : 'bg-[#F9F9F9] border-[#B0B0B0]'">
           <button @click="closeModal" class="text-[17px] text-blue-500">Cancel</button>
           <span class="text-[17px] font-semibold">{{ isEditing ? 'Edit Theme' : 'New Theme' }}</span>
           <button @click="saveItem" class="text-[17px] font-semibold text-blue-500">Done</button>
        </div>

        <div class="flex-1 overflow-y-auto p-5 custom-scrollbar">
          
          <div class="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden bg-gray-200 relative border-4"
               :class="isDark ? 'border-[#2C2C2E]' : 'border-white'">
             <img v-if="form.image" :src="form.image" class="w-full h-full object-cover" @error="handleImageError">
             <div v-else class="absolute inset-0 flex items-center justify-center opacity-30 text-2xl">📷</div>
          </div>

          <div class="rounded-[10px] overflow-hidden mb-6"
               :class="isDark ? 'bg-[#2C2C2E]' : 'bg-white'">
            
            <div class="flex items-center px-4 py-3 border-b" :class="isDark ? 'border-[#38383A]' : 'border-[#E5E5EA]'">
               <span class="w-24 text-[17px] shrink-0">Name</span>
               <input v-model="form.title" placeholder="Theme Title" class="flex-1 bg-transparent outline-none text-[17px]" :class="isDark ? 'text-white' : 'text-black'">
            </div>

            <div class="flex items-center px-4 py-3 border-b" :class="isDark ? 'border-[#38383A]' : 'border-[#E5E5EA]'">
               <span class="w-24 text-[17px] shrink-0">Price</span>
               <input v-model="form.price" type="number" placeholder="0" class="flex-1 bg-transparent outline-none text-[17px]" :class="isDark ? 'text-white' : 'text-black'">
            </div>

            <div class="flex items-center px-4 py-3">
               <span class="w-24 text-[17px] shrink-0">Category</span>
               <select v-model="form.category" class="flex-1 bg-transparent outline-none text-[17px] appearance-none text-blue-500" :class="isDark ? 'bg-[#2C2C2E]' : 'bg-white'">
                  <option v-for="c in categories" :key="c">{{ c }}</option>
               </select>
            </div>
          </div>

          <div class="rounded-[10px] overflow-hidden mb-6"
               :class="isDark ? 'bg-[#2C2C2E]' : 'bg-white'">
            
            <div class="flex items-center px-4 py-3 border-b" :class="isDark ? 'border-[#38383A]' : 'border-[#E5E5EA]'">
               <input v-model="form.image" placeholder="Image URL (https://...)" class="flex-1 bg-transparent outline-none text-[17px] text-blue-500">
            </div>
            
            <div class="flex items-center px-4 py-3">
               <input v-model="form.demoUrl" placeholder="Demo URL (https://...)" class="flex-1 bg-transparent outline-none text-[17px] text-blue-500">
            </div>
          </div>

          <div class="rounded-[10px] overflow-hidden"
               :class="isDark ? 'bg-[#2C2C2E]' : 'bg-white'">
            <div class="flex items-center px-4 py-3">
               <span class="w-24 text-[17px] shrink-0">Badge</span>
               <input v-model="form.badge" placeholder="Optional" class="flex-1 bg-transparent outline-none text-[17px]" :class="isDark ? 'text-white' : 'text-black'">
            </div>
          </div>

          <div class="h-20 md:h-0"></div> </div>

      </div>
    </Transition>

  </div>
</template>

<script setup>
import { ref, reactive, computed, onMounted } from 'vue'
import { store, addTheme, updateTheme, deleteTheme } from '../store.js'

const props = defineProps({ isDark: Boolean })
const emit = defineEmits(['close'])

// STATE
const searchQuery = ref('')
const activeTab = ref('catalog')
const activeFilter = ref('All')
const showModal = ref(false)
const isEditing = ref(false)
const editingId = ref(null)
const currentDate = ref('')
const greeting = ref('')

const tabs = [
  { key: 'catalog', label: 'Home', icon: '🏠' },
  { key: 'stats', label: 'Stats', icon: '📊' },
  { key: 'settings', label: 'Settings', icon: '⚙️' },
]

const categories = ['Luxury Series','Premium Series','Floral Series','Modern Series','Clean Series']
const form = reactive({ title:'', category:'Luxury Series', price:'', badge:'', image:'', demoUrl:'' })

onMounted(() => {
  const now = new Date()
  currentDate.value = now.toLocaleDateString('en-US', { weekday: 'long', month: 'long', day: 'numeric' })
  const h = now.getHours()
  greeting.value = h < 12 ? 'Good Morning' : h < 18 ? 'Good Afternoon' : 'Good Evening'
})

const getTitle = (tab) => {
  if (tab === 'catalog') return 'Dashboard'
  if (tab === 'stats') return 'Analytics'
  if (tab === 'settings') return 'Settings'
  return 'App'
}

// COMPUTED
const filteredProjects = computed(() => {
  let list = store.projects || []
  if (activeFilter.value !== 'All') list = list.filter(p => p.category.includes(activeFilter.value))
  if (searchQuery.value) list = list.filter(p => p.title.toLowerCase().includes(searchQuery.value.toLowerCase()))
  return list
})

const stats = computed(() => [
  { icon: '📦', value: store.projects?.length || 0, label: 'Items', trend: '+2', color: '#3b82f6' },
  { icon: '👁️', value: '12.5k', label: 'Views', trend: '+18%', color: '#ec4899' },
  { icon: '💎', value: 'Pro', label: 'Plan', trend: 'Active', color: '#06b6d4' },
])

// ACTIONS
const openModal = () => { isEditing.value = false; resetForm(); showModal.value = true }
const closeModal = () => { showModal.value = false }
const editItem = (item) => { isEditing.value = true; editingId.value = item.id; Object.assign(form, item); showModal.value = true }

const saveItem = async () => {
  if(!form.title) return
  if(isEditing.value) await updateTheme(editingId.value, {...form})
  else await addTheme({...form})
  showModal.value = false
}

const deleteItem = async (id) => { if(confirm('Delete theme?')) await deleteTheme(id) }

const resetForm = () => { form.title=''; form.price=''; form.badge=''; form.image=''; form.demoUrl=''; form.category='Luxury Series' }
const formatPrice = (v) => new Intl.NumberFormat('id-ID', { style:'currency', currency:'IDR', minimumFractionDigits:0 }).format(v)
const handleImageError = (e) => { e.target.src = 'https://via.placeholder.com/300?text=No+Img' }
</script>

<style scoped>
/* Scrollbar */
.scrollbar-hide::-webkit-scrollbar { display: none; }
.scrollbar-hide { -ms-overflow-style: none; scrollbar-width: none; }

.custom-scrollbar::-webkit-scrollbar { width: 6px; }
.custom-scrollbar::-webkit-scrollbar-thumb { background: #888; border-radius: 10px; }
.custom-scrollbar::-webkit-scrollbar-track { background: transparent; }

/* Transitions */
.slide-up-enter-active, .slide-up-leave-active { transition: transform 0.4s cubic-bezier(0.32, 0.72, 0, 1); }
.slide-up-enter-from, .slide-up-leave-to { transform: translateY(100%); }

.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>

