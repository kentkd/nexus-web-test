import { render, screen } from '@testing-library/react';
import MovieList from './MovieList';

describe('MovieList test', () => {
	const movies = [
    {
      Poster: "MOCK_POSTER",
      Title: "MOCK_TITLE",
      Type: "MOCK_TYPE",
      Year: "MOCK_YEAR",
      imdbID: "MOCK_ID",
    },
    {
      Poster: "MOCK_POSTER 2",
      Title: "MOCK_TITLE 2",
      Type: "MOCK_TYPE 2",
      Year: "MOCK_YEAR 2",
      imdbID: "MOCK_ID 2",
    },
  ];

	it('should render movies when data is available', () => {
		render(<MovieList movies={movies} />)
		expect(screen.getByText(movies[0].Title)).toBeVisible();
		expect(screen.getByText(movies[0].Year)).toBeVisible();
		expect(screen.getByAltText(movies[0].Title)).toBeVisible();
	});

	it('should display a placeholder text when there is no data', () => {
		render(<MovieList movies={[]} />);
		expect(screen.getByText('There is no movie found')).toBeVisible();
	});
})
