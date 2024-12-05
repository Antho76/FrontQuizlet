import { render, screen } from '@testing-library/react';
import QuizzPage from './QuizzPage';

test('renders learn react link', () => {
  render(<QuizzPage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
