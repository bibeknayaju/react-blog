// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_APIKEY,
  authDomain: "mern-blog-f3329.firebaseapp.com",
  projectId: "mern-blog-f3329",
  storageBucket: "mern-blog-f3329.appspot.com",
  messagingSenderId: "228872034622",
  appId: "1:228872034622:web:0509429a58fc222677746f",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
