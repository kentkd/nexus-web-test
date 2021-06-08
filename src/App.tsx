import React, { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import MovieList from "./components/MovieList/MovieList";
import "./App.css";
import { MovieAPI, MovieDetail } from './apis/MovieAPI';

function App() {
  const [movies, setMovies] = useState([] as MovieDetail[])

  const handleSearch = async (keywords: string) => {

    const fetchedMovies = await MovieAPI.getMovies(keywords);
    if (fetchedMovies?.Search.length > 0) {
      setMovies(fetchedMovies.Search)
    }
  };

  return (
    <main className="App">
      <section className="container">
        <header className="site-header">
          <h1>Movie search app</h1>
          <SearchBox handleSearch={handleSearch} />
        </header>
        <section>
          <MovieList movies={movies} />
        </section>
      </section>
    </main>
  );
}

export default App;
