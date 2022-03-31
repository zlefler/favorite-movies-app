import React, { useState, useEffect } from 'react';
import MoviesList from './MoviesList';

function App() {
  const [movies, setMovies] = useState('');

  useEffect(
    () =>
      fetch('http://localhost:3000/movies')
        .then((res) => res.json())
        .then((data) => setMovies(data)),
    []
  );

  return (
    <h1>
      <MoviesList movies={movies} />
    </h1>
  );
}

export default App;
