
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from '@material-ui/core';
import './App.css';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import NotFound from './Components/NotFound/NotFound';
import Album from './Components/Album/Album';
import { Button } from 'react-bootstrap';

function App() {
  return (
    <div classNameName="App">
        <Header></Header>
        <Router>
            <Switch>
                <Route path="/home">
                    <Hero></Hero>
                    <Album></Album>
                    <CategoryCard></CategoryCard>
                </Route>
                <Route path="/outlets">
                    <NotFound></NotFound>
                </Route>
                <Route exact path="/">
                    <Hero></Hero>
                    <Album></Album>
                    <CategoryCard></CategoryCard>
                </Route>
                <Route path="*">
                    <NotFound></NotFound>
                </Route>
            </Switch>
        </Router>
        
        <div className="facebook">
            <Button>
                <div className="fb-text">
                <span><i class="fab fa-facebook"></i></span> Facebook</div>
            </Button>
        </div>
    </div>
  );
}

export default App;
