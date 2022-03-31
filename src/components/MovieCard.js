import React from 'react';

function MovieCard({ info, onDeleteClick }) {
  let stars = '';
  for (let i = 0; i < info.rating; i++) {
    stars += '⭐';
  }
  for (let i = 0; i < 10 - info.rating; i++) {
    stars += '☆';
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
          className="btn btn-primary"
        >
          Delete
        </button>
      </div>
    </div>
  );
}
export default MovieCard;
