// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-ba5b5.firebaseapp.com",
  projectId: "mern-estate-ba5b5",
  storageBucket: "mern-estate-ba5b5.appspot.com",
  messagingSenderId: "360486192971",
  appId: "1:360486192971:web:b023a95094d88f86b04ace",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
