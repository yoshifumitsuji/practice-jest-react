import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Power from './Power';

// propsで渡された”電源”が正しく表示されているか
it('renders Power Component', () => {
  render(<Power name='電源' />);
  const nameElement = screen.getByText(/電源 off/i);
  expect(nameElement).toBeInTheDocument();
});

// OFF ボタンが disabled になっているか
it('off button disabled', () => {
  render(<Power name='電源' />);
  const offButtonElement = screen.getByRole('button', { name: 'OFF' });
  expect(offButtonElement).toBeDisabled();
});

// ON ボタンが enable になっているか
it('on button enable', () => {
  render(<Power name='電源' />);
  const offButtonElement = screen.getByRole('button', { name: 'ON' });
  expect(offButtonElement).not.toBeDisabled();
});

// fireEvent を 利用して ON ボタンのクリックイベントをテストする
it('change from off to on using fireEvent', () => {
  render(<Power name='電源' />);
  const onButtonElement = screen.getByRole('button', { name: 'ON' });
  fireEvent.pointerDown(onButtonElement);
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});

// fireEvent を 利用して OFF ボタンのクリックイベントをテストする
it('change from on to off using fireEvent', () => {
  render(<Power name='電源' />);
  const onButtonElement = screen.getByRole('button', { name: 'OFF' });
  fireEvent.pointerDown(onButtonElement);
  fireEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});

// userEvent を 利用して OFF ボタンのクリックイベントをテストする
it('change from off to on using userEvent', () => {
  render(<Power name='電源' />);
  const onButtonElement = screen.getByRole('button', { name: 'ON' });
  userEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});

// userEvent を 利用して OFF ボタンのクリックイベントをテストする
it('change from on to off using userEvent', () => {
  render(<Power name='電源' />);
  const onButtonElement = screen.getByRole('button', { name: 'ON' });
  userEvent.click(onButtonElement);
  expect(onButtonElement).toBeDisabled();
});

// userEvent を使用するとユーザーのクリックイベントを実行できる
// fireEvent　でも可能だが click イベントに付随するイベントは実行されない
