document.addEventListener("DOMContentLoaded", () => {
  const toggleBtn = document.getElementById("theme-toggle");

  // ✅ Apply saved theme from localStorage
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
  }

  // ✅ Dark mode toggle button click
  if (toggleBtn) {
    toggleBtn.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const current = document.body.classList.contains("dark-mode") ? "dark" : "light";
      localStorage.setItem("theme", current);

      // Optional: Reload to apply changes across tabs
      // location.reload();
    });
  }

  // ✅ Hide loader & show content (if present)
  const loader = document.getElementById("loader");
  const mainContent = document.getElementById("main-content");

  if (loader) loader.style.display = "none";
  if (mainContent) mainContent.style.display = "block";
});
