import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  onAuthStateChanged,
  signOut
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Your Firebase Config
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

// Auth + Navbar Logic
document.addEventListener("DOMContentLoaded", () => {
  onAuthStateChanged(auth, (user) => {
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  if (loader) loader.style.display = "none";
  if (mainContent) mainContent.style.display = "block";
  document.body.classList.remove("preload");

  const welcomeText = document.getElementById("welcome-text");
  const navLogin = document.getElementById("nav-login");
  const navRegister = document.getElementById("nav-register");
  const navLogout = document.getElementById("nav-logout");
  const heroLoginBtn = document.getElementById("hero-login-btn");

  if (user) {
    const name = user.displayName || user.email;
    if (welcomeText) welcomeText.textContent = `Welcome, ${name}`;
    if (navLogin) navLogin.style.display = "none";
    if (navRegister) navRegister.style.display = "none";
    if (navLogout) navLogout.style.display = "inline-block";
    if (heroLoginBtn) heroLoginBtn.style.display = "none";
  } else {
    if (welcomeText) welcomeText.textContent = "Welcome to Jahnavihub!";
    if (navLogin) navLogin.style.display = "inline-block";
    if (navRegister) navRegister.style.display = "inline-block";
    if (navLogout) navLogout.style.display = "none";
    if (heroLoginBtn) heroLoginBtn.style.display = "inline-block";
  }
});



  // Logout handler
  document.addEventListener("click", (e) => {
    if (e.target.id === "logout-link") {
      e.preventDefault();
      signOut(auth)
        .then(() => {
          alert("👋 Logged out!");
          window.location.href = "index.html";
        })
        .catch((error) => {
          alert("❌ Logout failed: " + error.message);
        });
    }
  });
});
