let elementsArray = document.querySelectorAll("section");
console.log(elementsArray);
window.addEventListener("scroll", fadeIn);

function fadeIn() {
  for (var i = 0; i < elementsArray.length; i++) {
    var elem = elementsArray[i];
    var distInView = elem.getBoundingClientRect().top - window.innerHeight + 20;
    if (distInView < 0) {
      elem.classList.add("inView");
    } else {
      elem.classList.remove("inView");
    }
  }
}

fadeIn();

// const collapsibleCards = document.querySelectorAll(".profile");
// console.log(collapsibleCards);

// collapsibleCards.forEach((card) =>
//   card.addEventListener("click", () => expand(card))
// );

// function expand(card) {
//   card.classList.toggle("profile--expanded");

//   // If card is not expanded after toggle, add 'unexpanded' class
//   if (!card.classList.contains("profile--expanded"))
//     card.classList.toggle("profile--unexpanded");
//   // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
//   else if (
//     card.classList.contains("profile--expanded") &&
//     card.classList.contains("profile--unexpanded")
//   )
//     card.classList.toggle("profile--unexpanded");
// }

// function toggleTheme() {
//   let docu = document.querySelector("html");

//   docu.classList.toggle("light-theme");
//   docu.classList.toggle("dark-theme");
// }

// export default CollapsibleCard {
//     constructor({ cardName, src }, templateSelector, { handleCardClick }) {
//         this._name = cardName;
//         this._src = src;
//         this._template = templateSelector;
//         this._handleCardClick = handleCardClick;
//       }

//       _getTemplate() {
//         const cardElement = this._template.cloneNode(true);
//         return cardElement;
//       }

//       generateCard({ cardName, cardImage, cardLike, cardDelete }) {
//         this._element = this._getTemplate();
//         this._cardName = this._element.querySelector(cardName);
//         this._cardImage = this._element.querySelector(cardImage);
//         this._cardLike = this._element.querySelector(cardLike);
//         this._cardDelete = this._element.querySelector(cardDelete);
//         this._setEventListeners();
//         this._cardName.textContent = this._name;
//         this._cardImage.src = this._src;
//         this._cardImage.alt = `Fotografía subida de ${this._name}`;
//         return this._element;
//       }

//       _setEventListeners() {
//         this._cardImage.addEventListener("click", this._handleCardClick);
//         this._cardDelete.addEventListener("click", () => this._element.remove());
//         this._cardLike.addEventListener("click", this._like);
//       }

//       _like(evt) {
//         evt.target.classList.toggle("elements__like-button_active");
//       }

//       _expand(card) {
//             card.classList.toggle("profile--expanded");

//             // If card is not expanded after toggle, add 'unexpanded' class
//             if (!card.classList.contains("profile--expanded"))
//               card.classList.toggle("profile--unexpanded");
//             // Else if card is expanded after toggle and still contains 'unexpanded' class, remove 'unexpanded'
//             else if (
//               card.classList.contains("profile--expanded") &&
//               card.classList.contains("profile--unexpanded")
//             )
//               card.classList.toggle("profile--unexpanded");
//           }

//           _toggleTheme() {
//             let docu = document.querySelector("html");

//             docu.classList.toggle("light-theme");
//             docu.classList.toggle("dark-theme");

//           }
//       }
