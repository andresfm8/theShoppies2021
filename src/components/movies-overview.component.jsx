
/**
 * This component displays request data based on search criteria (props)
 * given by the search-box component
 */

import { useDispatch, useSelector } from "react-redux";
import useRetrieve from "../effects/use-retrieve.effects";
import { retrieveQuery } from "../redux/movies/movies.selectors";
import { addToNomineeList } from "../redux/nominee-list/nominee-list.actions";

import CustomButton from "./custom-button.component";
import NomineeList from "./nominee-list.component";

const MoviesOverview = () => {

  const dispatch = useDispatch();

  const movieQuery = useSelector(state => retrieveQuery(state));

  const movies = useRetrieve(
    'http://www.omdbapi.com/?apikey=8befd556&s=',
    movieQuery,
    "data.Response == 'True'"
  );

  const handleClick = movie => {
    // e.preventDefault();
    dispatch(addToNomineeList(movie))
  };
  
  return (
    <div>
      { movies &&  movies.Search !== undefined?
      (
        <ul>
          {
            movies.Search.map(movie => (
              <li key={movie.imdbID}>
                {movie.Title}&ensp;
                <CustomButton 
                  variant="outline-primary"
                  size="sm"
                  onClick={() => handleClick(movie)}
                >Add</CustomButton>
              </li>
            ))
          }          
        </ul>
      )
      : (<div> {movies && movieQuery !== '' ? movies.Error : 'Search something'} </div>)
      }
      <NomineeList/>
    </div>
  );
};

export default MoviesOverview;