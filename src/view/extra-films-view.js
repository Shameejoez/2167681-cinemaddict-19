import AbstractStatefulView from '../framework/view/abstract-stateful-view.js';

//БЛОК С ТОПОВЫМИ ФИЛЬМАМИ СЮДА ЕЩЕ НУЖНО ПОМЕСТИТЬ DIV ИЗ cards-film-container-view.js
const createExtraFilmsView = () =>

  `<section class="films-list ">
<h2 class="films-list__title">Most commented</h2>

</section>`;

export default class ExtraFilmsView extends AbstractStatefulView {


  get template() {
    return createExtraFilmsView();
  }
}
