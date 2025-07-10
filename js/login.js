// ✅ Imports
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail
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

// ✅ Init Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

// ✅ Delay auth check to avoid false alert
let loggingIn = false;

onAuthStateChanged(auth, (user) => {
  if (user && !loggingIn) {
    alert("You're already logged in!");
    window.location.href = "index.html";
  }
});

// ✅ Login form handler
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();
  loggingIn = true; // 🛑 prevent onAuthStateChanged conflict

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      alert("✅ Login successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      loggingIn = false; // 💡 reset so future check is accurate
      alert("❌ Invalid credentials: " + error.message);
    });
});

// ✅ Forgot Password
const forgotLink = document.getElementById("forgotPasswordLink");
if (forgotLink) {
  forgotLink.addEventListener("click", () => {
    const email = document.getElementById("email").value.trim();
    if (!email) {
      alert("⚠️ Please enter your email first.");
      return;
    }

    sendPasswordResetEmail(auth, email)
      .then(() => {
        alert("📧 Password reset email sent!");
      })
      .catch((error) => {
        alert("❌ " + error.message);
      });
  });
}
