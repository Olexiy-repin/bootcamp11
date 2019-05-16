import React, { Component } from 'react';
import Reader from './Reader/Reader';
import publications from './publication.json';
import movieDb from './movie.json';
import MoviePage from './MoviePage/MoviePage';
import Dashboard from './Dashboard/Dashboard';

class App extends Component {
  state = {};

  render() {
    return (
      <>
        <Reader item={publications} />
        <MoviePage item={movieDb} />
        <Dashboard />
      </>
    );
  }
}

export default App;
