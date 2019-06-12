import { combineReducers } from 'redux';
import actorsReducer from './app/actors/redux';
import moviesReducers from './app/movies/redux';
import peopleReducers from './app/people/redux';

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducers,
  people: peopleReducers
});

export default rootReducer;