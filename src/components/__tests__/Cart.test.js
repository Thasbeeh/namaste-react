import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import MOCK_DATA from '../mocks/RestaurantMenu.mock.json';
import { act } from 'react';
import { Provider } from 'react-redux';
import appStore from '../../utils/appStore';
import Header from '../Header';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import Cart from '../Cart';
import { clearItems } from '../../utils/cartSlice';

global.fetch = jest.fn(() =>
  Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA),
  }),
);

describe('Add & Remove items from Cart - Integration test', () => {
  beforeEach(() => appStore.dispatch(clearItems()));

  it('Should Load Restaurant Menu Component with Header Component', async () => {
    await act(async () =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
          ,
        </BrowserRouter>,
      ),
    );
    expect(screen.getByRole('link', { name: 'Cart (0 - items)' })).toBeInTheDocument();

    const accordions = screen.getAllByTestId('menuCategory');
    expect(accordions.length).toBe(17);
  });

  it('Should load category items when clicked category', async () => {
    await act(async () =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>,
      ),
    );

    const categoryAccordion = screen.getByText('Recommended (2)');
    fireEvent.click(categoryAccordion);

    expect(screen.getAllByTestId('listItem').length).toBe(2);
  });

  it('Should show cart item number as 1 when 1 item added', async () => {
    await act(async () =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>,
      ),
    );
    const categoryAccordion = screen.getByText('Recommended (2)');
    fireEvent.click(categoryAccordion);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[0]);
    expect(screen.getByRole('link', { name: 'Cart (1 - items)' })).toBeInTheDocument();
  });

  it('Should show cart item number as 2 when 2 items added', async () => {
    await act(async () =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
          ,
        </BrowserRouter>,
      ),
    );

    const categoryAccordion = screen.getByText('Recommended (2)');
    fireEvent.click(categoryAccordion);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    expect(screen.getByRole('link', { name: 'Cart (2 - items)' })).toBeInTheDocument();
  });

  it('Should render Cart component with 2 items when 2 items added', async () => {
    await act(async () =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>,
      ),
    );
    const categoryAccordion = screen.getByText('Recommended (2)');
    fireEvent.click(categoryAccordion);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[0]);
    fireEvent.click(addBtn[1]);
    let listItems = screen.getAllByTestId('listItem');
    expect(listItems.length).toBe(4);
  });

  it('Should clear on clicking Clear Cart', async () => {
    await act(async () =>
      render(
        <BrowserRouter
          future={{
            v7_startTransition: true,
            v7_relativeSplatPath: true,
          }}
        >
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
            <Cart />
          </Provider>
        </BrowserRouter>,
      ),
    );

    const categoryAccordion = screen.getByText('Recommended (2)');
    fireEvent.click(categoryAccordion);
    const addBtn = screen.getAllByRole('button', { name: 'ADD' });
    fireEvent.click(addBtn[0]);

    fireEvent.click(screen.getByRole('button', { name: 'Clear Cart' }));
    const listItems = screen.getAllByTestId('listItem');

    expect(screen.getByText('Cart is empty. Add items to the cart!')).toBeInTheDocument;
    expect(listItems.length).toBe(2);
  });
});
