
/**
 * This component displays request data based on search criteria (props)
 * given by the search-box component
 */
import { useDispatch, useSelector } from "react-redux";

import useRetrieve from "../../effects/use-retrieve.effects";

import { retrieveQuery } from "../../redux/movies/movies.selectors";
import { selectIsListComplete, selectNomineeList } from "../../redux/nominee-list/nominee-list.selectors";
import { addToNomineeList, setIsMovieOpen } from "../../redux/nominee-list/nominee-list.actions";
import { fetchMovie } from "../../redux/movies/movies.actions";
import { setAlertMessage } from "../../redux/alert/alert.actions";

import Placeholder   from '../../assets/image-placeholder.svg';

import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import { 
  AddButton, 
  CardBodyContainer, 
  CardContainer, 
  CardImgContainer, 
  CardTitle, 
  MessageContainer, 
  MoviesOverviewContainer
} from "./movies.styles";

const MoviesOverview = () => {

  const dispatch = useDispatch();

  const movieQuery = useSelector(state => retrieveQuery(state));
  const isListComplete = useSelector(state => selectIsListComplete(state));
  const nomineeList = useSelector(state => selectNomineeList(state));

  const movies = useRetrieve(
    'http://www.omdbapi.com/?apikey=8befd556&s=',
    movieQuery,
    "data.Response == 'True'"
  );

  const handleClick = movie => {
    dispatch(addToNomineeList(movie));
    dispatch(setAlertMessage("Movie added to nominee list!"));
  };

  const handleShow = movie => {
    dispatch(fetchMovie(movie));
    dispatch(setIsMovieOpen(true));
  };

  const isMovieInList = movie => {
    return nomineeList.find(nominee => nominee.imdbID === movie.imdbID);
  }
  
  return (
    <div>
      { movies &&  movies.Search !== undefined?
      (
        <MoviesOverviewContainer>
          <Row xl={5} lg={4} md={3}>
          {
            movies.Search.map(movie => (
              <Col key={`${movie.imdbID}${movie.Year}`} style={{padding: '0'}}>
                <CardContainer>
                  <CardImgContainer 
                    role="button"
                    src={movie.Poster !== 'N/A' ? movie.Poster : Placeholder} 
                    alt={movie.Poster}
                    onClick={() => handleShow(movie)}
                  />
                  <CardBodyContainer>
                    <CardTitle
                      role="button"
                      onClick={() => handleShow(movie)}
                    >
                      {movie.Title.length > 25
                        ?`${movie.Title.substring(0,25)}...`
                        : movie.Title} ({movie.Year})
                    </CardTitle>             
                    <AddButton
                      variant="outline-primary"
                      size="sm"
                      disabled={isListComplete || isMovieInList(movie) }
                      onClick={() => handleClick(movie)}
                    >Add</AddButton>
                  </CardBodyContainer>
                </CardContainer>
              </Col>
            ))
          }      
          </Row>    
        </MoviesOverviewContainer>
      )
      : (
          <MessageContainer> 
            {movies && movieQuery !== '' 
              ? movies.Error 
              : 'Search your favorite movies to nominate!'} 
          </MessageContainer>
        )
      }
    </div>
  );
};

export default MoviesOverview;