/* eslint-disable no-new */
import { Header } from './components/header/header';
import { PendingSeries } from './components/pendingSeriesSection/pendingSeries';
import { SeriesSection } from './components/seriesSection/seriesSection';
import { Tasks } from './components/tasks/tasks';
import { WatchedSeries } from './components/watchedSeriesSection/watchedSeries';
import { TaskStorageRepo } from './services/repository/task.storage.repo';

console.log('Load', location.pathname);
new Header('.container');
new SeriesSection('.main');
new PendingSeries('.series');
new WatchedSeries('.series');
if (location.pathname === '/home') {
  new Tasks('main', new TaskStorageRepo());
}
