import MoviesActionTypes from "./movies.types";

export const searchMovie = searchCriteria => ({
  	type: MoviesActionTypes.SEARCH_MOVIES,
    payload: searchCriteria
});

export const fetchMovie = movie => ({
  type: MoviesActionTypes.FETCH_MOVIE,
  payload: movie
});