import { MovieAPI, MovieDetail, MovieAPIResponse } from './MovieAPI';

describe('MovieAPI test', () => {

	afterEach(() => {
    jest.clearAllMocks();
  });

	const mockMovie = {
		Poster: 'MOCK_POSTER',
		Title: 'MOCK_TITLE',
		Type: 'MOCK_TYPE',
		Year: 'MOCK_YEAR',
		imdbID: 'MOCK_ID'
	}

	const mockSearchResult = {
		Response: "True",
		Search: [
			mockMovie
		],
		totalResults: "1"
	}

	it('should fetch movies data based on keywords provided', async () => {
		const spy = jest.spyOn(window, "fetch");

		spy.mockResolvedValueOnce({
      ok: true,
      json: () => Promise.resolve(mockSearchResult),
    } as any);

		expect(await MovieAPI.getMovies('Mock movie')).toEqual(mockSearchResult)
	});

	it('should throw an error if keywords are not provided', async () => {
		expect(MovieAPI.getMovies('')).rejects.toThrowError();
	})


	it('should throw an error if the API call fails', async () => {
		const spy = jest.spyOn(window, "fetch");

		spy.mockRejectedValueOnce({
      message: 'DUMMY_ERR'
    } as any);
		expect(MovieAPI.getMovies('')).rejects.toThrowError();
	})
})
