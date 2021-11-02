import './App.css';
import { Route, Switch } from 'react-router-dom';
import BooksContainer from './components/BooksContainer';
import Categories from './components/Categories';
import Navbar from './components/Navbar';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path="/">
          <BooksContainer />
        </Route>
        <Route exact path="/categories">
          <Categories />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
