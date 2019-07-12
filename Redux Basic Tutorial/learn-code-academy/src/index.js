// import React from 'react';
// import ReactDOM from 'react-dom';
// import './index.css';
// import App from './App';
// import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));

// // If you want your app to work offline and load faster, you can change
// // unregister() to register() below. Note this comes with some pitfalls.
// // Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();

import { createStore } from 'redux';

const reducer = function(state, action) {
    if(action.type === "INC") {
        return state + action.payload;
    }
    if(action.type === "DEC") {
        return state - action.payload;
    }
    return state;
};

const store = createStore(reducer, 0);

store.subscribe(() => {
    console.log("store changed", store.getState())
});

store.dispatch({type: "INC", payload: 5});
store.dispatch({type: "DEC", payload: 3});