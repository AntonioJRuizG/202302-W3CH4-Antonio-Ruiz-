/* eslint-disable no-unused-vars */

import { Component } from '../component/component';

export class WatchedSeries extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('beforeend');
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

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
