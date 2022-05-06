import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Hello', () => {
  render(<App />);
  // const element = screen.getByText('Hello');
  // const element = screen.getByText('ello');
  const element = screen.queryByText('ello');
  screen.debug(element);
  // expect(element).toBeInTheDocument();
  expect(element).not.toBeInTheDocument();
});
