import MoviesActionTypes from "./movies.types";

const INITIAL_STATE = {
  searchCriteria: null
};

const moviesReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case MoviesActionTypes.SEARCH_MOVIES:
      return {
        ...state,
        searchCriteria: action.payload
      };
    default:
      return state;
  }
}

export default moviesReducer;