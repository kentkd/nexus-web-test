import React, { useState } from "react";
import SearchBox from "./components/SearchBox/SearchBox";
import "./App.css";
import { MovieAPI } from './apis/MovieAPI';

function App() {
  const [movies, setMovies] = useState([])

  const handleSearch = async (keywords: string) => {

    const fetchedMovies = await MovieAPI.getMovies(keywords);
    if (fetchedMovies.length > 0) {
      setMovies(fetchedMovies)
    }
  };

  return (
    <main className="App">
      <section className="container">
        <header className="site-header">
          <h1>Movie search app</h1>
          <SearchBox handleSearch={handleSearch} />
        </header>

      </section>
    </main>
  );
}

export default App;
