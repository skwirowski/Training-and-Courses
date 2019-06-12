import React, { Component } from 'react';
import './App.css';
import Movies from './app/containers/Movies';
import Actors from './app/containers/Actors';
import MoviesForm from './app/components/MoviesForm';
import ActorsForm from './app/components/ActorsForm';
import People from './app/containers/People'
import PeopleForm from './app/components/PeopleForm';

class App extends Component {
  render() {
    const styles = {
      width: '80%',
      margin: 'auto',
      padding: '50px'
    }

    return (
      <div className="App">
        <div style={{...styles, backgroundColor: '#dedede'}}>
          <Actors />
          <ActorsForm />
        </div>
        <div style={{...styles, backgroundColor: '#f0f1e6'}}>
          <Movies />
          <MoviesForm />
        </div>
        <div style={{...styles, backgroundColor: '#deefe3'}}>
          <People/>
          <PeopleForm />
        </div>
      </div>
    );
  }
}

export default App;
