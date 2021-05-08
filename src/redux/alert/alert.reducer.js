import AlertActionTypes from "./alert.types";

const INITIAL_STATE = {
  message: null
}

const alertReducer = ( state = INITIAL_STATE, action) => {
  switch(action.type) {
    case AlertActionTypes.SET_ALERT_MESSAGE:
      return {
        ...state,
        message: action.payload
      };
    case AlertActionTypes.UNSET_ALERT_MESSAGE:
      return {
        ...state,
        message: null
      };
    default:
      return state;
  }
}

export default alertReducer;