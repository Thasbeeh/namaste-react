import { render, screen } from '@testing-library/react';
import RestaurantCard, { withOpenLabel } from '../RestaurantCard';
import MOCK_DATA from '../mocks/RestaurantCard.mock.json';
import '@testing-library/jest-dom';

it('should load the RestaurantCard component with props Data', () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const name = screen.getByText('Hotel Swaminatha Vaibhavam');
  expect(name).toBeInTheDocument();
});

it('should render RestaurantCard component with Openlabel Data', () => {
  const OpenRestaurantCard = withOpenLabel(RestaurantCard);
  render(<OpenRestaurantCard resData={MOCK_DATA} />);

  const label = screen.getByText('Open');
  expect(label).toBeInTheDocument();
});
