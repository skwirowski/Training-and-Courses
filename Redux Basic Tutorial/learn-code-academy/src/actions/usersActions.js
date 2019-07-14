import axios from "axios";

const fetchUsers = () => {
  return dispatch => {
    dispatch({ type: "FETCH_USERS" });
    axios
      .get("https://randomuser.me/api/?results=5")
      .then(response => {
        dispatch({
          type: "FETCH_USERS_FULFILLED",
          payload: response.data.results
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_USERS_REJECTED",
          payload: error
        });
      });
  };
};

const setUserName = name => {
  return {
    type: "SET_USER_NAME",
    payload: name
  };
};

const setUserAge = age => {
  return {
    type: "SET_USER_AGE",
    payload: age
  };
};

export default {
  fetchUsers,
  setUserName,
  setUserAge,
};
