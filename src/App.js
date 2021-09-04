import { React, lazy, Suspense } from 'react';
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import CategoryCard from './Components/CategoryCard/CategoryCard';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Album from './Components/Album/Album';
import Brand from './Components/Brands/Brands';
import LazyLoad from './Components/LazyLoad/LazyLoad';
import Profile from './Components/Profile/Profile';
import Outlets from './Components/Outlets/Outlets';
import Footer from './Components/Footer/Footer.js';
import Faq from './Components/Faq/Faq.js';
import About from './Components/About/About.js';
import PrivacyPolicy from './Components/PrivacyPolicy/PrivacyPolicy.js';
import Contact from './Components/Contact/Contact.js';
import BigImage from './Components/BigImage/BigImage.js';
import {
    CSSTransition,
    TransitionGroup,
  } from 'react-transition-group';

const NotFound = lazy(() => import('./Components/NotFound/NotFound'));


function App() {
    
  return (
    <div className="App">
        <Router>
            <Header></Header>
            <ScrollToTop>
                 <Route render={({location}) => (
                     <TransitionGroup>
                        <CSSTransition
                        key={location.key}
                        timeout={300}
                        classNames="fade"
                        >
                            <Switch location={location}>
                                <Route path="/home">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Hero></Hero>
                                            <Album></Album>
                                            <CategoryCard></CategoryCard>
                                            <Brand></Brand>
                                            <BigImage></BigImage>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/outlets">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Outlets></Outlets>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/outlets/:outletCategory">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Outlets></Outlets>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/profile/:outletKey">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Profile></Profile>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/about">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <About></About>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/contact">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Contact></Contact>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/faq">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Faq></Faq>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="/privacy-policy">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <PrivacyPolicy></PrivacyPolicy>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route exact path="/">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Hero></Hero>
                                            <Album></Album>
                                            <CategoryCard></CategoryCard>
                                            <Brand></Brand>
                                            <Footer></Footer>
                                        </Suspense>
                                </Route>
                                <Route path="*">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <NotFound></NotFound>
                                        </Suspense>
                                </Route>
                            </Switch>
                        </CSSTransition>
                    </TransitionGroup>
                 )} />
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
