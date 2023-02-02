/* eslint-disable no-unused-vars */

import { Component } from '../component/component';

export class SeriesSection extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }

  private createTemplate() {
    return `
    <section class="series">
      <h2 class="section-title">Series list</h2>
    </section>
    `;
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
