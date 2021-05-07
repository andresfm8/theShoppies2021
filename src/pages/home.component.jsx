import { useState } from "react";
import { useSelector } from "react-redux";

import MoviePreview from "../components/movie-preview/movie-preview.component";
import MoviesOverview from "../components/movies-overview/movies-overview.component";
import NomineePopup from "../components/nominee-popup/nominee-popup.component";
import SearchBox from "../components/search-box/search-box.component";

import { selectListLength } from "../redux/nominee-list/nominee-list.selectors";
import { CounterContainer, NomineePopupButton } from "./home.styles";

//Selector for # of items in list

const HomePage = () => {

  const [hiddenPopup, setHiddenPopup] = useState(false);

  const listCounter = useSelector(state => selectListLength(state));
  
  const handleClick = () => {
    setHiddenPopup(!hiddenPopup);
    console.log(listCounter);
  }

  return (
    <div className="w-100">
      <SearchBox placeholder="Search for a movie..."/>
      <MoviesOverview/>
      
      {
        hiddenPopup ? <NomineePopup/> : ''
      }
      <NomineePopupButton onClick={() => handleClick()}>
        Your Nominees 	&ensp;
        <CounterContainer>{listCounter}</CounterContainer>
      </NomineePopupButton>
      <MoviePreview/>
    </div>
  )
}

export default HomePage;