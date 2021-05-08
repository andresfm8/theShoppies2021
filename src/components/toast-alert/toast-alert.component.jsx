import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import Toast from "react-bootstrap/Toast";
import ToastBody from 'react-bootstrap/ToastBody'

import { selectAlertMessage } from "../../redux/alert/alert.selectors";
import { unsetAlertMessage } from "../../redux/alert/alert.actions";
import { ToastContainer } from "./toast-alert.styles";

const ToastAlert = () => {

  const dispatch = useDispatch();
  
  const [show, setShow] = useState(false);

  const alertMessage = useSelector(state => selectAlertMessage(state))

  useEffect(() => {
    if(alertMessage) {
      setShow(true);
      setTimeout(() => {
        dispatch(unsetAlertMessage());
        setShow(false);
      }, 3000);
    }
  }, [alertMessage, dispatch]);

  return (
    <ToastContainer>
      <Toast 
        show={show} 
        delay={3000}
        autohide
      >
        <Toast.Header closeButton={false}>
          <strong className="mr-auto">{alertMessage}</strong>
        </Toast.Header>
      </Toast>
    </ToastContainer>
  )
}

export default ToastAlert;