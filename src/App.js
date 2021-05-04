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
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Hero></Hero>
                                            <Album></Album>
                                            <CategoryCard></CategoryCard>
                                            <Brand></Brand>
                                            <BigImage></BigImage>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="/outlets">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Outlets></Outlets>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="/profile/:outletKey">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Profile></Profile>
                                            <Related></Related>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="/about">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <About></About>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="/contact">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Contact></Contact>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="/faq">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Faq></Faq>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="/privacy-policy">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <PrivacyPolicy></PrivacyPolicy>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route exact path="/">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <Hero></Hero>
                                            <Album></Album>
                                            <CategoryCard></CategoryCard>
                                            <Brand></Brand>
                                            <Footer></Footer>
                                        </Suspense>
                                    </div>
                                </Route>
                                <Route path="*">
                                    <div className="page">
                                        <Suspense fallback={<LazyLoad></LazyLoad>}>
                                            <NotFound></NotFound>
                                        </Suspense>
                                    </div>
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
