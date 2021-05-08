//Fetch nominees from the user, data is persistent

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { 
  clearNomineeList, 
  removeFromNomineeList, 
  setIsListComplete, 
  setIsMovieOpen 
} from "../../redux/nominee-list/nominee-list.actions";
import { fetchMovie } from "../../redux/movies/movies.actions";
import { setAlertMessage } from "../../redux/alert/alert.actions";
import { selectNomineeList } from "../../redux/nominee-list/nominee-list.selectors";

import CustomButton from "../custom-button/custom-button.component";

import ListGroup from "react-bootstrap/ListGroup";

import { TitleContainer } from "./nominee-list.styles";

const NomineeList = () => {

  const dispatch = useDispatch();
  const nomineeList =  useSelector(state => selectNomineeList(state));
  
  useEffect(() => {
    if(nomineeList.length === 5) {
      dispatch(setIsListComplete(true));
      dispatch(setAlertMessage("You have selected 5 movies, submit your nominations!"));  
    }
    else dispatch(setIsListComplete(false));
    }, 
    [nomineeList, dispatch]
  );

  const handleRemoveFromListClick = movie => {
    dispatch(removeFromNomineeList(movie));
    dispatch(setAlertMessage("Movie removed from list."));
  }

  const handleClearListClick = () => {
    dispatch(clearNomineeList());
    dispatch(setAlertMessage("All movies were removed from the list."));
  };

  const handleSubmitListClick = () => {
    dispatch(clearNomineeList());
    dispatch(setAlertMessage("Movies submitted successfully!"));
    alert("You have submitted your nominations!")
  };


  const handleShow = movie => {
    dispatch(fetchMovie(movie));
    dispatch(setIsMovieOpen(true))
  };
  

  return (
    <ListGroup variant="flush">
      {
        nomineeList.length === 5? 
        <div>
          <CustomButton
            className="w-50"
            size="sm"
            variant="outline-danger"
            onClick={() => handleClearListClick()}
          >
            Clear List
          </CustomButton>
          <CustomButton
            className="w-50"
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
              <ListGroup.Item key={`${movie.imdbID}${movie.Year}`}>
                <TitleContainer 
                  role="button"
                  onClick={() => handleShow(movie)}
                >
                  {movie.Title.length > 15
                    ?`${movie.Title.substring(0,20)}...`
                    : movie.Title} ({movie.Year})
                </TitleContainer>
                &emsp;
                <span 
                  role="button"
                  onClick={() => handleRemoveFromListClick(movie)}
                  style={{color: 'red'}}
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