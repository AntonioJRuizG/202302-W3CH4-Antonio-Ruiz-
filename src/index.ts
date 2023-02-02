/* eslint-disable no-new */
import { Header } from './components/header/header';
import { PendingSeries } from './components/pendingSeriesSection/pendingSeries';
import { SeriesSection } from './components/seriesSection/seriesSection';
import { WatchedSeries } from './components/watchedSeriesSection/watchedSeries';

console.log('Load', location.pathname);
new Header('.container');
new SeriesSection('.main');
new PendingSeries('.series');
new WatchedSeries('.series');
