/* eslint-disable no-unused-vars */

import { SerieStructure } from '../../models/serie';
import { Component } from '../component/component';
import { Serie } from '../serie/serie';

export class WatchedSeries extends Component {
  constructor(public selector: string, public series: SerieStructure[]) {
    super();

    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    // (document.querySelector('') as HTMLElement).innerHTML = '';
    this.series.forEach((item) => {
      // eslint-disable-next-line no-unused-expressions
      item.watched &&
        new Serie('.series-list--watched', item, this.deleteSeries.bind(this));
    });
  }

  deleteSeries(id: SerieStructure['id']) {
    this.series = this.series.filter((item) => item.id !== id);

    this.render('afterbegin');
    console.log(this.series);
  }

  private createTemplate() {
    return `

      <section class="series-watched">
        <h3 class="subsection-title">Watched series</h3>
        <p class="info">You have watched 4 series</p>
        <!--<p class="info">You already have not watched any serie</p>-->
        <ul class="series-list series-list--watched">
        </ul>
      </section>

    `;
  }
}
