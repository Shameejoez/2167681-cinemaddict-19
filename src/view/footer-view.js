import AbstractView from '../framework/view/abstract-view.js';

//главный контейнер с контентом сайта
const createNewFilmsMainContainerTemplate = () =>
  `<footer class="footer">
<section class="footer__logo logo logo--smaller">Cinemaddict</section>
<section class="footer__statistics">
  <p>130 291 movies inside</p>
</section>
   </footer>`;

export default class NewFilmsMainContainerView extends AbstractView {

  get template() {
    return createNewFilmsMainContainerTemplate();
  }
}
