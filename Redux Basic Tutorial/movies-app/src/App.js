import React, { Component } from 'react';
import './App.css';
import Movies from './app/containers/Movies';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Movies />
      </div>
    );
  }
}

export default App;
