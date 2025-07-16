// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// 👇 Replace this with your actual Firebase config:
const firebaseConfig = {
  apiKey: "AIzaSyBM-9sPeRyUK5J3EiNQTmsmW-aEPbgL5VQ",
  authDomain: "cms-blog-project.firebaseapp.com",
  projectId: "cms-blog-project",
  storageBucket: "cms-blog-project.firebasestorage.app",
  messagingSenderId: "689038710268",
  appId: "1:689038710268:web:e6aaf07e4e0f63394bce79"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Export Firebase Authentication
export const auth = getAuth(app);
