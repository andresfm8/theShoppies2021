import NomineeListActionTypes from "./nominee-list.types";

export const addToNomineeList = movie => ({
  type: NomineeListActionTypes.ADD_TO_NOMINEE_LIST,
  payload: movie
})