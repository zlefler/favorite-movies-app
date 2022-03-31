import React from 'react';

function MovieCard({ info }) {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src={info.image} alt={info.name} />
      <div className="card-body">
        <h5 className="card-title">{info.rating}</h5>
        <p className="card-text">{`${info.name} (${info.year})`}</p>
        <button href="#" className="btn btn-primary">
          Delete
        </button>
      </div>
    </div>
  );
}
export default MovieCard;
