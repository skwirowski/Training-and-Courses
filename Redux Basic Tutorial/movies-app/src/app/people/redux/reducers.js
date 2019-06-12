import types from './types';

const INITIAL_STATE = {
    listName: 'People',
    list: [
        'Leroy Campbell',
        'Maxine Murray',
        'Wendy Larson',
        'Ian Hunter'
    ]
};

const peopleReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case types.ADD_PERSON:
            return {
                ...state, list: [...state.list, action.item]
            }
        case types.RESET_PEOPLE:
            return {
                ...state, list: []
            }
        default:
            return state;
    }
};

export default peopleReducer;