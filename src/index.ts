/* eslint-disable no-new */
import { Header } from './components/header/header';
import { Tasks } from './components/tasks/tasks';
import { TaskStorageRepo } from './services/repository/task.storage.repo';

export type MenuOption = {
  label: string;
  path: string;
};

console.log('Load', location.pathname);
new Header('.container');
if (location.pathname === '/home') {
  new Tasks('main', new TaskStorageRepo());
}
