<template>
  <section class="relative z-10 py-24 px-5 md:px-10 font-sans border-t transition-colors duration-500"
           :class="isDark ? 'bg-[#050505] border-white/10 text-white' : 'bg-[#FEF9F2] border-black/5 text-[#1d1d1f]'">
    
    <div class="max-w-[800px] mx-auto">
      
      <div class="text-center mb-16" data-aos="fade-up">
        <h2 class="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Pertanyaan Umum
        </h2>
        <p class="opacity-60 text-sm">Hal-hal yang sering ditanyakan calon pengantin.</p>
      </div>

      <div class="space-y-4">
        
        <div v-for="(item, index) in faqs" :key="index"
             class="group rounded-2xl border overflow-hidden transition-all duration-300"
             :class="[
               isDark ? 'bg-[#121212] border-white/5' : 'bg-white border-black/5',
               activeIndex === index ? 'shadow-lg' : 'hover:border-black/10 dark:hover:border-white/10'
             ]"
             data-aos="fade-up" 
             :data-aos-delay="index * 50">
          
          <button @click="toggle(index)"
                  class="w-full flex items-center justify-between p-6 text-left focus:outline-none">
             <span class="font-bold text-base md:text-lg pr-8">{{ item.question }}</span>
             
             <div class="w-8 h-8 rounded-full flex items-center justify-center border transition-all duration-300 shrink-0"
                  :class="[
                    activeIndex === index 
                      ? (isDark ? 'bg-white text-black rotate-45' : 'bg-black text-white rotate-45') 
                      : (isDark ? 'border-white/20 bg-white/5' : 'border-black/10 bg-gray-50')
                  ]">
               <svg width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 1V11M1 6H11"/></svg>
             </div>
          </button>

          <div class="grid transition-[grid-template-rows] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]"
               :class="activeIndex === index ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'">
             <div class="overflow-hidden">
               <div class="p-6 pt-0 opacity-70 text-sm md:text-base leading-relaxed">
                 {{ item.answer }}
               </div>
             </div>
          </div>

        </div>

      </div>

      <div class="mt-12 text-center" data-aos="fade-up">
        <p class="text-sm opacity-50 mb-4">Masih punya pertanyaan lain?</p>
        <a href="https://wa.me/6283826272207" target="_blank"
           class="inline-block border-b pb-0.5 text-sm font-bold uppercase tracking-widest hover:text-blue-500 transition-colors"
           :class="isDark ? 'border-white' : 'border-black'">
          Chat WhatsApp Admin
        </a>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'

defineProps({ isDark: Boolean })

const activeIndex = ref(0) // Default pertanyaan pertama terbuka

const toggle = (index) => {
  activeIndex.value = activeIndex.value === index ? null : index
}

const faqs = [
  {
    question: "Apa saja data yang perlu disiapkan?",
    answer: "Cukup siapkan Nama Mempelai, Nama Orang Tua, Tanggal & Lokasi Acara (Link Google Maps), Foto Galeri (Prewed/Lamaran), dan daftar Turut Mengundang jika ada."
  },
  {
    question: "Berapa lama proses pengerjaannya?",
    answer: "Sangat cepat! Untuk paket 50rb, estimasi pengerjaan adalah 1x24 jam setelah data yang Anda kirimkan lengkap."
  },
  {
    question: "Apakah bisa revisi jika ada kesalahan?",
    answer: "Tentu saja. Anda mendapatkan kesempatan revisi sepuasnya untuk data teks (typo, salah jam, salah gelar). Namun tidak bisa ganti tema setelah diproses ya."
  },
  {
    question: "Apakah dapat link custom nama tamu?",
    answer: "Ya! Anda akan mendapatkan fitur 'Unlimited Guest Name'. Kami berikan format link-nya, Anda tinggal copy-paste nama tamu sesuka hati."
  },
  {
    question: "Masa aktif undangannya berapa lama?",
    answer: "Undangan akan aktif selama 6 bulan sampai 1 tahun. Cukup panjang untuk kenang-kenangan digital momen spesial Anda."
  }
]
</script>

