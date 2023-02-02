/* eslint-disable no-unused-vars */
/* eslint-disable no-useless-constructor */

import { SERIES } from '../../mocks/series';
import { SerieStructure } from '../../models/serie';

export class TaskStorageRepo {
  constructor(public storeName: string = 'Tasks') {}

  getTasks(): SerieStructure[] {
    const data = localStorage.getItem(this.storeName);
    if (!data) {
      this.setTasks(SERIES);
      return SERIES;
    }

    return JSON.parse(data);
  }

  setTasks(tasks: SerieStructure[]) {
    const data = JSON.stringify(tasks);
    localStorage.setItem(this.storeName, data);
  }

  removeStorage() {
    localStorage.removeItem(this.storeName);
  }
}
