import React, { useState } from 'react';
import MovieCard from './MovieCard';

function MoviesList({ movies, onDeleteClick, onRatingChange }) {
  return (
    <div>
      <h1>My Favorite Movies</h1>
      {movies
        ? movies.map((movie) => {
            return (
              <MovieCard
                onRatingChange={onRatingChange}
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
