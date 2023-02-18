import NewCardFilmView from '../view/card-film-view.js';
import {remove, render, replace} from '../framework/render.js';
import NewShowMoreButtonView from '../view/show-more-button-view.js';


export default class FilmsCardPresenter {
  #cardsContainer = null;
  #mainContainersComponent = null;
  #cardFilmComponent = null;
  #cardsModels = null;
  #loadMoreButtonComponent = null;
  #loadMoreButtonClickHandler = null;
  #onChangeWatchlist = null;
  #onChangeFavorite = null;
  #onChangeAlredyWatched = null;
  #popUpPresenter = null;
  #filmsCommentsModel = null;

  constructor ({cardsContainer, mainContainersComponent, loadMoreButtonClickHandler, popUpPresenter,
    changeWatchlist, changeFavorite, changeAlredyWatched, filmsCommentsModel}) {
    this.#cardsContainer = cardsContainer;
    this.#mainContainersComponent = mainContainersComponent;
    this.#loadMoreButtonClickHandler = loadMoreButtonClickHandler;
    this.#popUpPresenter = popUpPresenter;
    this.#onChangeWatchlist = changeWatchlist;
    this.#onChangeFavorite = changeFavorite;
    this.#onChangeAlredyWatched = changeAlredyWatched;
    this.#filmsCommentsModel = filmsCommentsModel;

  }


  init(cards) {
    this.#cardsModels = cards;
    const prevCardFilmComponent = this.#cardFilmComponent;

    this.#renderFilmComponet(this.#cardsModels);

    if (prevCardFilmComponent === null) {
      render(this.#cardFilmComponent, this.#cardsContainer);
      return;
    }

    if (this.#cardsContainer.contains(prevCardFilmComponent.element)) {
      replace(this.#cardFilmComponent, prevCardFilmComponent);
    }


    remove(prevCardFilmComponent);
  }

  #renderFilmComponet(cardsModel) {
    this.#cardFilmComponent = new NewCardFilmView({
      card: cardsModel,
      onClick: () => {

        this.#renderPopup(cardsModel);
      },
      changeWatchlist: this.#onChangeWatchlist,
      changeFavorite: this.#onChangeFavorite,
      changeAlredyWatched: this.#onChangeAlredyWatched,
      comments:this.#filmsCommentsModel.comments,

    });
  }
  /*  ПОКАЗ САМЫХ КОММЕНТИРУЕМЫХ И САМЫХ РЕЙТИНГОВЫХ ФИЛЬМОВ КАЖДЫЙ БЛОК СОСТОИТ ИЗ 2 КАРТОЧЕК С ФИЛЬМАМИ
В СЛУЧАЕ ЕСЛИ В МОДЕЛИ ТОПОВЫЙ РЕЙТИНГ БОЛЬШЕ ДВУЙХ, ТОГДА ВЫБОР КАРТОЧКИ ДОЛЖЕН БЫТЬ РАДОМНЫЙ

  renderMostComment(card) {

  }

  renderTopRate () {

  }  */

  destroy() {
    remove(this.#cardFilmComponent);
    remove(this.#loadMoreButtonComponent);
  }

  removeCard() {
    remove(this.#cardFilmComponent);
  }


  async #renderPopup (model) {
    await this.#filmsCommentsModel.init(model.id);
    this.#popUpPresenter(model);
  }


  renderShowMoreButton() {
    this.#loadMoreButtonComponent = new NewShowMoreButtonView({
      onBtnClick: this.#loadMoreButtonClickHandler
    });
    render(this.#loadMoreButtonComponent, this.#mainContainersComponent);
  }


  setAborting() {
    this.#cardFilmComponent.shake();
  }
}
