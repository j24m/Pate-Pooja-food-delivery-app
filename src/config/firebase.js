// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNw_7nOz5ztFYesD8ng13aMb6sQrZ2WnQ",
  authDomain: "patepooja-firebase.firebaseapp.com",
  projectId: "patepooja-firebase",
  storageBucket: "patepooja-firebase.firebasestorage.app",
  messagingSenderId: "407790445481",
  appId: "1:407790445481:web:4c7ae778fb0ccce6e91ab8",
  measurementId: "G-B4XPERH6TZ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app); // Firebase authentication
export const db = getFirestore(app); // Firestore
