import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/movies/movies.actions";

import Form from 'react-bootstrap/Form'

const SearchBox = ({ placeholder }) => {

  const dispatch = useDispatch(); 
  
  const handleChange = e => dispatch(searchMovie(e.target.value));

  return (
    <div style={{margin: '2vh auto', width: '60%'}}>
      <Form.Control 
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
        size="lg"
      />
    </div>
  )
}

export default SearchBox;