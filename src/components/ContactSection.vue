<template>
  <section id="contact" class="relative z-10 py-24 px-5 md:px-10 font-sans"
           :class="isDark ? 'bg-[#050505] text-white' : 'bg-[#FEF9F2] text-[#1d1d1f]'">
    
    <div class="max-w-[1000px] mx-auto">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">Get in Touch.</h2>
        <p class="opacity-60 text-lg">Siap mewujudkan undangan impian Anda? Mari berdiskusi.</p>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-5 gap-8">
        
        <div class="md:col-span-2 space-y-4" data-aos="fade-up" data-aos-delay="100">
          
          <div class="p-6 rounded-3xl border transition-all hover:bg-black/5 dark:hover:bg-white/5"
               :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-sm'">
            <div class="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-500 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><path d="M22 6l-10 7L2 6"/></svg>
            </div>
            <h4 class="font-bold mb-1">Email Us</h4>
            <p class="text-sm opacity-60 break-all">hello@xzorstudio.dev</p>
          </div>

          <div class="p-6 rounded-3xl border transition-all hover:bg-black/5 dark:hover:bg-white/5"
               :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-sm'">
            <div class="w-10 h-10 rounded-full bg-green-500/10 flex items-center justify-center text-green-500 mb-4">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
            </div>
            <h4 class="font-bold mb-1">Office</h4>
            <p class="text-sm opacity-60">Tangerang, Banten, Indonesia</p>
          </div>

        </div>

        <div class="md:col-span-3 p-8 rounded-[2rem] border relative overflow-hidden"
             :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-lg'"
             data-aos="fade-left" data-aos-delay="200">
           
           <h3 class="text-xl font-bold mb-6">Kirim Pesan Cepat</h3>
           
           <form @submit.prevent="sendToWA" class="space-y-4">
             <div>
               <label class="text-xs font-bold uppercase opacity-50 ml-3 mb-1 block">Nama</label>
               <input v-model="form.name" required placeholder="Nama Anda"
                      class="w-full px-5 py-3 rounded-xl outline-none transition-all border bg-transparent"
                      :class="isDark ? 'border-white/10 focus:border-blue-500' : 'border-black/10 focus:border-blue-500'">
             </div>
             
             <div>
               <label class="text-xs font-bold uppercase opacity-50 ml-3 mb-1 block">Pesan</label>
               <textarea v-model="form.message" required rows="4" placeholder="Tulis pesan atau pertanyaan Anda..."
                         class="w-full px-5 py-3 rounded-xl outline-none transition-all border bg-transparent resize-none"
                         :class="isDark ? 'border-white/10 focus:border-blue-500' : 'border-black/10 focus:border-blue-500'"></textarea>
             </div>

             <button type="submit" 
                     class="w-full py-4 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-bold uppercase tracking-widest text-xs hover:shadow-lg hover:scale-[1.02] active:scale-95 transition-all flex items-center justify-center gap-2">
               <span>Kirim ke WhatsApp</span>
               <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
             </button>
           </form>

        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

defineProps({ isDark: Boolean })

const form = reactive({ name: '', message: '' })

const sendToWA = () => {
  const phone = '6283826272207' // Nomor Anda
  const text = `Halo XzorStudio, nama saya *${form.name}*.\n\n${form.message}`
  const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
  window.open(url, '_blank')
}
</script>

