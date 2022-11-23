// Example comments

const comments = [
  {
    user: "Valeria",
    avatar: "./images/comments__bubble-avatar-1.png",
    comment:
      "Siento que el trabajo me sobrelleva, me esfuerzo, pero siento que no  doy lo suficiente y llego a extremos de agotamiento muy fuertes. ¿Cómo lidio con eso? 🙏",
  },
  {
    user: "Manuel",
    avatar: "./images/comments__bubble-avatar-2.png",
    comment:
      "Estoy preocupado porque en mi trabajo ya nos dijeron que se acabó el remoto y no quiero que pase. Me agota estar rodeado de personas 😐 y no sé cómo llevarlo.",
  },
  {
    user: "Anónimo",
    avatar: "./images/comments__bubble-avatar-3.png",
    comment:
      "Me pasa que desconfío de los días en que me va bien todo, siento que se va a arruinar en cualquier momento y es muy fastidioso vivir así. ¿Alguien más? 🤡",
  },
  {
    user: "Anónimo",
    avatar: "./images/comments__bubble-avatar-4.png",
    comment:
      "Estoy llevando un proceso de duelo 😔 por la perdida de un familiar, nunca pensé que sería tan duro el apego a una persona . Ojalá y fuera más sencillo.",
  },
];

const commentSelectors = {
  userElement: ".comments__bubble-name",
  avatarElement: ".comments__bubble-avatar",
  commentElement: ".comments__bubble-comment",
};

// Templates

const commentTemplate = document
  .querySelector("#template_comments")
  .content.querySelector(".comments__bubble");

// Variable initialization & Selectors

const commentsContainer = document.querySelector(".comments__container");
const navbarSelector = ".navbar";

export {
  comments,
  commentSelectors,
  commentTemplate,
  commentsContainer,
  navbarSelector,
};
