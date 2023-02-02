/* eslint-disable no-unused-vars */

import { SerieStructure } from '../../models/serie';
import { Component } from '../component/component';
import { Serie } from '../serie/serie';

export class PendingSeries extends Component {
  constructor(public selector: string, public series: SerieStructure[]) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  render(place: globalThis.InsertPosition) {
    (document.querySelector('main') as HTMLElement).innerHTML = '';
    super.render(place);
    this.series.forEach((item) => {
      // eslint-disable-next-line no-new
      new Serie('.series-list', item);
    });
  }

  private createTemplate() {
    return `
      <section class="series-pending">
        <h3 class="subsection-title">Pending series</h3>
        <p class="info">You have 4 series pending to watch</p>
        <!--<p class="info">Congrats! You've watched all your series</p>-->
        <ul class="series-list">
        </ul>
      </section>
    `;
  }
}
