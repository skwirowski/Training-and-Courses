import types from './types';

const INITIAL_STATE = {
	listName: 'Favourite Actors',
	list: [
		'Sylvester Stallone',
		'Arnold Schwarzenegger',
		'Jean-Claude van Damme'
	]
};

const actorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case types.ADD_ACTOR:
      return {
        ...state, list: [...state.list, action.item]
      }
    case types.RESET_ACTORS:
      return {
        ...state, list: []
      }
    default:
      return state;
  }
}

export default actorsReducer;