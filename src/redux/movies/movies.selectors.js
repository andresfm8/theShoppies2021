import { createSelector } from 'reselect';

const selectSearchCriteria = state => state.movies;

export const retrieveQuery = createSelector(
  [selectSearchCriteria],
  movies => movies.searchCriteria
);

export const selectMovie = createSelector(
  [selectSearchCriteria],
  movies => movies.movie
);