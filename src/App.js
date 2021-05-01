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
import Footer from './Components/Footer/Footer.js';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
    
  return (
    <div className="App">
        <Router>
            <ScrollToTop>
                <Switch>
                    <Route path="/home">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
                            <Hero></Hero>
                            <Album></Album>
                            <CategoryCard></CategoryCard>
                            <Brand></Brand>
                            <Footer></Footer>
                        </Suspense>
                    </Route>
                    <Route path="/outlets">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
                            <Outlets></Outlets>
                            <Footer></Footer>
                        </Suspense>
                    </Route>
                    <Route path="/profile/:outletKey">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
                            <Profile></Profile>
                            <Related></Related>
                            <Footer></Footer>
                        </Suspense>
                    </Route>
                    <Route exact path="/">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
                            <Hero></Hero>
                            <Album></Album>
                            <CategoryCard></CategoryCard>
                            <Brand></Brand>
                            <Footer></Footer>
                        </Suspense>
                    </Route>
                    <Route path="*">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
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
