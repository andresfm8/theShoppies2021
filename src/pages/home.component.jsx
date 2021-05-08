import { useState } from "react";
import { useSelector } from "react-redux";

import MoviePreview from "../components/movie-preview/movie-preview.component";
import MoviesOverview from "../components/movies-overview/movies-overview.component";
import NomineePopup from "../components/nominee-popup/nominee-popup.component";
import SearchBox from "../components/search-box/search-box.component";
import ToastAlert from "../components/toast-alert/toast-alert.component";

import { selectListLength } from "../redux/nominee-list/nominee-list.selectors";
import { CounterContainer, NomineePopupButton } from "./home.styles";

const HomePage = () => {
  
  const [hiddenPopup, setHiddenPopup] = useState(false);

  const listCounter = useSelector(state => selectListLength(state));
  
  const handleClick = () => {
    setHiddenPopup(!hiddenPopup);
  };

  return (
    <div className="w-100">
      <ToastAlert/>
      <SearchBox placeholder="Search for a movie..."/>
      <MoviesOverview/>
      { hiddenPopup ? <NomineePopup/> : '' }
      <NomineePopupButton
        onClick={() => handleClick()}
      >
        Your Nominees 	&ensp;
        <CounterContainer>{listCounter}</CounterContainer>
      <MoviePreview/>
      </NomineePopupButton>
    </div>
  )
}

export default HomePage;