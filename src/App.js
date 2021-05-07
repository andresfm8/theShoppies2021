import HomePage from './pages/home.component';
import Header from './components/header/header.component';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';


const App = () => {
  return (
    <div>
      <Header/>
      <HomePage/>
    </div>
  );
}

export default App;
//Have a list or a cart on the side that gets the newest addition without much data aside the name
//HAve a details option and a remove button
//Details shows a card with info
//when complete redirect to total nominations page
//Home page with option -> search movies or watch stats