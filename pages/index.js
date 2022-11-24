// API to get stories from MongoDB Atlas
import api from "../utils/api.js";

// Class imports

import navbarMenu from "../components/navbarMenu.js";
import Comment from "../components/Comment.js";
import CollapsibleCard from "../components/CollapsibleCard.js";
import Section from "../components/Section.js";

// Constants imports

import {
  comments,
  professionals,
  commentSelectors,
  collapsibleCardSelectors,
  commentTemplate,
  collapsibleCardTemplate,
  commentsContainer,
  professionalsContainer,
  navbarSelector,
} from "./../utils/constants.js";

// Navbar logic

const navbar = new navbarMenu(navbarSelector);

navbar.setEventListeners();

// Comments render & logic

// REVISAR API
/* api.getStories().then((data) => {
  const commentList = new Section(
    {
      items: data,
      renderer: (item) => {
        commentList.addItem(createComment(item));
      },
    },
    commentsContainer
  );

  commentList.renderItems();
}); */

const commentList = new Section(
  {
    items: comments,
    renderer: (item) => {
      commentList.prependItem(createComment(item));
    },
  },
  commentsContainer
);

const createComment = (commentData) => {
  // if (checkCommentsLength) {
  const newComment = new Comment(commentData, commentTemplate);
  const commentElement = newComment.generateComment(commentSelectors);
  return commentElement;
  // }
};

const moodForm = document.querySelector(".popup");

moodForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  const commentUser = document.querySelector("#checkmark").checked
    ? "Anónimo"
    : document.querySelector("#name").value;
  const commentMsg = document.querySelector("#comment").value;
  const commentData = {
    user: commentUser,
    avatar: "./images/comments__bubble-avatar-1.png",
    comment: commentMsg,
  };
  commentList.prependItem(createComment(commentData));
});

// const checkCommentsLength = () => {
//   const commentsArray = document.querySelectorAll(".comments__bubble");
//   return commentsArray.length < 4 ? true : false;
// };

commentList.renderItems();

// CollapsibleCards render & logic

const collapsibleCardList = new Section(
  {
    items: professionals,
    renderer: (item) => {
      collapsibleCardList.addItem(createCollapsibleCard(item));
    },
  },
  professionalsContainer
);

const createCollapsibleCard = (cardData) => {
  const newCard = new CollapsibleCard(cardData, collapsibleCardTemplate);
  const cardElement = newCard.generateCard(collapsibleCardSelectors);
  return cardElement;
};

collapsibleCardList.renderItems();

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

// Mood buttons logic
const moodEstupendoButton = document.querySelector(".moods__button_estupendo");
const moodTristeButton = document.querySelector(".moods__button_triste");
const moodOkayButton = document.querySelector(".moods__button_okay");
const moodPreocupadoButton = document.querySelector(
  ".moods__button_preocupado"
);
const moodEstresadoButton = document.querySelector(".moods__button_estresado");
const moodCansadoButton = document.querySelector(".moods__button_cansado");

const moodCard = document.querySelector(".moods__card");
const moodCardTitle = document.querySelector(".moods__subtitle");
const moodArgument1 = document.querySelector(".moods__list_1");
const moodArgument2 = document.querySelector(".moods__list_2");
const moodArgument3 = document.querySelector(".moods__list_3");

moodEstupendoButton.addEventListener("click", () => {
  moodEstupendoButton.classList.toggle("moods__button_estupendo_active");
  moodCard.classList.toggle("moods__button_estupendo_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "¡Excelente! 🙂";
  moodArgument1.textContent = "Lidiar con la soledad.";
  moodArgument2.textContent = "La lucha contra la salud mental cambió mi vida.";
  moodArgument3.textContent =
    "La tristeza es una emoción como cualquier otra y tiene su función y puedes expresarla.";
  checkClassList();
});

moodTristeButton.addEventListener("click", () => {
  moodTristeButton.classList.toggle("moods__button_triste_active");
  moodCard.classList.toggle("moods__button_triste_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "Es normal sentirse triste";
  moodArgument1.textContent = "Lidiar con la soledad.";
  moodArgument2.textContent = "La lucha contra la salud mental cambió mi vida.";
  moodArgument3.textContent =
    "La tristeza es una emoción como cualquier otra y tiene su función y puedes expresarla.";
  checkClassList();
});

moodOkayButton.addEventListener("click", () => {
  moodOkayButton.classList.toggle("moods__button_okay_active");
  moodCard.classList.toggle("moods__button_okay_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "¡Está bien! 🙂";
  moodArgument1.textContent = "Lidiar con la soledad.";
  moodArgument2.textContent = "La lucha contra la salud mental cambió mi vida.";
  moodArgument3.textContent =
    "La tristeza es una emoción como cualquier otra y tiene su función y puedes expresarla.";
  checkClassList();
});

moodPreocupadoButton.addEventListener("click", () => {
  moodPreocupadoButton.classList.toggle("moods__button_preocupado_active");
  moodCard.classList.toggle("moods__button_preocupado_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "Es normal sentirse así 😞";
  moodArgument1.textContent = "Lidiar con la soledad.";
  moodArgument2.textContent = "La lucha contra la salud mental cambió mi vida.";
  moodArgument3.textContent =
    "La tristeza es una emoción como cualquier otra y tiene su función y puedes expresarla.";
  checkClassList();
});

moodEstresadoButton.addEventListener("click", () => {
  moodEstresadoButton.classList.toggle("moods__button_estresado_active");
  moodCard.classList.toggle("moods__button_estresado_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "Es normal sentirse así 😞";
  moodArgument1.textContent = "Lidiar con la soledad.";
  moodArgument2.textContent = "La lucha contra la salud mental cambió mi vida.";
  moodArgument3.textContent =
    "La tristeza es una emoción como cualquier otra y tiene su función y puedes expresarla.";
  checkClassList();
});

moodCansadoButton.addEventListener("click", () => {
  moodCansadoButton.classList.toggle("moods__button_cansado_active");
  moodCard.classList.toggle("moods__button_cansado_active");
  moodCard.classList.toggle("moods__card_active");
  moodCardTitle.textContent = "Es normal sentirse así 😞";
  moodArgument1.textContent = "Lidiar con la soledad.";
  moodArgument2.textContent = "La lucha contra la salud mental cambió mi vida.";
  moodArgument3.textContent =
    "La tristeza es una emoción como cualquier otra y tiene su función y puedes expresarla.";
  checkClassList();
});

// reset text on button click
const resetText = () => {
  moodCardTitle.textContent = "¿Cómo estás?";
  moodArgument1.textContent = "Comparte tu historia con los demas.";
  moodArgument2.textContent =
    "Lee las historias de otros usuarios y deja un comentario.";
  moodArgument3.textContent =
    "Es importante que sepas que no estas solo en esto.";
};

function checkClassList() {
  if (moodCard.classList.contains("moods__card_active")) {
  } else {
    resetText();
  }
}

// open professional help modal
const agendarCitaButton = document.querySelectorAll(
  ".collapsible-card__button"
);
const citaModal = document.querySelector(".popup_professionals");

agendarCitaButton.forEach((button) => {
  button.addEventListener("click", () => {
    citaModal.classList.toggle("popup_professionals_active");
  });
});

// close professional help modal
const closeCitaModal = document.querySelector(".popup__close_professionals");

closeCitaModal.addEventListener("click", () => {
  citaModal.classList.remove("popup_professionals_active");
});
