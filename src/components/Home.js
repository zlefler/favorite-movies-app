import React from 'react';

function Home({ movies }) {
  return (
    <div className="home">
      <h1 className="home">Welcome to The Movie Database!</h1>
      <h2 className="home">
        Keep track of all the movies you've seen in one easy location.
      </h2>
      <h3 className="home">
        Currently you have logged {movies.length} movies.
      </h3>
    </div>
  );
}

export default Home;
