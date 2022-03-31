import React, { useState, useEffect } from 'react';
import MoviesList from './MoviesList';

function App() {
  const [movies, setMovies] = useState('');

  fetch('http://localhost:3000/movies')
    .then((res) => res.json())
    .then((data) => console.log(data));

  return (
    <h1>
      <MoviesList movies={movies} />
    </h1>
  );
}

export default App;
