import React from 'react';
import { connect } from 'react-redux';

const Movies = ({movies}) => {
  return (
    <ul>
      { movies.list.map((movie, index) => (
        <li key={index}>{movie}</li>
      ))}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  movies: state.movies
})

export default connect(mapStateToProps, {})(Movies);