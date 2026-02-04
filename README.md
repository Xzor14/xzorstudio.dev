# XzorStudio - Premium Digital Invitation Platform

![Vue.js](https://img.shields.io/badge/vuejs-%2335495e.svg?style=for-the-badge&logo=vuedotjs&logoColor=%234FC08D)
![TailwindCSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Firebase](https://img.shields.io/badge/firebase-%23039BE5.svg?style=for-the-badge&logo=firebase)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

**XzorStudio** adalah platform pembuatan undangan digital berbasis web yang mengusung tema *Cinematic* & *iOS Native Style*. Dibangun menggunakan teknologi web modern untuk menjamin performa tinggi, animasi mulus, dan pengalaman pengguna yang premium.

🔗 **Live Demo:** [https://username-github-anda.github.io/xzorstudio/](https://username-github-anda.github.io/xzorstudio/)  
*(Ganti link di atas dengan link website Anda setelah deploy)*

---

## ✨ Fitur Utama (Key Features)

### 🎨 Frontend & User Experience
* **Single Page Application (SPA):** Navigasi antar halaman tanpa *reloading* (kedip), sangat cepat dan halus.
* **Auto Dark Mode:** Tampilan otomatis menyesuaikan waktu.
    * 🌞 **Siang (06:00 - 18:00):** Tema Terang (Cream/Paper style).
    * 🌙 **Malam (18:00 - 06:00):** Tema Gelap (Cinematic Dark).
* **Premium Animations:** Menggunakan **GSAP** & **Lenis Scroll** untuk efek *parallax* dan *smooth scrolling* yang mewah.
* **Interactive UI:**
    * Katalog Undangan dengan *Glassmorphism Cards*.
    * Pricing Table yang jelas.
    * FAQ Accordion System.
    * Formulir WhatsApp terintegrasi (Direct Chat).

### 🛠️ Backend & Admin System
* **Secure Admin Panel:** Halaman khusus admin untuk mengelola produk.
* **CRUD Database:** Terintegrasi dengan **Firebase Firestore** (Online Realtime Database).
    * Tambah Tema Baru.
    * Edit Harga & Kategori.
    * Hapus Tema.
* **Offline Support:** Jika internet mati, sistem otomatis menggunakan *LocalStorage* browser agar data tidak hilang.

---

## 💻 Teknologi yang Digunakan (Tech Stack)

* **Framework:** Vue.js 3 (Composition API)
* **Styling:** Tailwind CSS
* **State Management:** Vue Reactivity (Global Store)
* **Database:** Google Firebase (Firestore)
* **Animation:** GSAP (GreenSock) & ScrollTrigger
* **Smooth Scroll:** Lenis
* **Build Tool:** Vite

---

## 🚀 Cara Menjalankan di Local (Installation)

Jika Anda ingin mengembangkan project ini di komputer Anda:

1.  **Clone Repository**
    ```bash
    git clone [https://github.com/username-anda/xzorstudio.git](https://github.com/username-anda/xzorstudio.git)
    cd xzorstudio
    ```

2.  **Install Dependencies**
    ```bash
    npm install
    ```

3.  **Setup Firebase**
    * Buat project di [Firebase Console](https://console.firebase.google.com/).
    * Aktifkan **Firestore Database**.
    * Salin config SDK ke file `src/firebase.js`.

4.  **Jalankan Server**
    ```bash
    npm run dev
    ```
    Buka `http://localhost:5173` di browser.

---

## 📂 Struktur Folder

```text
src/
├── components/      # Komponen UI (Header, Hero, Footer, dll)
├── assets/          # Gambar & Icon
├── store.js         # Global State & Database Logic
├── firebase.js      # Konfigurasi Database Online
├── App.vue          # Layout Utama & Logic Routing
└── main.js          # Entry Point Aplikasi

