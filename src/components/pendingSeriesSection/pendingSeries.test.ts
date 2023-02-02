import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PendingSeries } from './pendingSeries';
import { SerieStructure } from '../../models/serie';

describe('Given Section component', () => {
  test('Then it should print the title section', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new PendingSeries('slot', SerieStructure[0].name);
    expect(element).toBeInstanceOf(PendingSeries);
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
  });
});
