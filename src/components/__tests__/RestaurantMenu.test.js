import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/RestaurantMenu.mock.json';
import { act } from 'react';
import '@testing-library/jest-dom';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

test.only('Should Close accordion if another accordion was clicked', async () => {
  await act(async () =>
    render(
      <Provider store={appStore}>
        <RestaurantMenu />
      </Provider>,
    ),
  );
  const accordion1 = screen.getByText('Recommended (2)');
  fireEvent.click(accordion1);
  expect(screen.getAllByTestId('listItem').length).toBe(2);

  fireEvent.click(accordion1);
  expect(screen.queryByTestId('listItem')).not.toBeInTheDocument();
});
