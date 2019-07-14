import axios from "axios";

const fetchTweets = () => {
  return dispatch => {
    dispatch({ type: "FETCH_TWEETS" });
    axios
      .get("https://jsonplaceholder.typicode.com/comments?postId=1")
      .then(response => {
        dispatch({
          type: "FETCH_TWEETS_FULFILLED",
          payload: response.data
        });
      })
      .catch(error => {
        dispatch({
          type: "FETCH_TWEETS_REJECTED",
          payload: error
        });
      });
  };
};

const addTweet = (id, text) => {
  return {
    type: "ADD_TWEET",
    payload: {
      id,
      text
    }
  };
};

const updateTweet = (id, text) => {
  return {
    type: "UPDATE_TWEET",
    payload: {
      id,
      text
    }
  };
};

const deleteTweet = id => {
  return {
    type: "DELETE_TWEET",
    payload: id
  };
};

export default {
  fetchTweets,
  addTweet,
  updateTweet,
  deleteTweet,
};
