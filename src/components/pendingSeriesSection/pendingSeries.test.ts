import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { PendingSeries } from './pendingSeries';

describe('Given Section component', () => {
  test('Then it should print the title section', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new PendingSeries('slot');
    expect(element).toBeInstanceOf(PendingSeries);
    const h2 = screen.getByRole('heading');
    expect(h2).toBeInTheDocument();
  });
});
