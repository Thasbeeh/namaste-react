import { render, screen } from '@testing-library/react';
import Contact from '../Contact';
import '@testing-library/jest-dom';

describe('Contact Us page test cases', () => {
  test('components should load', () => {
    render(<Contact />);
    const heading = screen.getByRole('heading');
    expect(heading).toBeInTheDocument();
  });

  test('button should present', () => {
    render(<Contact />);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
  });

  test('should load input name inside Contact component', () => {
    render(<Contact />);
    const name = screen.getByPlaceholderText('name');
    expect(name).toBeInTheDocument();
  });

  test('should load 2 input boxes inside Contact component', () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole('textbox');
    expect(inputBoxes.length).toBe(2);
  });
});
