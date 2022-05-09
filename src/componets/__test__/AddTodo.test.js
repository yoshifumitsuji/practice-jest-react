/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, fireEvent } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import AddTodo from '../AddTodo';

describe('AddTodo', () => {
  it('renders label element', () => {
    render(<AddTodo />);
    const labelElement = screen.getByLabelText('Add Task :');
    expect(labelElement).toBeInTheDocument();
  });

  it('renders input element', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);
    expect(inputElement).toBeInTheDocument();
  });

  it('input element should change', () => {
    render(<AddTodo />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);

    fireEvent.change(inputElement, {
      target: { value: 'Learn Testing Library' }
    });
    screen.debug(inputElement);

    expect(inputElement.value).toBe('Learn Testing Library');
  });

  it('input text should remove where add button click', () => {
    render(<AddTodo setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);

    fireEvent.change(inputElement, {
      target: { value: 'Learn Testing Library' }
    });

    const buttonElement = screen.getByRole('button', { name: '追加' });
    fireEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });

  // UserEvent を使用してイベントをテストする。
  // fireEvent よりも記述が簡単。
  it('input text should remove where add button click: UserEvent', () => {
    render(<AddTodo setTodos={jest.fn()} />);
    const inputElement = screen.getByPlaceholderText(/Add New Task/i);

    userEvent.type(inputElement, 'Learn Testing Library');

    const buttonElement = screen.getByRole('button', { name: '追加' });
    userEvent.click(buttonElement);

    expect(inputElement.value).toBe('');
  });
});
