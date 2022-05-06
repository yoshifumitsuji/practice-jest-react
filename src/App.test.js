import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello', () => {
  render(<App />);
  // 複数の要素があるので、getBy... エラーになる。
  // const element = screen.getByText('Hello');
  // 複数の要素があるのでがある場合は getAll... を使用する。
  const elements = screen.getAllByText('Hello');
  screen.debug(elements);
  // getAllBy は配列の形になるので toBeInTheDocument は使えない。
  // expect(element).toBeInTheDocument();
  // getAllBy を使った場合は toHaveLength を使う。
  expect(elements).toHaveLength(2);
});
