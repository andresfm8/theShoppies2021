import MoviesActionTypes from "./movies.types";

export const searchMovie = searchCriteria => ({
  	type: MoviesActionTypes.SEARCH_MOVIES,
    payload: searchCriteria
});