export default class Comment {
  constructor({ user, avatar, comment }, templateSelector) {
    this._user = user;
    this._avatar = avatar;
    this._comment = comment;
    this._template = templateSelector;
  }

  _getTemplate() {
    const commentElement = this._template.cloneNode(true);
    return commentElement;
  }

  generateComment({ userElement, avatarElement, commentElement }) {
    this._element = this._getTemplate();
    this._userElement = this._element.querySelector(userElement);
    this._avatarElement = this._element.querySelector(avatarElement);
    this._commentElement = this._element.querySelector(commentElement);
    this._userElement.textContent = this._user;
    this._commentElement.textContent = this._comment;
    this._avatarElement.alt = `Avatar de ${this._user}`;
    this._avatarElement.src = this._avatar;

    return this._element;
  }
}
