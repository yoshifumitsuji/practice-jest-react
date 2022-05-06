import { render, screen } from '@testing-library/react';
import App from './App';

it('renders heading', () => {
  render(<App />);
  // heading が 1 つの時は通るけど、複数あるとエラーになる。
  // const headElement = screen.getByRole('heading');
  // getByRole のオプション name プロパティに タグのテキストを指定することができる。
  const headElement = screen.getByRole('heading', { name: 'Hello' });
  // li 要素の Role は listitem で取得できる。
  const listElements = screen.getAllByRole('listitem');
  screen.debug(headElement);
  screen.debug(listElements);
  expect(headElement).toBeInTheDocument();
  expect(listElements).toHaveLength(3);
  // macher には toEqual も使用できる。
  expect(listElements.length).toEqual(3);
});
