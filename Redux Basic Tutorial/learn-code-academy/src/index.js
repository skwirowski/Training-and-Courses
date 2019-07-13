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
    case "FETCH_USERS_PENDING": {
      state = { ...state, fetching: true };
      break;
    }
    case "FETCH_USERS_REJECTED": {
      state = { ...state, fetching: false, error: action.payload };
      break;
    }
      case "FETCH_USERS_FULFILLED": {
      state = {
        ...state,
        fetching: false,
        fetched: true,
        users: action.payload.data.results
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

store.dispatch({
    type: "FETCH_USERS",
    payload: axios.get("https://randomuser.me/api/?results=5"),
});
