import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setIsListComplete } from "../redux/nominee-list/nominee-list.actions";
import { selectNomineeList } from "../redux/nominee-list/nominee-list.selectors";

const NomineeList = () => {

  const dispatch = useDispatch();
  const nomineeList =  useSelector(state => selectNomineeList(state));
  
  useEffect(() => {
    if(nomineeList.length === 5) dispatch(setIsListComplete(true)); 
    else dispatch(setIsListComplete(false));
    console.log(nomineeList)
    }, [nomineeList, dispatch])

  return (
    <div>
      {
        nomineeList.map(movie => (
          <div key={movie.imdbID}>{movie.Title}</div>
        ))
      }
    </div>
  );
}

export default NomineeList;