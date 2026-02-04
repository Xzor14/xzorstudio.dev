<template>
  <section id="about" class="relative z-10 py-24 px-6 md:px-10 font-sans overflow-hidden"
           :class="isDark ? 'bg-[#050505] text-white' : 'bg-[#FEF9F2] text-[#1d1d1f]'">
    
    <div class="max-w-[1200px] mx-auto">
      
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        <div data-aos="fade-right">
           <span class="text-[10px] font-bold uppercase tracking-[0.2em] opacity-60 mb-4 block text-blue-500">
             Our Story
           </span>
           <h2 class="text-3xl md:text-5xl font-serif font-bold leading-tight mb-6">
             Menciptakan kesan pertama yang <span class="italic text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">abadi.</span>
           </h2>
           <div class="space-y-4 text-base md:text-lg opacity-70 leading-relaxed">
             <p>
               XzorStudio didirikan pada tahun 2026 dengan satu misi sederhana: Mengubah undangan kertas konvensional menjadi pengalaman digital yang sinematik dan ramah lingkungan.
             </p>
             <p>
               Kami percaya bahwa undangan bukan sekadar memberi tahu "Kapan & Di mana", tetapi juga berbagi rasa bahagia dan cerita cinta Anda kepada dunia.
             </p>
           </div>

           <div class="mt-8 pt-8 border-t" :class="isDark ? 'border-white/10' : 'border-black/5'">
              <p class="font-serif italic text-xl mb-2">"Detail is not just detail. It is the design."</p>
              <p class="text-xs font-bold uppercase tracking-widest opacity-50">— Xzor Team</p>
           </div>
        </div>

        <div class="grid grid-cols-2 gap-4" data-aos="fade-left">
          
          <div class="p-8 rounded-[2rem] border transition-transform hover:-translate-y-1"
               :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-lg'">
             <div class="text-4xl md:text-5xl font-bold mb-1 text-blue-500">1.2k+</div>
             <div class="text-xs font-bold uppercase tracking-widest opacity-50">Happy Clients</div>
          </div>

          <div class="p-8 rounded-[2rem] border transition-transform hover:-translate-y-1 mt-8"
               :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-lg'">
             <div class="text-4xl md:text-5xl font-bold mb-1 text-cyan-400">5.0</div>
             <div class="text-xs font-bold uppercase tracking-widest opacity-50">Star Rating</div>
          </div>

          <div class="p-8 rounded-[2rem] border transition-transform hover:-translate-y-1 -mt-8"
               :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-lg'">
             <div class="text-4xl md:text-5xl font-bold mb-1 text-purple-500">24/7</div>
             <div class="text-xs font-bold uppercase tracking-widest opacity-50">Fast Support</div>
          </div>

          <div class="p-8 rounded-[2rem] border transition-transform hover:-translate-y-1"
               :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-lg'">
             <div class="text-4xl md:text-5xl font-bold mb-1 text-pink-500">100%</div>
             <div class="text-xs font-bold uppercase tracking-widest opacity-50">Guarantee</div>
          </div>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({ isDark: Boolean })
</script>

