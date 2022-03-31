import React from 'react';
import MovieCard from './MovieCard';

function MoviesList({ movies }) {
  return (
    <div>
      <h1>My Favorite Movies</h1>
      {movies
        ? movies.map((movie) => {
            return <MovieCard key={movie.id} info={movie} />;
          })
        : null}
    </div>
  );
}

export default MoviesList;
