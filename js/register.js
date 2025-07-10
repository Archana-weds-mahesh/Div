import { initializeApp } from "https://www.gstatic.com/firebasejs/11.9.1/firebase-app.js";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
  onAuthStateChanged
} from "https://www.gstatic.com/firebasejs/11.9.1/firebase-auth.js";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyBimGV8yVr6SE2CNieLg8Q3-sqUKzoLU_k",
  authDomain: "jahnavihub-e7d4a.firebaseapp.com",
  projectId: "jahnavihub-e7d4a",
  storageBucket: "jahnavihub-e7d4a.firebasestorage.app",
  messagingSenderId: "410902686492",
  appId: "1:410902686492:web:1b9e0a62505d239434e8d9",
  measurementId: "G-E3MNLNHN7X"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
  if (user) {
    alert("You're already logged in!");
    window.location.href = "index.html";
  }
});



// Register form handler
document.getElementById("registerForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!name || !email || !password) {
    alert("⚠️ Please fill all fields");
    return;
  }

  if (password.length < 6) {
    alert("🔐 Password must be at least 6 characters");
    return;
  }

  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Set display name
      return updateProfile(auth.currentUser, {
        displayName: name
      });
    })
    .then(() => {
      alert("✅ Registration successful!");
      window.location.href = "index.html";
    })
    .catch((error) => {
      alert("❌ Error: " + error.message);
    });
});
