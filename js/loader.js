document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    document.body.classList.remove("preload");

    const loader = document.getElementById("loader");
    const main = document.getElementById("main-content");

    if (loader) loader.style.display = "none";
    if (main) main.style.display = "block";
  });
});
