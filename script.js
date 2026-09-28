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
