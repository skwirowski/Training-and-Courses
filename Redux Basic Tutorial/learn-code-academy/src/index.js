import { applyMiddleware, createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import axios from "axios";
import promise from "redux-promise-middleware";

const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS_START": {
      state = { ...state, fetching: true };
      break;
    }
    case "FETCH_USERS_ERROR": {
      state = { ...state, fetching: false, error: action.payload };
      break;
    }
    case "RECEIVE_USERS": {
      state = {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload
      };
      break;
    }
    default:
      return state;
  }
  return state;
};

const middleware = applyMiddleware(logger, thunk, promise);
const store = createStore(reducer, middleware);

store.dispatch(dispatch => {
  dispatch({ type: "FETCH_USERS_START" });
  axios
    .get("https://randomuser.me/api/?results=5")
    .then(response => {
      dispatch({ type: "RECEIVE_USERS", payload: response.data.results });
    })
    .catch(error => {
      dispatch({ type: "FETCH_USERS_ERROR", payload: error });
    });
});
