import { screen } from '@testing-library/dom';
import '@testing-library/jest-dom';
import { Header } from './header';

describe('Given Header component', () => {
  test('Then it should print the title', () => {
    document.body.innerHTML = '<slot></slot>';
    const element = new Header('slot');
    expect(element).toBeInstanceOf(Header);
    const h1 = screen.getByRole('heading');
    expect(h1).toBeInTheDocument();
  });
});
