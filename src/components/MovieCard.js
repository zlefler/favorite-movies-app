import React, { useState } from 'react';
import ChangeRating from './ChangeRating';

function MovieCard({ info, onDeleteClick, onRatingChange }) {
  const [editForm, setEditForm] = useState(false);

  let stars = '';
  for (let i = 0; i < info.rating; i++) {
    stars += '⭐';
  }
  for (let i = 0; i < 10 - info.rating; i++) {
    stars += '☆';
  }

  function handleRatingClick() {
    setEditForm(true);
  }

  function handleRatingChange(e, newRating) {
    e.preventDefault();
    setEditForm(false);
    const movieWithNewRating = {
      id: info.id,
      name: info.name,
      year: info.year,
      image: info.image,
      rating: newRating,
    };
    onRatingChange(movieWithNewRating);
  }

  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={info.image} alt={info.name} />
      <div className="card-body">
        <h5 className="card-title">{stars}</h5>
        <p className="card-text">{`${info.name} (${info.year})`}</p>
        <button
          onClick={() => onDeleteClick(info.id)}
          href="#"
          className="btn btn-danger"
        >
          Delete
        </button>
        <button
          onClick={() => handleRatingClick(info)}
          href="#"
          className="btn btn-info"
        >
          Edit Rating
        </button>
        {editForm ? (
          <ChangeRating handleRatingChange={handleRatingChange} />
        ) : null}
      </div>
    </div>
  );
}
export default MovieCard;
