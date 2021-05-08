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