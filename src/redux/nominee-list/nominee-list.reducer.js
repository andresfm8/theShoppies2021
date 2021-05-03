import NomineeListActionTypes from "./nominee-list.types";
import { addMovieToList } from "./nominee-list.utils";

const INITIAL_STATE = {
  nomineeList: []
}

const nomineeListReducer = (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case NomineeListActionTypes.ADD_TO_NOMINEE_LIST:
      return {
        ...state,
        nomineeList: addMovieToList(state.nomineeList, action.payload)
      };
    default:
      return state;
  }
}

export default nomineeListReducer;