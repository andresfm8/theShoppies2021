import NomineeListActionTypes from "./nominee-list.types";

export const addToNomineeList = movie => ({
  type: NomineeListActionTypes.ADD_TO_NOMINEE_LIST,
  payload: movie
});

export const removeFromNomineeList = movie => ({
  type: NomineeListActionTypes.REMOVE_FROM_NOMINEE_LIST,
  payload: movie
});

export const clearNomineeList = () => ({
  type: NomineeListActionTypes.CLEAR_NOMINEE_LIST
});

export const setIsListComplete = isComplete => ({
  type: NomineeListActionTypes.SET_LIST_COMPLETE,
  payload: isComplete
});

export const setIsMovieOpen = isOpen => ({
  type: NomineeListActionTypes.SET_MOVIE_OPEN,
  payload: isOpen
})