
/**
 * This component displays request data based on search criteria (props)
 * given by the search-box component
 */
import { useDispatch, useSelector } from "react-redux";

import useRetrieve from "../effects/use-retrieve.effects";
import { retrieveQuery } from "../redux/movies/movies.selectors";
import { addToNomineeList, setIsMovieOpen } from "../redux/nominee-list/nominee-list.actions";
import { fetchMovie } from "../redux/movies/movies.actions";
import { selectIsListComplete, selectNomineeList } from "../redux/nominee-list/nominee-list.selectors";

import Placeholder   from '../assets/image-placeholder.svg';

import Container from "react-bootstrap/Container"
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col"
import Row from "react-bootstrap/Row"

import CustomButton from "./custom-button.component";

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

  const handleClick = movie => dispatch(addToNomineeList(movie));

  const handleShow = movie => {
    dispatch(fetchMovie(movie));
    dispatch(setIsMovieOpen(true))
  };

  const isMovieInList = movie => {
    return nomineeList.find(nominee => nominee.imdbID === movie.imdbID);
  }
  
  return (
    <div>
      { movies &&  movies.Search !== undefined?
      (
        <Container style={{width: '90%'}}>
          <Row xl={4} lg={3}>
          {
            movies.Search.map(movie => (
              <Col key={`${movie.imdbID}${movie.Year}`}>
                <Card
                  style={{
                     width: '14rem', 
                     height: '28rem',  
                     margin: '7px auto' 
                  }}
                >
                  <Card.Img variant="top" src={movie.Poster != 'N/A' ? movie.Poster : Placeholder} alt={movie.Poster}
                    style={{
                      width: '13.9rem',
                      height: '18rem'
                    }}
                    onClick={() => handleShow(movie)}
                  />
                  <Card.Body>
                    <Card.Title>{movie.Title} ({movie.Year})</Card.Title>
                    <CustomButton
                      variant="outline-primary"
                      size="sm"
                      disabled={isListComplete || isMovieInList(movie) }
                      onClick={() => handleClick(movie)}
                    >Add</CustomButton>
                  </Card.Body>
                </Card>
              </Col>
            ))
          }      
          </Row>    
        </Container>
      )
      : (
          <div
            style={{margin: '5vh auto', fontSize: '2rem'}}
          > 
            {movies && movieQuery !== '' ? movies.Error : 'Search your favorite movies to nominate!'} 
          </div>
        )
      }
      {/* <CustomButton onClick={handleShow}>
        Open modal
      </CustomButton> */}
    </div>
  );
};

export default MoviesOverview;