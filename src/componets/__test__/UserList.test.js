/* eslint-disable testing-library/no-debugging-utils */
import { render, screen, waitFor } from '@testing-library/react';
import UserList from '../UserList';
// import axios from 'axios';

// jest.mock('axios');
jest.mock('axios', () => ({
  __esModule: true,
  default: {
    get: () => ({
      data: [{ name: 'Kevin Doe', id: 1 }]
    })
  }
}));

describe('UserList', () => {
  it('render UserList', async () => {
    render(<UserList />);
    const headingElement = screen.getByRole('heading', {
      name: /ユーザ一覧/i
    });

    // axios を Mock にしたことで act に関するエラーが出るので、waitFor を利用する
    await waitFor(() => {
      expect(headingElement).toBeInTheDocument();
    });
  });

  // findBy / findAllBy は async / await を使用できる
  // it('should render users list', async () => {
  //   render(<UserList />);
  //   const listElements = await screen.findAllByRole('listitem');
  //   expect(listElements[0]).toBeInTheDocument();
  // });

  it('should render users list: Mock', async () => {
    // axios.get.mockResolvedValue({ data: [{ name: 'John Doe', id: 1 }] });

    // Promiseを設定する場合にはmockImplementationを利用する
    // axios.get.mockImplementation(() =>
    //   Promise.resolve({
    //     data: [{ name: 'John Doe', id: 1 }]
    //   })
    // );

    // Promiseではなくただの値を戻す場合は mockReturnValue を使う。
    // UserList.jsx で async / await を利用している場合は mockReturnValue でもテストは”PASS”する
    // async / awaitではなくthenを利用した記述の場合はテストに”FAIL”する
    // axios.get.mockReturnValue({ data: [{ name: 'John Doe', id: 1 }] });

    render(<UserList />);
    const listElements = await screen.findAllByRole('listitem');
    screen.debug();
    expect(listElements[0]).toBeInTheDocument();
  });
});
