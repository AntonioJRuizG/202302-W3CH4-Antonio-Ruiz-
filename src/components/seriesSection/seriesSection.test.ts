import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { SeriesSection } from './seriesSection';

describe('Given Section component', () => {
  test('Then it should print the title section', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new SeriesSection('slot');
    expect(element).toBeInstanceOf(SeriesSection);
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
  });
});
