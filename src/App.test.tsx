import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const siteTitle = screen.getByText(/Movie search app/i);
  expect(siteTitle).toBeInTheDocument();
});
