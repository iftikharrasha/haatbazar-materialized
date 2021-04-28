import { React, lazy, Suspense } from 'react';
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Album from './Components/Album/Album';
import { Button } from 'react-bootstrap';
import Brand from './Components/Brands/Brands';
import LazyLoad from './Components/LazyLoad/LazyLoad';
import Profile from './Components/Profile/Profile';
import Related from './Components/Related/Related';
import Outlets from './Components/Outlets/Outlets';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
  return (
    <div className="App">
        <Header></Header>
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path="/home">
                        <Hero></Hero>
                        <Album></Album>
                        <CategoryCard></CategoryCard>
                        <Brand></Brand>
                    </Route>
                    <Route path="/outlets">
                            <Outlets></Outlets>
                    </Route>
                    <Route path="/profile/:outletKey">
                        <Profile></Profile>
                        <Related></Related>
                    </Route>
                    <Route exact path="/">
                        <Hero></Hero>
                        <Album></Album>
                        <CategoryCard></CategoryCard>
                        <Brand></Brand>
                    </Route>
                    <Route path="*">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <NotFound></NotFound>
                        </Suspense>
                    </Route>
                </Switch>
            </ScrollToTop>
        </Router>
        
        <div className="facebook">
            <Button>
                <div className="fb-text">
                <span><i className="fab fa-facebook"></i></span> Facebook</div>
            </Button>
        </div>
    </div>
  );
}

export default App;
