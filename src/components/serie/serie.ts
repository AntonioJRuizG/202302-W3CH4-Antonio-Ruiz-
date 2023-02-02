/* eslint-disable no-unused-vars */
import { SerieStructure } from '../../models/serie';
import { Component } from '../component/component';

export class Serie extends Component {
  constructor(
    public selector: string,
    public serie: SerieStructure,
    public deleteSerie: (id: SerieStructure['id']) => void
  ) {
    super();
    this.serie = { ...serie };
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <li class="serie">
      <img class="serie__poster"
        src="${this.serie.poster}"
        alt="${this.serie.name} poster" />
      <h4 class="serie__title">${this.serie.name}</h4>
      <p class="serie__info">${this.serie.creator} (${this.serie.year})</p>
      <ul class="score">
        <li class="score__star">
          <i class="icon--score fas fa-star" title="1/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="2/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="3/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="4/5"></i>
        </li>
        <li class="score__star">
          <i class="icon--score fas fa-star" title="5/5"></i>
        </li>
      </ul>
      <i id=d${this.serie.id} class="fas fa-times-circle icon--delete"></i>
    </li>
`;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);

    document
      .querySelector(`#d${this.serie.id}`)
      ?.addEventListener('click', () => {
        this.deleteSerie(this.serie.id);
      });
  }
}
