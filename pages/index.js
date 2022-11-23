// API to get stories from MongoDB Atlas
import api from "../utils/api.js";

//api.getStories();
/* api.getStories().then((data) => {
  data.forEach((item) => {
    const card = new Card(item.name, item.story, item._id);
  });
}); */
// End of API to get stories from MongoDB Atlas

// Class imports

import navbarMenu from "../components/navbarMenu.js";
import Comment from "../components/Comment.js";
import Section from "../components/Section.js";

// Constants imports

import {
  comments,
  commentSelectors,
  commentTemplate,
  commentsContainer,
  navbarSelector,
} from "./../utils/constants.js";

// Navbar logic

const navbar = new navbarMenu(navbarSelector);

navbar.setEventListeners();

// Comments render & logic

const commentList = new Section(
  {
    items: comments,
    renderer: (item) => {
      commentList.addItem(createComment(item));
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

// const checkCommentsLength = () => {
//   const commentsArray = document.querySelectorAll(".comments__bubble");
//   return commentsArray.length < 4 ? true : false;
// };

// window.addEventListener("click", checkCommentsLength);

commentList.renderItems();

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
