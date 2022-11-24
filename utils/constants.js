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

// Example Professionals

const professionals = [
  {
    image: "./images/professionals_Roxy.png",
    title: "Roxy Glass",
    subtitle: "Ver perfil",
    cta: "PIDE UNA CITA",
    color: "#B49BFF",
    data:
      "<p>Me especializo en:</p>" +
      "<ul>" +
      "<li>Psicología clínica</li>" +
      "<li>Neuropsicología</li>" +
      "<li>Psicología Comparativa</li>",
  },
  {
    image: "./images/professionals_Dario.png",
    title: "Darío Silva",
    subtitle: "Ver perfil",
    cta: "PIDE UNA CITA",
    color: "#E9E0C9",
    data:
      "<p>Me especializo en:</p>" +
      "<ul>" +
      "<li>Psicología Empresarial</li>" +
      "<li>Psicología Jurídica</li>" +
      "<li>Psicología Gerontológica</li>",
  },
  {
    image: "./images/professionals_Fabio.png",
    title: "Fabio Hernan",
    subtitle: "Ver perfil",
    cta: "PIDE UNA CITA",
    color: "#C5E588",
    data:
      "<p>Me especializo en:</p>" +
      "<ul>" +
      "<li>Psicología de Pareja</li>" +
      "<li>Psicología de Familia</li>" +
      "<li>Psicología de Desarrollo</li>",
  },
  {
    image: "./images/professionals_Barbara.png",
    title: "Bárbara Chen",
    subtitle: "Ver perfil",
    cta: "PIDE UNA CITA",
    color: "#F59292",
    data:
      "<p>Me especializo en:</p>" +
      "<ul>" +
      "<li>Psicología Psicología Educativa</li>" +
      "<li>Psicología de Familia</li>" +
      "<li>Psicología de Desarrollo</li>",
  },
];

const collapsibleCardSelectors = {
  imageElement: ".collapsible-card__img",
  titleElement: ".collapsible-card__title",
  subtitleElement: ".collapsible-card__subtitle",
  dataElement: ".collapsible-card__data",
  buttonElement: ".collapsible-card__button",
};

// Templates

const commentTemplate = document
  .querySelector("#template_comments")
  .content.querySelector(".comments__bubble");

const collapsibleCardTemplate = document
  .querySelector("#template_collapsible-card")
  .content.querySelector(".collapsible-card");

// Variable initialization & Selectors

const commentsContainer = document.querySelector(".comments__container");
const professionalsContainer = document.querySelector(
  ".professionals__elements"
);
const navbarSelector = ".navbar";

export {
  comments,
  professionals,
  commentSelectors,
  collapsibleCardSelectors,
  professionalsContainer,
  commentTemplate,
  collapsibleCardTemplate,
  commentsContainer,
  navbarSelector,
};
