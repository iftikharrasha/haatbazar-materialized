
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from '@material-ui/core';
import './App.css';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Router>
          <Switch>
              <Route path="/home">
                  <Hero></Hero>
                  <CategoryCard></CategoryCard>
              </Route>
              <Route path="/outlets">
                  <NotFound></NotFound>
              </Route>
              <Route exact path="/">
                  <Hero></Hero>
                  <CategoryCard></CategoryCard>
              </Route>
              <Route path="*">
                  <NotFound></NotFound>
              </Route>
          </Switch>
      </Router>
    </div>
  );
}

export default App;
