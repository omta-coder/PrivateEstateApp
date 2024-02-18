// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "pvtestate-19f2c.firebaseapp.com",
  projectId: "pvtestate-19f2c",
  storageBucket: "pvtestate-19f2c.appspot.com",
  messagingSenderId: "320767335454",
  appId: "1:320767335454:web:a77115d1e3f74c1ac8e20f"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);