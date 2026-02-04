<template>
  <div class="group relative rounded-xl overflow-hidden transition-all duration-500 hover:-translate-y-2"
       :class="isDark ? 'bg-white/5 border border-white/10 hover:border-cyan-400/50 hover:shadow-[0_0_30px_rgba(0,201,255,0.15)]' : 'bg-white border border-[#E5E0D8] hover:shadow-xl hover:shadow-[#E5E0D8]'">
    
    <div class="relative h-[300px] md:h-[400px] overflow-hidden">
      <img :src="item.image" alt="Preview" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 grayscale group-hover:grayscale-0">
      <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-300"></div>
      
      <div class="absolute top-4 right-4 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest backdrop-blur-md border"
           :class="isDark ? 'bg-black/50 border-cyan-400/30 text-cyan-300' : 'bg-white/90 border-[#E5E0D8] text-[#5C5552]'">
        {{ item.price }}
      </div>
    </div>

    <div class="absolute bottom-0 left-0 w-full p-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
      <span class="text-[9px] uppercase tracking-[0.2em] mb-2 block" :class="isDark ? 'text-cyan-300' : 'text-[#8A817C]'">
        {{ item.category }}
      </span>
      <h4 class="text-xl font-serif font-bold mb-4" :class="isDark ? 'text-white' : 'text-[#2C2725]'">
        {{ item.title }}
      </h4>

      <div class="flex gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
        <button class="flex-1 py-2 text-[10px] font-bold tracking-[0.2em] rounded border transition-colors"
                :class="isDark ? 'bg-cyan-500 text-black border-cyan-500 hover:bg-cyan-400' : 'bg-[#5C5552] text-white border-[#5C5552] hover:bg-[#46403E]'">
          PREVIEW
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  item: Object,
  isDark: Boolean
})
</script>

