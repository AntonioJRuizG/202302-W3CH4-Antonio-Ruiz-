/* eslint-disable no-unused-vars */
import { SerieStructure } from '../../models/serie';
import { Component } from '../component/component';

export class Card extends Component {
  constructor(
    public selector: string,
    public task: SerieStructure,
    public deleteTask: (id: SerieStructure['id']) => void,
    public updateTask: (task: SerieStructure) => void
  ) {
    super();
    this.task = { ...task };
    this.template = this.createTemplate();
    this.render('beforeend');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector(`#b${this.task.id}`)
      ?.addEventListener('click', () => {
        this.deleteTask(this.task.id);
      });
    document
      .querySelector(`#c${this.task.id}`)
      ?.addEventListener('change', () => {
        this.task.isCompleted = !this.task.isCompleted;
        this.updateTask(this.task);
      });
  }

  createTemplate() {
    return `
    <li class="card">
      <label>
        <input type="checkbox" id="c${this.task.id}"
          name="" ${this.task.isCompleted && 'checked'}>
        <span title="${this.task.id}">${this.task.name}</span>
      </label>
      <span>${this.task.owner}</span>
      <button id="b${this.task.id}">🗑️</button>
    </li>`;
  }
}
