import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Card from '../Card/Card';
import Categories from '../Categories/Categories';
import OutletCard from '../OutletCard/OutletCard';
import './Outlets.css';

const Outlets = () => {
    return (
        <>
        <section>
            <div className="cover">

                <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clip-path="url(#clip0)">
                    <path d="M0 0H1920V196.068L0 381V0Z" fill="#CCDEE2"/>
                    <path d="M1415 50C1415 114.617 1362.62 167 1298 167C1233.38 167 1181 114.617 1181 50L1181 -51C1181 -115.617 1233.38 -168 1298 -168C1362.62 -168 1415 -115.617 1415 -51L1415 50Z" fill="#77E0B5"/>
                    <rect x="1642" y="-420" width="115" height="659" rx="57.5" fill="#FCC8DF"/>
                    <rect x="1471" y="-278" width="115" height="659" rx="57.5" fill="#FCDC3D"/>
                    </g>
                    <defs>
                    <clipPath id="clip0">
                    <rect width="1920" height="381" fill="white"/>
                    </clipPath>
                    </defs>
                </svg>

            </div>

            <Container className="c_custom">
                <div className="outlet-top mt--250-div">
                        <Row className="pt-4">
                            <Col sm={12}>
                                <h2 className="semi-50 text-left">Outlets</h2> 
                                <span className="bottom-line bl-cat"></span>
                            </Col>
                        </Row>
                </div>
                <div className="outlet-below mt-150-div">
                        <Row>
                            <Col sm={12}>
                                
                            </Col>
                        </Row>
                        <Row className="pt-4">
                            <Col sm={12}>
                                <Row>
                                    <Col sm={2} className="cat-height">
                                        <Categories></Categories>
                                    </Col>
                                    <Col sm={9} className="offset-md-1">
                                        <Row>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>   
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                            <Col sm={6} lg={4}>
                                                <OutletCard></OutletCard>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                </div>
            </Container>  
        </section>

        </>
    );
};

export default Outlets;