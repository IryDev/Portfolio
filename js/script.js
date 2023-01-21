var hamburgerMenu = document.querySelector(".menu-hamburger");
var navbarLinks = document.querySelector(".links-navbar");
var contact_button = document.querySelector(".contact");
var contact_button_mobile = document.querySelector(".contact-button")
var carte = document.querySelector(".contactme");

function open() {
  carte.classList.toggle("open");
}

function volet() {
  hamburgerMenu.classList.toggle("open");
  navbarLinks.classList.toggle("mobile-menu");
}

hamburgerMenu.addEventListener("click", volet);
contact_button.addEventListener("click", open);
contact_button_mobile.addEventListener("click", open)