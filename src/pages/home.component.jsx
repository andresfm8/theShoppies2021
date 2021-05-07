import { useState } from "react";
import { useSelector } from "react-redux";

import CustomButton from "../components/custom-button.component";
import MoviePreview from "../components/movie-preview.component";
import MoviesOverview from "../components/movies-overview.component";
import NomineePopup from "../components/nominee-popup.component";
import SearchBox from "../components/search-box.component";

import { selectListLength } from "../redux/nominee-list/nominee-list.selectors";

//Selector for # of items in list

const HomePage = () => {

  const [hiddenPopup, setHiddenPopup] = useState(false);

  const listCounter = useSelector(state => selectListLength(state));
  
  const handleClick = () => {
    setHiddenPopup(!hiddenPopup);
    console.log(listCounter);
  }

  return (
    <div>
      <SearchBox placeholder="Search for a movie..."/>
      <MoviesOverview/>
      
      {
        hiddenPopup ? <NomineePopup/> : ''
      }
      <CustomButton
        style={{ 
          width: '18rem',
          position: 'fixed',
          bottom: '1vh',
          right:'2vw'
        }}
        onClick={() => handleClick()}
      >
        Your Nominees <span>
                        {listCounter}
                      </span>
      </CustomButton>
      <MoviePreview/>
    </div>
  )
}

export default HomePage;