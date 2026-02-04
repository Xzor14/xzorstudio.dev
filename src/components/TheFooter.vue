<template>
  <footer class="relative z-10 pt-24 pb-6 overflow-hidden font-sans border-t transition-colors duration-500"
          :class="isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-[#F2F2F7] border-black/5 text-[#1C1C1E]'">
    
    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 w-[80%] h-[500px] pointer-events-none opacity-20">
      <div class="absolute bottom-[-100px] left-[20%] w-[600px] h-[600px] bg-blue-500 rounded-full blur-[150px]"></div>
      <div class="absolute bottom-[-100px] right-[20%] w-[600px] h-[600px] bg-cyan-500 rounded-full blur-[150px]"></div>
    </div>

    <div class="max-w-[1400px] mx-auto px-6 md:px-10 relative z-20">
      
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-24">
        
        <div class="lg:col-span-5" data-aos="fade-up">
          <div class="flex items-center gap-2 mb-6">
            <span class="relative flex h-2.5 w-2.5">
              <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
            </span>
            <span class="text-[11px] font-bold uppercase tracking-[0.2em] opacity-60">All Systems Operational</span>
          </div>
          
          <h3 class="text-2xl md:text-3xl font-serif leading-tight mb-6">
            Crafting digital experiences <br>
            that leave a <span class="italic text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-600">mark.</span>
          </h3>

          <div class="flex flex-col gap-1 opacity-60 text-sm leading-relaxed max-w-sm">
            <p>Tangerang, Indonesia (WIB)</p>
            <p>hello@xzorstudio.dev</p>
          </div>
        </div>

        <div class="lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-4">
          
          <div data-aos="fade-up" data-aos-delay="100">
            <h4 class="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">Explore</h4>
            <ul class="space-y-4 text-sm font-medium">
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Home</a></li>
              <li><a href="#showcase" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Catalog</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Pricing</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">FAQ</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="200">
            <h4 class="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">Connect</h4>
            <ul class="space-y-4 text-sm font-medium">
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Instagram</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">TikTok</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">Dribbble</a></li>
              <li><a href="#" class="hover:text-cyan-400 transition-colors inline-block hover:translate-x-1 duration-300">GitHub</a></li>
            </ul>
          </div>

          <div data-aos="fade-up" data-aos-delay="300">
             <h4 class="text-[10px] font-bold uppercase tracking-widest opacity-40 mb-6">Action</h4>
             <a href="https://wa.me/6283822079009" target="_blank"
                class="group flex items-center gap-4 p-1 pr-4 rounded-full border transition-all hover:bg-white hover:text-black"
                :class="isDark ? 'border-white/20 bg-white/5' : 'border-black/10 bg-white'">
               <div class="w-10 h-10 rounded-full flex items-center justify-center border"
                    :class="isDark ? 'bg-black border-white/20' : 'bg-gray-100 border-black/5'">
                 <svg class="w-4 h-4 -rotate-45 transition-transform group-hover:rotate-0" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/></svg>
               </div>
               <span class="text-xs font-bold uppercase tracking-wider">Chat Now</span>
             </a>
          </div>

        </div>
      </div>

      <div class="border-t pt-8 flex flex-col md:flex-row justify-between items-end gap-6"
           :class="isDark ? 'border-white/10' : 'border-black/5'">
        
        <div class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-40 flex flex-col gap-1">
          <span>© 2026 XzorStudio Inc.</span>
          <span>Designed with XzorStudio.Dev</span>
        </div>

        <h1 class="text-[13vw] leading-[0.8] font-bold tracking-tighter select-none opacity-100 transition-all duration-500 cursor-default"
            :class="isDark ? 'text-[#1A1A1A]' : 'text-[#E5E5EA]'"
            style="font-variation-settings: 'wght' 900;">
          XZORSTUDIO
        </h1>
      </div>

    </div>
  </footer>
</template>

<script setup>
defineProps({ isDark: Boolean })
</script>

<style scoped>
/* Opsional: Jika ingin efek hover pada teks besar */
h1:hover {
  @apply opacity-80;
  transform: scale(1.01);
}
</style>

