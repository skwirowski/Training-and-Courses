import React from 'react';
import { connect } from 'react-redux';
import tweetActions from './actions/tweetActions';
import usersActions from './actions/usersActions';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchTweets: tweets => dispatch(tweetActions.fetchTweets()),
  
});

export default connect(null, mapDispatchToProps)(App);
