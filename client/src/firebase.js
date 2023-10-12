// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-f9d5d.firebaseapp.com",
  projectId: "mern-estate-f9d5d",
  storageBucket: "mern-estate-f9d5d.appspot.com",
  messagingSenderId: "856798335386",
  appId: "1:856798335386:web:a9ab7f8eeb085e6ccbaa23"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);