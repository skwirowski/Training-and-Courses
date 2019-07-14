const initialState = {
  fetching: false,
  fetched: false,
  tweets: [],
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_TWEETS": {
      state = { ...state, fetching: true };
      break;
    }
    case "FETCH_TWEETS_REJECTED": {
      state = { ...state, fetching: false, error: action.payload };
      break;
    }
    case "FETCH_TWEETS_FULFILLED": {
      state = {
        ...state,
        fetching: false,
        fetched: true,
        tweets: action.payload
      };
      break;
    }
    case "ADD_TWEET": {
      state = {
        ...state,
        tweets: [ ...state.tweets, action.payload ],
      };
      break;
    }
    case "UPDATE_TWEET": {
      const { id } = action.payload;
      const newTweets = [ ...state.tweets ];
      const tweetToUpdate = newTweets.findIndex(tweet => tweet.id === id);
      newTweets[tweetToUpdate] = action.payload;

      state = {
        ...state,
        tweets: newTweets,
      };
      break;
    }
    case "DELETE_TWEET": {
      state = {
        ...state,
        tweets: state.tweets.filter(tweet => tweet.id !== action.payload),
      };
      break;
    }
    default:
      return state;
  }
  return state;

}

export default reducer;
