<template>
  <section id="pricing" class="relative z-10 py-24 px-5 md:px-10 font-sans overflow-hidden"
           :class="isDark ? 'bg-[#050505] text-white' : 'bg-[#FEF9F2] text-[#1d1d1f]'">
    
    <div class="max-w-[1000px] mx-auto relative z-20">
      
      <div class="text-center max-w-2xl mx-auto mb-16" data-aos="fade-up">
        <h2 class="text-4xl md:text-5xl font-bold tracking-tight mb-4">
          Satu Harga. <br>
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">Semua Fitur.</span>
        </h2>
        <p class="opacity-60 text-lg">Tanpa ribet. Tanpa biaya tersembunyi. Bebas pilih desain sesuka hati.</p>
      </div>

      <div class="relative rounded-[3rem] overflow-hidden border transition-all duration-500 hover:shadow-2xl group"
           :class="isDark ? 'bg-[#121212] border-white/10' : 'bg-white border-black/5 shadow-xl'"
           data-aos="zoom-in-up">
           
        <div class="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-b from-blue-500/20 to-cyan-500/20 rounded-full blur-[100px] pointer-events-none -mt-20 -mr-20"></div>

        <div class="grid grid-cols-1 md:grid-cols-2">
          
          <div class="p-10 md:p-14 flex flex-col justify-center relative z-10">
             
             <div class="inline-block px-3 py-1 rounded-full bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400 text-[10px] font-bold uppercase tracking-widest mb-6 w-max">
               Flat Rate Promo
             </div>

             <h3 class="text-2xl font-bold mb-2">All-In Access</h3>
             <p class="opacity-60 text-sm mb-8">Pilih tema manapun dari katalog kami.</p>

             <div class="flex items-baseline gap-2 mb-10">
               <span class="text-6xl md:text-7xl font-bold tracking-tighter">50rb</span>
               <span class="text-xl font-medium opacity-50">/ tema</span>
             </div>

             <a :href="waLink" target="_blank"
                class="block w-full py-5 rounded-2xl bg-black text-white dark:bg-white dark:text-black text-center text-sm font-bold uppercase tracking-[0.15em] hover:scale-[1.02] active:scale-95 transition-all shadow-lg">
               Pesan Sekarang
             </a>
             
             <p class="text-[10px] text-center mt-4 opacity-40">Proses pengerjaan cepat 1x24 Jam.</p>
          </div>

          <div class="p-10 md:p-14 relative z-10 border-t md:border-t-0 md:border-l"
               :class="isDark ? 'border-white/5 bg-white/5' : 'border-black/5 bg-gray-50'">
             
             <h4 class="text-lg font-bold mb-6">Apa yang Anda dapatkan?</h4>
             
             <ul class="space-y-4">
               <li v-for="(feature, index) in features" :key="index" class="flex items-start gap-4">
                 <div class="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center shrink-0 text-green-500 text-xs">✓</div>
                 <div>
                   <span class="font-bold text-sm block">{{ feature.title }}</span>
                   <span class="text-xs opacity-60 block">{{ feature.desc }}</span>
                 </div>
               </li>
             </ul>

          </div>

        </div>
      </div>

      <div class="mt-10 text-center opacity-40 text-sm" data-aos="fade-up" data-aos-delay="200">
        <p>🔒 Secure Payment via QRIS / Transfer Bank</p>
      </div>
      
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({ isDark: Boolean })

const waLink = computed(() => {
  const phone = '6283822079009'
  const text = `Halo Admin, saya mau order undangan paket 50rb.`
  return `https://wa.me/${phone}?text=${encodeURIComponent(text)}`
})

const features = [
  { title: "Bebas Pilih Tema", desc: "Akses ke semua desain Luxury, Premium, & Modern." },
  { title: "Fitur Lengkap", desc: "Musik, Galeri Foto, Peta, & Hitung Mundur." },
  { title: "Unlimited Nama Tamu", desc: "Sebarkan ke sebanyak mungkin orang tanpa batas." },
  { title: "Revisi Ringan", desc: "Bisa revisi data teks/typo sampai benar." },
  { title: "Aktif 6 Bulan", desc: "Undangan bisa diakses hingga acara selesai." }
]
</script>

