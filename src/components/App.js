import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import MoviesList from './MoviesList';
import MovieForm from './MovieForm';
import Home from './Home';
import NavBar from './NavBar';

function App() {
  const [movies, setMovies] = useState('');

  useEffect(
    () =>
      fetch('http://localhost:3000/movies')
        .then((res) => res.json())
        .then((data) => setMovies(data)),
    []
  );

  function onSubmit(newMovie) {
    fetch('http://localhost:3000/movies', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovie),
    })
      .then((res) => res.json())
      .then((data) => {
        setMovies([...movies, data]);
      });
  }

  function onDeleteClick(id) {
    fetch(`http://localhost:3000/movies/${id}`, {
      method: 'DELETE',
    })
      .then((res) => res.json())
      .then(setMovies(movies.filter((movie) => movie.id !== id)));
  }

  function onRatingChange(newMovieObj) {
    console.log(newMovieObj);
    fetch(`http://localhost:3000/movies/${newMovieObj.id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newMovieObj),
    })
      .then((res) => res.json())
      .then((data) =>
        setMovies(movies.map((movie) => (movie.id === data.id ? data : movie)))
      );
  }

  return (
    <>
      <NavBar />
      <Switch>
        <Route exact path="/">
          <Home movies={movies} />
        </Route>
        <Route path="/form">
          <MovieForm onSubmit={onSubmit} />
        </Route>
        <Route path="/list">
          <MoviesList
            onRatingChange={onRatingChange}
            onDeleteClick={onDeleteClick}
            movies={movies}
          />
        </Route>
      </Switch>
    </>
  );
}

export default App;
