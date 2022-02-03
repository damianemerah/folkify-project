import View from './View.js';
import { RES_PER_PAGE } from '../config.js';

class PageCountView extends View {
  _parentElement = document.querySelector('.page-count');

  _generateMarkup() {
    const markup = `<p>Page <span>${
      this._data.page
    }</span> of <span>${Math.ceil(
      this._data.results.length / RES_PER_PAGE
    )}</span></p>`;
    console.log(this._data);
    return markup;
  }
}

export default new PageCountView();
