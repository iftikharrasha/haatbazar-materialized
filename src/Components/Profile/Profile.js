import React from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import productOne from '../../uploads/products/theminusplan_3_0.jpg';
import productTwo from '../../uploads/products/theminusplan_3_1.jpg';
import productThree from '../../uploads/products/theminusplan_3_2.jpg';
import productFour from '../../uploads/products/theminusplan_3_3.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Profile.css';
import outletData from '../../fakeData/data.json';

const Profile = (props) => {

    const { outletKey } = useParams();
    const outletDetail = outletData.find(brand => brand.key === outletKey);
    console.log(outletDetail);

    const {outlet, title, img, react, views, category, datetime} = outletDetail;

    function clickedOne(e) {
        e.preventDefault();
        document.getElementById('img-holder').src=productOne;
    }

    function clickedTwo(e) {
        e.preventDefault();
        document.getElementById('img-holder').src=productTwo;
    }

    function clickedThree(e) {
        e.preventDefault();
        document.getElementById('img-holder').src=productThree;
    }

    function clickedFour(e) {
        e.preventDefault();
        document.getElementById('img-holder').src=productFour;
    }

    return (
        <>
            <section className="profile">

                <div className="cover">

                        <svg className="cover-svg" viewBox="0 0 1920 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
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
                                <Col md={4} className="pt-md-0 pt-sm-5">
                                    <Row className="pt-xs-100">
                                        <Col md={9} className="offset-md-3 offset-2 col-4">
                                                <i className="fa fa-eye c-tag-2"></i>
                                                <span> {views}</span>
                                        </Col>
                                        <Col md={9} sm={4} className="offset-md-3 text-md-left text-right col-4">
                                                <i className="fa fa-heart c-tag-2"></i>
                                                <span> {react}</span>
                                        </Col>
                                        <Col md={9} className="offset-md-3 pt-3 offset-2 col-10">
                                                <p className="c-tag-2">#{category}</p>
                                        </Col>
                                    </Row>
                                </Col>
                                <Col lg={4} md={3} className="mt--200-img">
                                    <div className="profile-img">
                                        <LazyLoadImage effect="blur" src={img} alt={outlet}/>
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
                                    <h2 className="text-center py-3">{outlet}</h2>
                                </Col>
                            </Row>
                        </div>
                    </Container>

                    <Container>
                        <div className="details">
                            <Row className="pt-4">
                                <Col sm={12}>
                                    <Row className="px-0 px-md-5">
                                        <Col lg={6}>
                                            <div className="product__photo">
												<div className="photo-container">
													<div className="photo-main">
														<LazyLoadImage effect="blur" src={productOne} alt="product" id="img-holder"/>
													</div>
													
													<div className="photo-album">
														<ul>
															<li>
																<LazyLoadImage effect="blur" onClick={clickedOne} src={productOne} alt="green apple"/>
															</li>
															<li>
                                                                <LazyLoadImage effect="blur" onClick={clickedTwo} src={productTwo} alt="green apple"/>
															</li>
															<li>
                                                                <LazyLoadImage effect="blur" onClick={clickedThree} src={productThree} alt="green apple"/>
															</li>
															<li>
                                                                <LazyLoadImage effect="blur" onClick={clickedFour} src={productFour} alt="green apple"/>
															</li>
														</ul>
													</div>
												</div>
											</div>

                                        </Col>

                                        <Col lg={6}>
                                            <div className="profile-info-wrap">
                                                <div className="profile-info-inner">

                                                    <div className="profile-bio-wrap">
                                                            <h3 className="c-tag-2 reg-20">{title}</h3>

                                                            <p className="c-tag-2">Date Posted: {datetime}</p>

                                                            <p>Hello Everyone. <br/>
                                                            After completing my bachelor program i had the idea of being an entrepreneur. So, i have opened my own online business The Minus Plan - diet shop and Alhamdulillah this is going well.
                                                            WE ARE SPECIALISED IN ORGANIC, LOW CALORIE, LOW CARB, VEGAN PRODUCTS! IN SHORT WE DEAL WITH ALL TYPE OF KETO DIET PRODUCTS. <br/>
                                                            These products are directly imported from United Kingdom (UK). So, i am ensuring you that you will find the best authentic keto products.
                                                            If you guys feel interested please take a quick visit in my page and if you guys looking for keto products may be you will find it interesting. Wish me good luck.
                                                            Thank you all for your precious time. <br/>
                                                            Do visit my facebook page: The Minus Plan - diet shop.
                                                            </p>
                                                            
                                                    </div>

                                                    <div className="avatar mt-3">
                                                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" alt="owner"/>
                                                        <div className="owner">
                                                            <h5>
                                                                Rishad Haque Hriday
                                                            </h5>
                                                            <h6>
                                                                ECE Department, NSU
                                                            </h6>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
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

export default Profile;