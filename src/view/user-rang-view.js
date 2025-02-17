import {createElement} from '../render.js';
// ранг и аватар юзера
const createNewUserRangTemplate = () => '<section class="header__profile profile"><p class="profile__rating">Movie Buff</p><img class="profile__avatar" src="images/bitmap@2x.png" alt="Avatar" width="35" height="35"></section>';

export default class NewUserRangView {
  #element;

  get template() {
    return createNewUserRangTemplate;
  }

  get element() {
    if(!this.#element) {
      this.#element = createElement(this.template);
    }
    return this.#element;
  }

  removeElement() {
    this.#element = null;
  }
}

