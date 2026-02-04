import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyDKF765nqLEre4gHku2mO6GnEZcaAln_kU",
  authDomain: "xzorstudio.firebaseapp.com",
  projectId: "xzorstudio",
  storageBucket: "xzorstudio.firebasestorage.app",
  messagingSenderId: "458662677643",
  appId: "1:458662677643:web:452cf737f2eb93f046588e",
  measurementId: "G-P1CRK1NVCX"
};

// Init Firebase
const app = initializeApp(firebaseConfig);

// Firestore (AMAN di server & client)
export const db = getFirestore(app);

// Analytics → JALANKAN HANYA DI BROWSER
if (typeof window !== "undefined") {
  import("firebase/analytics").then(({ getAnalytics }) => {
    getAnalytics(app);
  });
}
