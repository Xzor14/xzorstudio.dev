import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

// --- TAMBAHKAN INI ---
import AOS from 'aos'
import 'aos/dist/aos.css'

// Inisialisasi AOS
AOS.init({
  duration: 800, // Durasi animasi (ms)
  easing: 'ease-out-cubic',
  once: true, // Animasi hanya berjalan sekali saat scroll
  offset: 50, // Trigger animasi 50px sebelum elemen muncul
})
// ---------------------

createApp(App).mount('#app')

