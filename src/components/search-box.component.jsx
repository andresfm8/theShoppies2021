import { useDispatch } from "react-redux";
import { searchMovie } from "../redux/movies/movies.actions";

const SearchBox = ({ placeholder }) => {

  const dispatch = useDispatch();                
  
  const handleChange = e => dispatch(searchMovie(e.target.value));

  return (
    <div>
      <input
        type="search"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  )
}

export default SearchBox;