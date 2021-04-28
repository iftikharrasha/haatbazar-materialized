import React, { useEffect } from 'react';
import haatbazar from '../../img/haatbazar.png'; 
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import AOS from "aos";
import "aos/dist/aos.css";
import './Hero.css';

const Hero = () => {

        useEffect(() => {
          AOS.init();
          AOS.refresh();
        }, []);

    return (
            <>
                <section className="hero">
                    <Container className="c_custom c_sm_custom">
                        <Row className="row pt-4">
                            <Col sm={2} className="order-sm-1 order-1 col-sm-2 d-sm-block d-none">
                                <div className="sticky-el stick-pad pb-0">
                                    <svg className="svg-red" viewBox="0 0 44 578" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-down" data-aos-duration="1000">
                                        <rect width="44" height="578" rx="22" fill="#DF313C"/>
                                    </svg>
                                </div>
                            </Col>
                            <Col sm={4} className="order-sm-2  order-3">
                                <Row>
                                    <Col sm={12} className="h-740">
                                        <div className="sticky-el stick-pad text-sm-left pb-5" data-aos="fade-up" data-aos-duration="1000">
                                            <h1 className="semi-50">NSU HAATBAZAR</h1>
                                            <p className="reg-25">The legacy of NSU Entrepreneurship.</p>
                                            <Button variant="outlined" color="secondary" className="px-4">
                                                Learn More
                                            </Button>
                                        </div>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col sm={6}>
                                        <div>
                                            <svg className="svg-yel" viewBox="0 0 115 297" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="1000">
                                                <rect width="115" height="297" rx="57.5" fill="#FCDC3D"/>
                                            </svg>
                                        </div>
                                    </Col>
                                    <Col sm={6} className="d-none d-sm-block">
                                        <div className="sticky-el pt-300">
                                            <svg className="svg-org" viewBox="0 0 182 638" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="1000">
                                                <rect width="182" height="638" rx="91" fill="#E83E03"/>
                                            </svg>
                                        </div>
                                    </Col>
                                </Row>
                            </Col>
                            <Col sm={3} className="h-1570 order-sm-3 order-2">
                                <div className="sticky-el stick-pad" data-aos="fade-up" data-aos-duration="1000">
                                    <LazyLoadImage effect="blur" className="svg-pic" src={haatbazar} alt="haatbazar"/>
                                </div>
                            </Col>
                            <Col sm={2} className="order-sm-4 order-4 d-none d-sm-block">
                                <div>
                                    <svg className="svg-blu" viewBox="0 0 182 632" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-down" data-aos-duration="1000">
                                        <rect width="182" height="632" rx="91" fill="#052FD3"/>
                                    </svg>
                                </div>
                            </Col>
                            <Col sm={1} className="order-sm-5 order-5 d-none d-sm-block">
                                <div className="pt-650">
                                    <svg className="svg-tom" viewBox="0 0 26 554" fill="none" xmlns="http://www.w3.org/2000/svg" data-aos="fade-up" data-aos-duration="1000">
                                        <rect width="26" height="554" rx="13" fill="#E83E03"/>
                                    </svg>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </>
    );
};

export default Hero;