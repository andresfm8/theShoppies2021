import NomineeListActionTypes from "./nominee-list.types";
import { addMovieToList, removeMovieFromList } from "./nominee-list.utils";

const INITIAL_STATE = {
  nomineeList: [],
  isListComplete: false,
  isOpen: false
}

const nomineeListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NomineeListActionTypes.ADD_TO_NOMINEE_LIST:
      return {
        ...state,
        nomineeList: addMovieToList(state.nomineeList, action.payload)
      };
    case NomineeListActionTypes.REMOVE_FROM_NOMINEE_LIST:
      return {
        ...state,
        nomineeList: removeMovieFromList(state.nomineeList, action.payload)
      };
    case NomineeListActionTypes.CLEAR_NOMINEE_LIST:
      return {
        ...state,
        nomineeList: []
      }
    case NomineeListActionTypes.SET_LIST_COMPLETE:
      return {
        ...state,
        isListComplete: action.payload
      };
    case NomineeListActionTypes.SET_MOVIE_OPEN:
      return {
        ...state,
        isOpen: action.payload
      }
    default:
      return state;
  }
}

export default nomineeListReducer;