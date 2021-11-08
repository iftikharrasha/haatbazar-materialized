import { React, lazy, Suspense, createContext, useState } from 'react';
import ScrollToTop from './ScrollToTop.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { getDecodedUser } from "./Components/Login/LoginManager";
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
import PrivateRoute from './Components/PrivateRoute/PrivateRoute.js';
import MessengerCustomerChat from 'react-messenger-customer-chat';

const NotFound = lazy(() => import('./Components/NotFound/NotFound'));

export const UserContext = createContext();

function App() {
    const [loggedInUser, setLoggedInUser] = useState(getDecodedUser());

    return (
        <div className="App">
            <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
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
                                                    <Brand></Brand>
                                                    <CategoryCard></CategoryCard>
                                                    <Album></Album>
                                                    <BigImage></BigImage>
                                                    <Footer></Footer>
                                                </Suspense>
                                        </Route>
                                        <PrivateRoute path="/about">
                                                <Header></Header>
                                                <Profile></Profile>
                                                <Footer></Footer>
                                        </PrivateRoute>
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
            </UserContext.Provider>

            <MessengerCustomerChat pageId="100000686899395" appId="139797061505174"/>
            {/* now just host and go to set the domain whitelist from the facebook page */}
            
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
