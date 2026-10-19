document.querySelectorAll(".copy-link").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    navigator.clipboard.writeText(el.dataset.copy).then(() => {
      const original = el.textContent;
      el.textContent = "¡Copiado!";
      setTimeout(() => {
        el.textContent = original;
      }, 1200);
    });
  });
});

const themeToggle = document.querySelector(".theme-toggle");
if (themeToggle) {
  const label = themeToggle.querySelector("span");
  const syncLabel = (theme) => {
    if (label) label.textContent = theme === "dark" ? "Modo claro" : "Modo oscuro";
  };
  syncLabel(document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light");

  themeToggle.addEventListener("click", () => {
    const current = document.documentElement.getAttribute("data-theme") === "dark" ? "dark" : "light";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
    themeToggle.setAttribute("aria-pressed", next === "dark");
    syncLabel(next);
  });
}
