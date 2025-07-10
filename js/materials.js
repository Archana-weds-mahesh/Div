import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyBimGV8yVr6SE2CNieLg8Q3-sqUKzoLU_k",
  authDomain: "jahnavihub-e7d4a.firebaseapp.com",
  projectId: "jahnavihub-e7d4a",
  storageBucket: "jahnavihub-e7d4a.firebasestorage.app",
  messagingSenderId: "410902686492",
  appId: "1:410902686492:web:1b9e0a62505d239434e8d9",
  measurementId: "G-E3MNLNHN7X"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
// Auth check
onAuthStateChanged(auth, (user) => {
  if (!user) {
    alert("⛔ Please login to access this page!");
    window.location.href = "login.html";
  }
});