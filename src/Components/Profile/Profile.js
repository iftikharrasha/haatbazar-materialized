import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import './Profile.css';
import nine from '../../img/nine.jpg'; 
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Profile = () => {
    return (
        <>
            {/* <section class="section-build-page-cover section-shaped my-0">
                <div class="shape shape-style-1 shape-default"></div>
                <div class="separator separator-bottom separator-skew">
                </div>
            </section> */}

            <section className="profile">

                <div className="cover">

                        <svg className="cover-svg" viewBox="0 0 1920 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M0 0H1920V450.672L0 638V0Z" fill="#CCDEE2"/>
                        <path d="M388 118C388 182.617 335.617 235 271 235C206.383 235 154 182.617 154 118L154 17C154 -47.6173 206.383 -100 271 -100C335.617 -100 388 -47.6173 388 17L388 118Z" fill="#77E0B5"/>
                        <rect x="423" y="-267" width="115" height="659" rx="57.5" fill="#FCC8DF"/>
                        <rect x="573" y="-516" width="115" height="659" rx="57.5" fill="#FCDC3D"/>
                        </g>
                        <defs>
                        <clipPath id="clip0">
                        <rect width="1920" height="638" fill="white"/>
                        </clipPath>
                        </defs>
                        </svg>

                </div>

                
                    <Container>
                        <div className="pro-pic mt--200-div">
                            <Row className="pt-4">
                                <Col md={4}>
                                    <Row>
                                        <Col md={9} Col sm={4} className="offset-md-3 offset-sm-2">
                                                <i className="fa fa-eye c-tag-2"></i>
                                                <span> 929</span>
                                        </Col>
                                        <Col md={9} Col sm={4} className="offset-md-3 text-md-left text-right">
                                                <i className="fa fa-heart c-tag-2"></i>
                                                <span> 67</span>
                                        </Col>
                                        <Col md={9} Col sm={10} className="offset-md-3 pt-3 offset-sm-2">
                                                <p className="c-tag-2">#Clothing</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={3} className="mt--200-img">
                                    <div className="profile-img">
                                        <LazyLoadImage effect="blur" src={nine}/>
                                    </div>
                                </Col>
                                <Col lg={4} md={5}>

                                    <ul className="social-profile">
                                        <li className="social-btn">
                                                <Button variant="outlined" color="secondary">
                                                    <i className="fa fa-facebook icon-font"></i>
                                                </Button>
                                        </li>
                                        <li className="social-btn">
                                                <Button variant="outlined" color="secondary">
                                                    <i className="fa fa-instagram icon-font"></i>
                                                </Button>
                                        </li>
                                        <li className="social-btn">
                                                <Button variant="outlined" color="secondary">
                                                    <i className="fa fa-link icon-font"></i>
                                                </Button>
                                        </li>
                                    </ul>

                                </Col>
                            </Row>
                            <Row>
                                <Col>
                                    <h2 className="text-center py-3">The Minus Plan</h2>
                                </Col>
                            </Row>
                        </div>
                    </Container> 

            </section>
        </>
    );
};

export default Profile;