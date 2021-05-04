import NomineeListActionTypes from "./nominee-list.types";

export const addToNomineeList = movie => ({
  type: NomineeListActionTypes.ADD_TO_NOMINEE_LIST,
  payload: movie
});

export const setIsListComplete = isComplete => ({
  type: NomineeListActionTypes.SET_LIST_COMPLETE,
  payload: isComplete
});