import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './PrivacyPolicy.css';


const PrivacyPolicy = () => {
    return (
        <>
            <section className="outlets pb-5">
                <div className="cover">
                    <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
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
                                    <h2 className="semi-50 text-left">Privacy Policy</h2> 
                                    <span className="bottom-line bl-cat"></span>
                                </Col>
                            </Row>
                    </div>

                    <div className="outlet-below mt-150-div">
                            <Row className="pt-5">
                                <Col lg={8} className="pb-5 offset-lg-2">
                                    <div className="col-md-12">
                                        <div className="pt-4 pb-3">
                                            <p className="pt-30 semi-25">Lorem, ipsum dolor sit amet consectetur adipisicing elit?</p>
                                            <h5 className="pt-3 reg-16">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda error eum, minima itaque dignissimos dolores animi. Officiis, maiores ab id rerum vel accusamus repudiandae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis, non sit aspernatur minima odit molestiae doloremque commodi eius quidem! Natus.</h5>
                                        </div>

                                        <div className="pt-4 pb-3">
                                            <p className="pt-30 semi-25">Lorem ipsum dolor sit amet, consectetur.</p>
                                            <h5 className="pt-3 reg-16">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Provident voluptates saepe assumenda dicta doloribus optio nemo enim error. Ducimus laboriosam neque quo. Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, odit atque. Asperiores ipsum blanditiis doloremque est architecto, nulla error quas amet voluptatibus?</h5>
                                        </div>

                                        <div className="pt-4 pb-3"> 
                                            <p className="pt-30 semi-25">Lorem ipsum dolor sit amet, consectetur.</p>
                                            <h5 className="pt-3 reg-16">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero eveniet eligendi a?</h5>
                                        </div>

                                        <div className="pt-4 pb-3">
                                            <p className="pt-30 semi-25">Lorem ipsum dolor sit amet.</p>
                                            <h5 className="pt-3 reg-16">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatibus inventore minima eligendi error saepe non assumenda.</h5>
                                        </div>

                                        <div className="pt-3 pb-3">
                                            <h6 className="reg-16">
                                                <p className="pb-1">- Lorem ipsum dolor sit amet.</p>
                                                <p className="pb-1">- Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                                                <p className="pb-1">- Lorem ipsum dolor sit amet consectetur.</p>
                                                <p className="pb-1">- Lorem ipsum dolor sit amet consectetur adipisicing.</p>
                                                <p className="pb-1">- Lorem ipsum dolor sit.</p>
                                                <p className="pb-1">- Lorem, ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            </h6>
                                        </div>

                                        <div className="pt-4 pb-3">
                                            <p className="pt-30 semi-25">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                                            <h5 className="pt-3 reg-16">Lorem ipsum, dolor sit amet consectetur.</h5>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                    </div>
                </Container>  
            </section>
        </>
    );
};

export default PrivacyPolicy;