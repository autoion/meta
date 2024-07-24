import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('renders Shoe Shop title', () => {
  render(<App />);
  const titleElement = screen.getByText(/Shoe Shop/i);
  expect(titleElement).toBeInTheDocument();
});
