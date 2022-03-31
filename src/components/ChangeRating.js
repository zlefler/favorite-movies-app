import React, { useState } from 'react';

function ChangeRating({ handleRatingChange }) {
  const [rating, setRating] = useState('');

  return (
    <div>
      <form onSubmit={(e) => handleRatingChange(e, rating)}>
        <label htmlFor="new-rating">New Rating</label>
        <input
          onChange={(e) => setRating(e.target.value)}
          type="text"
          name="new-rating"
          value={rating}
        />
        <button className="btn btn-secondary" type="submit">
          Save
        </button>
      </form>
    </div>
  );
}

export default ChangeRating;
