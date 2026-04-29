import { fireEvent, render, screen } from '@testing-library/react';
import Header from '../Header';
import appStore from '../../utils/appStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import '@testing-library/jest-dom';
import { act } from 'react';
import { clearItems } from '../../utils/cartSlice';

const renderHead = async () => {
  return await act(async () =>
    render(
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>,
    ),
  );
};

beforeEach(() => appStore.dispatch(clearItems()));

describe('Header Component with Cart items', () => {
  it('Should render with Cart items zero', async () => {
    await renderHead();

    const cartItem = screen.getByText('Cart (0 - items)');
    expect(cartItem).toBeInTheDocument();
  });

  it('Should render with Cart item', async () => {
    await renderHead();

    const cartItem = screen.getByText(/Cart/);
    expect(cartItem).toBeInTheDocument();
  });
});

describe('Header Component with online status', () => {
  it('Should render with online status', async () => {
    await renderHead();

    expect(screen.getByText('Online status: ✅')).toBeInTheDocument();
  });

  it('Should render with offline status', async () => {
    await renderHead();

    await act(() => window.dispatchEvent(new Event('offline')));
    expect(screen.getByText('Online status: 🔴')).toBeInTheDocument();
  });
});

describe('Header Component with Authentication Button', () => {
  it('Should render with Logout button', async () => {
    await renderHead();

    const authBtn = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(authBtn);
    expect(screen.getByRole('button', { name: 'Logout' })).toBeInTheDocument();
  });

  it('Should update as Login when clicked on Logout', async () => {
    await renderHead();

    const authBtn = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(authBtn);
    fireEvent.click(authBtn);
    expect(screen.getByRole('button', { name: 'Login' })).toBeInTheDocument();
  });
});
