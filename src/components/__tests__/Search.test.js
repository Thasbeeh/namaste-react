import { fireEvent, render, screen } from '@testing-library/react';
import Body from '../Body';
import MOCK_DATA from '../mocks/Restaurants.mock';
import { act } from 'react';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it('Should Search Res List for coffee text input', async () => {
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Body />
      </BrowserRouter>,
    ),
  );

  // expect 20 cards before search
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(20);

  const searchBtn = screen.getByRole('button', { name: 'Search' });
  const searchInput = screen.getByTestId('searchInput');
  fireEvent.change(searchInput, { target: { value: 'coffee' } });
  fireEvent.click(searchBtn);

  // expect 2 cards with name coffee
  const cardsAfterSearch = screen.getAllByTestId('resCard');
  expect(cardsAfterSearch.length).toBe(1);
});

it('Should filter top rated cards', async () => {
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Body />
      </BrowserRouter>,
    ),
  );

  // expect 20 cards before search
  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(20);

  const topRatedBtn = screen.getByRole('button', { name: 'Top Rated Restaurants' });
  fireEvent.click(topRatedBtn);
  const topRatedResCards = screen.getAllByTestId('resCard');
  expect(topRatedResCards.length).toBe(13);
});

it('Should render RestaurantCard without Openlabel', async () => {
  await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Body />
      </BrowserRouter>,
    ),
  );

  const cardsBeforeSearch = screen.getAllByTestId('resCard');
  expect(cardsBeforeSearch.length).toBe(20);

  // one restaurant is not open
  expect(screen.getAllByText('Open').length).toBe(19);
});
