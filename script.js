const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector(".site-nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => {
    const open = menuButton.getAttribute("aria-expanded") === "true";
    menuButton.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  nav.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      menuButton.setAttribute("aria-expanded", "false");
      nav.classList.remove("is-open");
    });
  });
}

document.querySelectorAll("[data-year]").forEach((node) => {
  node.textContent = new Date().getFullYear();
});

const placeholderForm = document.querySelector("[data-placeholder-form]");

if (placeholderForm) {
  placeholderForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const status = placeholderForm.querySelector(".form-status");
    if (status) {
      status.textContent =
        "Form is intentionally disabled. Connect it to the chosen email or form service before launch.";
    }
  });
}
