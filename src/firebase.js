// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKF765nqLEre4gHku2mO6GnEZcaAln_kU",
  authDomain: "xzorstudio.firebaseapp.com",
  projectId: "xzorstudio",
  storageBucket: "xzorstudio.firebasestorage.app",
  messagingSenderId: "458662677643",
  appId: "1:458662677643:web:452cf737f2eb93f046588e",
  measurementId: "G-P1CRK1NVCX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app);
