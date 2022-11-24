export default class CollapsibleCard {
  constructor({ image, title, subtitle, cta, color, data }, templateSelector) {
    this._image = image;
    this._title = title;
    this._subtitle = subtitle;
    this._cta = cta;
    this._color = color;
    this._data = data;
    this._template = templateSelector;
  }

  _getTemplate() {
    const cardElement = this._template.cloneNode(true);
    return cardElement;
  }

  generateCard({
    imageElement,
    titleElement,
    subtitleElement,
    dataElement,
    buttonElement,
  }) {
    this._element = this._getTemplate();
    this._setImage(imageElement);
    this._setText(titleElement, subtitleElement);
    this._setData(dataElement);
    this._setButton(buttonElement);
    this._setEventListeners();
    return this._element;
  }

  _setImage(imageElement) {
    this._imageElement = this._element.querySelector(imageElement);
    this._imageElement.src = this._image;
    this._imageElement.alt = `Fotografía de ${this._title}`;
  }

  _setText(titleElement, subtitleElement) {
    this._titleElement = this._element.querySelector(titleElement);
    this._subtitleElement = this._element.querySelector(subtitleElement);
    this._titleElement.textContent = this._title;
    this._subtitleElement.textContent = this._subtitle;
  }

  _setData(dataElement) {
    this._dataElement = this._element.querySelector(dataElement);
    this._dataElement.insertAdjacentHTML("afterbegin", this._data);
  }

  _setButton(buttonElement) {
    this._buttonElement = this._element.querySelector(buttonElement);
    this._buttonElement.textContent = this._cta;
    this._buttonElement.style.backgroundColor = this._color;
  }

  _setEventListeners() {
    this._element.addEventListener("click", () => this._expand());
  }

  _expand() {
    this._dataElement.classList.toggle("collapsible-card_expanded");
    if (this._dataElement.style.maxHeight) {
      this._dataElement.style.maxHeight = null;
    } else {
      this._dataElement.style.maxHeight = this._dataElement.scrollHeight + "px";
    }
  }
}
