import AlertActionTypes from "./alert.types"

export const  setAlertMessage = message => ({
  type: AlertActionTypes.SET_ALERT_MESSAGE,
  payload: message
})

export const  unsetAlertMessage = () => ({
  type: AlertActionTypes.SET_ALERT_MESSAGE
})