import MoviesOverview from "../components/movies-overview.component";
import SearchBox from "../components/search-box.component";

const HomePage = () => {
  return (
    <div>
      <SearchBox placeholder="type here"/>
      <MoviesOverview/>
    </div>
  )
}

export default HomePage;