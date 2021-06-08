export interface MovieDetail {
  Poster: string;
  Title: string;
  Type: string;
  Year: string;
  imdbID: string;
}

export interface MovieAPIResponse {
  Response: string;
  Search: MovieDetail[];
  totalResults: string;
}

export class MovieAPI {
  private static API_KEY = "b9bd48a6";

  static async getMovies(keywords: string): Promise<MovieAPIResponse> {
    if (!keywords && keywords.trim() === "") {
      throw new Error("Keywords are not provided");
    }

    const endpoint = `http://www.omdbapi.com/?apikey=${this.API_KEY}&s=${keywords}&type=movie`;
    return fetch(endpoint)
      .then((response) => response.json())
      .then((data) => data)
      .catch((error) => {
        throw new Error(error);
      });
  }
}
