import NewUserRangView from './view/user-rang-view.js';
import {render, RenderPosition} from './render.js';
import NewNavFilmView from './view/nav-films-view.js';
import NewFiltersFilmView from './view/filters-view.js';
import ContentPresenter from './presenter/content-presenter.js';
import FilmInfoModel from './model/film-info-model.js';

const siteHeaderElement = document.querySelector('.header');
const siteMainElement = document.querySelector('.main');

const body = document.querySelector('body');

const filmInfoModel = new FilmInfoModel();
const contentPresenter = new ContentPresenter({
  filmContainer:siteMainElement,
  filmInfoModel,
  mainBody:body,

});

render(new NewUserRangView(), siteHeaderElement);
render(new NewFiltersFilmView(), siteMainElement);
render(new NewNavFilmView(), siteMainElement, RenderPosition.AFTERBEGIN);

contentPresenter.init();

