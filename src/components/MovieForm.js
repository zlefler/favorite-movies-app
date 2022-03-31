import React, { useState } from 'react';

function MovieForm() {
  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');

  return (
    <form action="">
      <input
        type="text"
        name="title"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <input
        type="text"
        name="year"
        onChange={(e) => setYear(e.target.value)}
        value={year}
      />
      <input
        type="text"
        name="rating"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />
    </form>
  );
}

export default MovieForm;
