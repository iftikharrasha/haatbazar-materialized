import { React, lazy, Suspense } from 'react';
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
import Album from './Components/Album/Album';
import { Button } from 'react-bootstrap';
import Card from './Components/Card/Card';
import LazyLoad from './Components/LazyLoad/LazyLoad';
import Profile from './Components/Profile/Profile';
// import NotFound from './Components/NotFound/NotFound';
const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

function App() {
  return (
    <div className="App">
        <Router>

                <Switch>
                    <Route path="/home">
                        <Header></Header>
                        <Hero></Hero>
                        <Album></Album>
                        <CategoryCard></CategoryCard>
                        <Card></Card>
                    </Route>
                    <Route path="/outlets">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
                            <NotFound></NotFound>
                        </Suspense>
                    </Route>
                    <Route exact path="/profile">
                        <Header></Header>
                        <Profile></Profile>
                    </Route>
                    <Route exact path="/">
                        <Header></Header>
                        <Hero></Hero>
                        <Album></Album>
                        <CategoryCard></CategoryCard>
                        <Card></Card>
                    </Route>
                    <Route path="*">
                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                            <Header></Header>
                            <NotFound></NotFound>
                        </Suspense>
                    </Route>
                </Switch>

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
