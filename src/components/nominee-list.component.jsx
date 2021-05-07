import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearNomineeList, removeFromNomineeList, setIsListComplete } from "../redux/nominee-list/nominee-list.actions";
import { selectNomineeList } from "../redux/nominee-list/nominee-list.selectors";

import ListGroup from 'react-bootstrap/ListGroup'
import CustomButton from "./custom-button.component";

const NomineeList = () => {

  const dispatch = useDispatch();
  const nomineeList =  useSelector(state => selectNomineeList(state));
  
  useEffect(() => {
    if(nomineeList.length === 5) dispatch(setIsListComplete(true)); 
    else dispatch(setIsListComplete(false));
    }, 
    [nomineeList, dispatch]
  );

  const handleRemoveFromListClick = movie => dispatch(removeFromNomineeList(movie));

  const handleClearListClick = () => dispatch(clearNomineeList());
  
  const handleSubmitListClick = () => {
    dispatch(clearNomineeList());
    console.log("dont forget to submit!");
  }

  return (
    <ListGroup variant="flush">
      {
        nomineeList.length === 5? 
        <div>
          <CustomButton
            style={{width: '50%'}}
            size="sm"
            variant="outline-danger"
            onClick={() => handleClearListClick()}
          >
            Clear List
          </CustomButton>
          <CustomButton
            style={{width: '50%'}}
            size="sm"
            variant="outline-success"
            onClick={() => handleSubmitListClick()}
          >
            Submit List
          </CustomButton>
        </div>
        : ''
      }
      {
      nomineeList.length ? 
        (
          <div>
          {
            nomineeList.map(movie => (
              <ListGroup.Item key={`${movie.imdbID}${movie.Year}`}>{movie.Title} 
                <span style={{
                  cursor: "pointer"
                  }}
                  onClick={() => handleRemoveFromListClick(movie)}
                >
                  &#9747;
                </span>
              </ListGroup.Item>
            ))
          }
          </div>
        ) : (<div>No nominees yet </div>)
      }
    </ListGroup>
  );
}

export default NomineeList;