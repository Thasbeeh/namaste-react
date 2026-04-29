import { render, screen } from '@testing-library/react';
import ListItems from '../ListItems';
import appStore from '../../utils/appStore';
import MOCK_DATA from '../mocks/ListItem.mock.json';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom';

const renderHead = () => {
  return render(
    <Provider store={appStore}>
      <ListItems items={MOCK_DATA} />
    </Provider>,
  );
};

it('Should render ListItem component with price if available', () => {
  renderHead();
  expect(screen.getByText('₹ 439')).toBeInTheDocument();
});

it('Should render ListItem component with defaultPrice if available', () => {
  renderHead();
  expect(screen.getByText('₹ 359')).toBeInTheDocument();
});
