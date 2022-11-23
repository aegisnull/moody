// Class imports

import navbarMenu from "../components/navbarMenu.js";

// Constants imports

import { navbarSelector } from "./../utils/constants.js";

// Navbar logic

const navbar = new navbarMenu(navbarSelector);

navbar.setEventListeners();

// // Function to open the menu
// navbarMenuButton.addEventListener("click", () => {
//   const menu = document.querySelector(".menu");
//   const menuContainer = document.querySelector(".menu__container");
//   menu.classList.add("menu_active");
//   menuContainer.classList.add("slide-in");

//   document
//     .querySelector(".navbar__container")
//     .classList.add("navbar__container_inactive");
// });

// // Function to close the menu
// navbarMenuCloseButton.addEventListener("click", () => {
//   document.querySelector(".menu").classList.remove("menu_active");
//   document
//     .querySelector(".navbar__container")
//     .classList.remove("navbar__container_inactive");
// });

// Variable initialization
const shareStoryButton = document.querySelector(".moods__card-button");
const storyPopupCloseButton = document.querySelector(".popup__close");

// Function to open the popup
shareStoryButton.addEventListener("click", () => {
  document.querySelector(".popup").classList.add("popup_active");
  document
    .querySelector(".navbar__container")
    .classList.add("navbar__container_inactive");
});

// Function to close the popup
storyPopupCloseButton.addEventListener("click", () => {
  document.querySelector(".popup").classList.remove("popup_active");
  document
    .querySelector(".navbar__container")
    .classList.remove("navbar__container_inactive");
});

//api.test();
