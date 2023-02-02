import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { WatchedSeries } from './watchedSeries';

describe('Given Section component', () => {
  test('Then it should print the title section', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new WatchedSeries('slot');
    expect(element).toBeInstanceOf(WatchedSeries);
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
  });
});
