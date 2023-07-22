var hamburgerMenu = document.querySelector(".menu-hamburger");
var navLinks = document.querySelector(".links-navbar");
var contact_button = document.querySelector(".contact");
var contact_button_mobile = document.querySelector(".contact-button")
var card = document.querySelector(".contactme");

function open() {
  card.classList.toggle("open");
}

function volet() {
  hamburgerMenu.classList.toggle("open");
  navLinks.classList.toggle("mobile-menu");
}

hamburgerMenu.addEventListener("click", volet);
contact_button.addEventListener("click", open);
contact_button_mobile.addEventListener("click", open)

document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll("nav a");

  // Fonction pour mettre à jour la classe active en fonction de la section visible
  function updateActiveNavLink() {
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => {
      const rect = section.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        const targetId = section.getAttribute("id");
        navLinks.forEach((link) => {
          link.classList.remove("active");
          if (link.getAttribute("href") === `#${targetId}`) {
            link.classList.add("active");
          }
        });
      }
    });
  }

  // Écouteur d'événement de défilement pour mettre à jour les liens actifs
  window.addEventListener("scroll", updateActiveNavLink);
});
