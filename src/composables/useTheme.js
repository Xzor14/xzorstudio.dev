import { ref, onMounted, onUnmounted } from 'vue'

export function useTheme() {
  const currentTime = ref(new Date())
  const isDark = ref(false) // Default false

  const updateClock = () => {
    const now = new Date()
    currentTime.value = now
    
    const hours = now.getHours()
    
    // LOGIKA: Mode Gelap aktif dari jam 18:00 (6 sore) sampai 05:59 pagi
    // Anda bisa ubah angkanya jika mau (misal 17 untuk jam 5 sore)
    const shouldBeDark = hours >= 18 || hours < 6

    isDark.value = shouldBeDark
    
    // Update class di HTML agar Tailwind merespons
    if (shouldBeDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  let timer
  
  onMounted(() => {
    updateClock() // Jalan sekali saat load
    timer = setInterval(updateClock, 1000) // Update setiap 1 detik
  })

  onUnmounted(() => {
    clearInterval(timer) // Bersihkan timer saat pindah halaman
  })

  return { currentTime, isDark }
}

