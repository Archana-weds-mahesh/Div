import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// ✅ Firebase Config
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

// ✅ Auth check (Protect page if needed)
onAuthStateChanged(auth, (user) => {
  // 🟡 Optional: if page needs protection
  const protect = document.body.hasAttribute("data-protected");
  if (protect && !user) {
    window.location.href = "login.html";
  }
});

document.addEventListener("DOMContentLoaded", () => {
  // ✅ Logout handler
  const logoutBtn = document.getElementById("logoutBtn");
  if (logoutBtn) {
    logoutBtn.addEventListener("click", () => {
      signOut(auth)
        .then(() => {
          alert("👋 Logged out!");
          window.location.href = "login.html";
        })
        .catch((error) => {
          alert("❌ Logout failed: " + error.message);
        });
    });
  }

  // ✅ Dark mode toggle + persist
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("theme");
  
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      localStorage.setItem(
        "theme",
        document.body.classList.contains("dark-mode") ? "dark" : "light"
      );
    });
  }
});