import SearchBox from './SearchBox';
import { screen, render, fireEvent } from '@testing-library/react';

describe('SearchBox test', () => {
	it('should render the component correctly', () => {
		render(<SearchBox handleSearch={jest.fn()} />)

		const searchBoxEl = screen.getByPlaceholderText("Search a movie");
		const searchButton = screen.getByRole("button");

		expect(searchBoxEl).toBeVisible();
		expect(searchButton).toBeVisible();
	})

	it('should handle searching a movie', () => {
		const handleSearch = jest.fn();
    render(<SearchBox handleSearch={handleSearch} />);

    const searchBoxEl = screen.getByPlaceholderText("Search a movie");
    const searchButton = screen.getByRole("button");

    fireEvent.change(searchBoxEl, { target: { value: "Mock movie" } });
    fireEvent.click(searchButton);

    expect(handleSearch).toHaveBeenCalled();
	})

})
