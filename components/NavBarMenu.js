export default class navbarMenu {
  constructor(navbarSelector) {
    this._navbar = document.querySelector(navbarSelector);
    this._menu = document.querySelector(".menu");
    this._menuContainer = document.querySelector(".menu__container");
    this._navbarContainer = document.querySelector(".navbar__container");
    this._navbarMenuBtn = document.querySelector(".navbar__menu");
    this._navbarMenuCloseBtn = document.querySelector(".menu__close");
  }

  setEventListeners() {
    this._navbarMenuBtn.addEventListener("click", this._openMenu);
    this._navbarMenuCloseBtn.addEventListener("click", this._closeMenu);
  }

  _openMenu = () => {
    const animationTime = 500;
    this._menu.classList.add("menu_active");
    this._menuContainer.classList.add("slide-in");
    this._navbarContainer.classList.add("navbar__container_inactive");
    setTimeout(
      () => this._menuContainer.classList.remove("slide-in"),
      animationTime
    );
  };

  _closeMenu = () => {
    const animationTime = 500;
    this._menuContainer.classList.add("slide-out");
    setTimeout(() => {
      this._menu.classList.remove("menu_active");
      this._navbarContainer.classList.remove("navbar__container_inactive");
      this._menuContainer.classList.remove("slide-out");
    }, animationTime);
  };
}
