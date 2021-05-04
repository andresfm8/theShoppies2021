import NomineeListActionTypes from "./nominee-list.types";
import { addMovieToList } from "./nominee-list.utils";

const INITIAL_STATE = {
  nomineeList: [],
  isListComplete: false
}

const nomineeListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NomineeListActionTypes.ADD_TO_NOMINEE_LIST:
      return {
        ...state,
        nomineeList: addMovieToList(state.nomineeList, action.payload)
      };
    case NomineeListActionTypes.SET_LIST_COMPLETE:
      return {
        ...state,
        isListComplete: action.payload
      }
    default:
      return state;
  }
}

export default nomineeListReducer;