import { combineReducers } from 'redux';
import actorsReducer from './app/actors/redux';
import moviesReducers from './app/movies/redux';

const rootReducer = combineReducers({
  actors: actorsReducer,
  movies: moviesReducers
});

export default rootReducer;