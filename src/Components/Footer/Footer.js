import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../img/logo.svg';
import './Footer.css';

const Footer = () => {
    return (
        <>
        <section className="footer bg-tag-5">
            <Container className="c_custom">
                    <Row className="pt-4">
                        <Col sm={12} className="text-center">
                            <div className="foot-slogan">
                                <img src={logo} alt="Logo" className="img-fluid"/>
                            </div>
                        </Col>
                        <Col sm={12} className="text-center">
                            <div className="foot-links pt-3">
                                <Link to="/join-us" className="c-tag-3 reg-20">Join Us </Link>
                                <Link to="/privacy" className="c-tag-3 reg-20">| Privacy Policy </Link>
                                <Link to="/faq" className="c-tag-3 reg-20">| FAQ</Link>
                            </div>
                        </Col>
                    </Row>
            </Container> 
        </section>
        <section className="copyright bg-tag-7">
            <Container className="c_custom">
                    <Row>
                        <Col sm={12} className="text-center text-sm-right">
                            <div className="copyright-text">
                                <p>Copyright 2021 © nsuhaatbazar.com</p>
                            </div>
                        </Col>
                    </Row>
            </Container>  
        </section>
        </>
    );
};

export default Footer;