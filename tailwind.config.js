/** @type {import('tailwindcss').Config} */
export default {
  // Mengaktifkan dark mode berbasis class (untuk logika jam nanti)
  darkMode: 'class',
  
  // Memberitahu Tailwind file mana saja yang harus di-scan kodenya
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  
  theme: {
    extend: {
      colors: {
        // Palet warna custom XzorStudio.Dev
        'luxury-grey': '#6E7F8D',
        'charcoal': '#1F2933',
        'soft-gold': '#C9A24D',
        'ivory': '#FAF8F3',
      },
    fontFamily: {
        // Mengganti font-sans default dengan 'Plus Jakarta Sans'
        sans: ['"Plus Jakarta Sans"', 'sans-serif'],
        // Mengganti font-serif default dengan 'Playfair Display'
        serif: ['"Playfair Display"', 'serif'],
      },    },
  },
  plugins: [],
}

