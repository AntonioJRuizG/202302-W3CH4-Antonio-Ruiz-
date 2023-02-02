/* eslint-disable no-new */
import { Header } from './components/header/header';
import { SeriesSection } from './components/seriesSection/seriesSection';
import { Tasks } from './components/tasks/tasks';
import { TaskStorageRepo } from './services/repository/task.storage.repo';

console.log('Load', location.pathname);
new Header('.container');
new SeriesSection('.main');
if (location.pathname === '/home') {
  new Tasks('main', new TaskStorageRepo());
}
