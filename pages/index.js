// Variable initialization
const navbarMenuButton = document.querySelector(".navbar__menu");
const navbarMenuCloseButton = document.querySelector(".menu__close");

// Function to open the menu
navbarMenuButton.addEventListener("click", () => {
  document.querySelector(".menu").classList.add("menu_active");
  document
    .querySelector(".navbar__container")
    .classList.add("navbar__container_inactive");
});

// Function to close the menu
navbarMenuCloseButton.addEventListener("click", () => {
  document.querySelector(".menu").classList.remove("menu_active");
  document
    .querySelector(".navbar__container")
    .classList.remove("navbar__container_inactive");
});
