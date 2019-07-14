const initialState = {
  fetching: false,
  fetched: false,
  users: [],
  user: {
    id: '',
    name: '',
    age: null,
  },
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_USERS": {
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
        users: action.payload,
        user: { id: "123", name: "Paul", age: 33 }
      };
      break;
    }
    case "SET_USER_NAME": {
      state = {
        ...state,
        user: { ...state.user, name: action.payload },
      };
      break;
    }
    case "SET_USER_AGE": {
      state = {
        ...state,
        user: { ...state.user, age: action.payload },
      };
      break;
    }
    default:
      return state;
  }
  return state;

}

export default reducer;
