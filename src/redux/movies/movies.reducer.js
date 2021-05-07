import MoviesActionTypes from "./movies.types";

const INITIAL_STATE = {
  searchCriteria: null,
  movie: null
};

const moviesReducer = ( state = INITIAL_STATE, action ) => {
  switch(action.type) {
    case MoviesActionTypes.SEARCH_MOVIES:
      return {
        ...state,
        searchCriteria: action.payload
      };
    case MoviesActionTypes.FETCH_MOVIE:
      return {
        ...state,
        movie: action.payload
      };
    default:
      return state;
  }
}

export default moviesReducer;