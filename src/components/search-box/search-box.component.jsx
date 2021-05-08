import { useDispatch } from "react-redux";
import { searchMovie } from "../../redux/movies/movies.actions";

import { SearchBoxContainer } from './search-box.styles';
import Form from 'react-bootstrap/Form'

const SearchBox = ({ placeholder }) => {

  const dispatch = useDispatch(); 
  
  const handleChange = e => dispatch(searchMovie(e.target.value));

  return (
    <SearchBoxContainer>
      <Form.Control 
        type="text"
        placeholder={placeholder}
        onChange={handleChange}
        size="lg"
      />
    </SearchBoxContainer>
  )
}

export default SearchBox;