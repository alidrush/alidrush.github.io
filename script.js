
const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");
const yearElement = document.querySelector("#current-year");

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (menuToggle && navLinks) {
  function closeMenu() {
    navLinks.classList.remove("is-open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.setAttribute("aria-label", "Open navigation menu");
  }

  menuToggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("is-open");

    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute(
      "aria-label",
      isOpen ? "Close navigation menu" : "Open navigation menu"
    );
  });

  navItems.forEach((item) => {
    item.addEventListener("click", closeMenu);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeMenu();
      menuToggle.focus();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 640) {
      closeMenu();
    }
  });
}

const languageButtons = document.querySelectorAll(".language-button");

function setLanguage(language) {
  document.documentElement.lang = language;

  document.querySelectorAll("[data-en][data-id]").forEach((element) => {
    element.textContent = element.dataset[language];
  });

  languageButtons.forEach((button) => {
    const active = button.dataset.lang === language;

    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  document.title =
    language === "id"
      ? "Al Idrus H. | Profesional Produk & Proyek HealthTech"
      : "Al Idrus H. | HealthTech Product & Project Professional";
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    setLanguage(button.dataset.lang);
  });
});

setLanguage("en");
