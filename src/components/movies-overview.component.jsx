
/**
 * This component displays request data based on search criteria (props)
 * given by the search-box component
 */

import { useSelector } from "react-redux";
import useRetrieve from "../effects/use-retrieve.effects";
import { retrieveQuery } from "../redux/movies/movies.selectors";

const MoviesOverview = () => {
  const movieQuery = useSelector(state => retrieveQuery(state));

  const movies = useRetrieve(
    'http://www.omdbapi.com/?apikey=8befd556&s=',
    movieQuery,
    "data.Response == 'True'"
  );
  
  return (
    <div>
      { movies &&  movies.Search !== undefined?
      (
        <ul>
          {
            movies.Search.map(movie => (
              <li key={movie.imdbID}>{movie.Title}</li>
            ))
          }          
        </ul> 
      )
      : (<div> {movies && movieQuery !== '' ? movies.Error : movieQuery} </div>)
      }
    </div>
  );
};

export default MoviesOverview;