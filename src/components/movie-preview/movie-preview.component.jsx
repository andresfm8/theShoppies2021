// Shows a closer preview of the selected movie

import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';

import { selectMovie } from '../../redux/movies/movies.selectors';
import { selectIsMovieOpen } from '../../redux/nominee-list/nominee-list.selectors';
import { setIsMovieOpen } from '../../redux/nominee-list/nominee-list.actions';

import ImdbLogo  from '../../assets/imdblogo.svg';
import Placeholder   from '../../assets/image-placeholder.svg';

import CustomButton from '../custom-button/custom-button.component';

const MoviePreview = () => {

  const dispatch = useDispatch();

  const show = useSelector(state => selectIsMovieOpen(state));
  const movie = useSelector(state => selectMovie(state));

  const handleClose = () => dispatch(setIsMovieOpen(false));

  return (
    movie ?
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>
          {movie.Title} ({movie.Year}) 
          <a href={`https://www.imdb.com/title/${movie.imdbID}`} target="blank">
            <img src={ImdbLogo} alt="" height="50px"/>
          </a>
        </Modal.Title>
      </Modal.Header>
      <Modal.Body className="mx-auto">
        <img 
          src={movie.Poster !== 'N/A' ? movie.Poster : Placeholder}
          alt={`${movie.Title} Poster`} 
        />
      </Modal.Body>
      <Modal.Footer>
        <CustomButton variant="secondary" onClick={handleClose}>
          Close
        </CustomButton>
      </Modal.Footer>
    </Modal>
    : ''
  )
}

export default MoviePreview; 