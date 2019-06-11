import React, { Component } from 'react';
import './App.css';
import Movies from './app/containers/Movies';
import Actors from './app/containers/Actors';
import MoviesForm from './app/components/MoviesForm';
import ActorsForm from './app/components/ActorsForm';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Actors />
        <ActorsForm />
        <Movies />
        <MoviesForm />
      </div>
    );
  }
}

export default App;
