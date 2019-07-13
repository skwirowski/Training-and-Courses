import { applyMiddleware, combineReducers, createStore } from 'redux';

const userReducer = (state = {}, action) => {
    switch (action.type) {
        case 'CHANGE_NAME': {
            state = { ...state, name: action.payload };
            break;
        }
        case 'CHANGE_AGE': {
            state = { ...state, age: action.payload };
            break;
        }
        default:
        return state;
    }
    return state;
};

const tweetsReducer = (state = [], action) => {
    return state;
};

const logger = (store) => (next) => (action) => {
    console.log('action fired', action);
    next(action);
}

const middleware = applyMiddleware(logger);

const reducers = combineReducers({
    user: userReducer,
    tweets: tweetsReducer,
})

const store = createStore(reducers, middleware);

store.subscribe(() => {
    console.log('store changed', store.getState());
});


store.dispatch({ type: 'CHANGE_NAME', payload: 'Paul' });
store.dispatch({ type: 'CHANGE_AGE', payload: 33 });