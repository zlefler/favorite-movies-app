import React from 'react';
import MovieCard from './MovieCard';

function MoviesList({ movies, onDeleteClick }) {
  return (
    <div>
      <h1>My Favorite Movies</h1>
      {movies
        ? movies.map((movie) => {
            return (
              <MovieCard
                onDeleteClick={onDeleteClick}
                key={movie.id}
                info={movie}
              />
            );
          })
        : null}
    </div>
  );
}

export default MoviesList;
