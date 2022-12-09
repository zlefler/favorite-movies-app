import React, { useState } from 'react';

function MovieForm({ onSubmit }) {
  const [name, setName] = useState('');
  const [year, setYear] = useState('');
  const [rating, setRating] = useState('');
  const [image, setImage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    const newMovie = {
      name: name,
      year: year,
      image: image,
      rating: rating,
    };
    onSubmit(newMovie);
    setName('');
    setYear('');
    setRating('');
    setImage('');
    alert('New Movie Added!');
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title </label>
      <input
        type="text"
        name="title"
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <label htmlFor="year">Year </label>
      <input
        type="text"
        name="year"
        onChange={(e) => setYear(e.target.value)}
        value={year}
      />
      <label htmlFor="image">Image </label>
      <input
        type="text"
        name="image"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <label htmlFor="rating">Rating (out of ten) </label>
      <input
        type="text"
        name="rating"
        onChange={(e) => setRating(e.target.value)}
        value={rating}
      />
      <button type="submit">Add</button>
    </form>
  );
}

export default MovieForm;
