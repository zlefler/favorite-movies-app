import React, { useState, useEffect } from 'react';
import MoviesList from './MoviesList';
import MovieForm from './MovieForm';

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
    <>
      <MovieForm />
      <MoviesList movies={movies} />
    </>
  );
}

export default App;
