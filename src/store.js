// 1. IMPORT ref DAN reactive DARI VUE (WAJIB STANDAR)
import { reactive, ref } from 'vue'

// --- SETUP DATABASE (FIREBASE / LOCAL STORAGE) ---
let db = null
let collection, addDoc, updateDoc, deleteDoc, doc, onSnapshot, query, orderBy

// Coba Load Firebase
try {
  // Menggunakan dynamic import
  const fb = await import('./firebase.js') // Pastikan path './firebase.js' benar
  if (fb.db) {
    db = fb.db
    // Load Firestore library jika Firebase aktif
    const firestore = await import('firebase/firestore') 
    collection = firestore.collection
    addDoc = firestore.addDoc
    updateDoc = firestore.updateDoc
    deleteDoc = firestore.deleteDoc
    doc = firestore.doc
    onSnapshot = firestore.onSnapshot
    query = firestore.query
    orderBy = firestore.orderBy
  }
} catch (e) {
  console.log("Mode Offline: Menggunakan LocalStorage", e)
}

// 2. STATE UTAMA
export const store = reactive({
  projects: [], 
  isLoading: true
})

// 3. SAKLAR ADMIN (INI YANG TADI ERROR)
// Sekarang aman karena 'ref' sudah di-import di baris 1
export const isAdminOpen = ref(false)

// === 1. LOAD DATA (INIT) ===
export const initStore = () => {
  store.isLoading = true

  // A. Jika ada Firebase, pakai Firebase
  if (db && onSnapshot) {
    const q = query(collection(db, "themes"), orderBy("createdAt", "desc"));
    onSnapshot(q, (snapshot) => {
      store.projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }))
      store.isLoading = false
    })
  } 
  // B. Jika Offline, Load dari LocalStorage
  else {
    const savedData = localStorage.getItem('xzor_themes')
    if (savedData) {
      store.projects = JSON.parse(savedData)
    } else {
      store.projects = []
    }
    store.isLoading = false
  }
}

// === HELPER: Simpan ke LocalStorage ===
const saveToLocal = () => {
  localStorage.setItem('xzor_themes', JSON.stringify(store.projects))
}

// === 2. CRUD ACTIONS ===

export const addTheme = async (themeData) => {
  if (db && addDoc) {
    try {
      await addDoc(collection(db, "themes"), { ...themeData, createdAt: Date.now() })
    } catch (e) { alert(e.message) }
  } else {
    store.projects.unshift({ id: 'local-' + Date.now(), createdAt: Date.now(), ...themeData })
    saveToLocal()
  }
}

export const updateTheme = async (id, updatedData) => {
  if (db && updateDoc) {
    try {
      const themeRef = doc(db, "themes", id)
      await updateDoc(themeRef, updatedData)
    } catch (e) { alert(e.message) }
  } else {
    const index = store.projects.findIndex(p => p.id === id)
    if (index !== -1) {
      Object.assign(store.projects[index], updatedData)
      saveToLocal()
    }
  }
}

export const deleteTheme = async (id) => {
  if (db && deleteDoc) {
    try {
      await deleteDoc(doc(db, "themes", id))
    } catch (e) { alert(e.message) }
  } else {
    const index = store.projects.findIndex(p => p.id === id)
    if (index !== -1) {
      store.projects.splice(index, 1)
      saveToLocal()
    }
  }
}

