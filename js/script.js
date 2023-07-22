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
