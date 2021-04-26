import React from 'react';
import './CategoryCard.css';
import { Container, Row, Col } from 'react-bootstrap';
import grocery from '../../img/grocery.png';
import foods from '../../img/foods.png'; 
import gifts from '../../img/gifts.png';
import cosmetics from '../../img/cosmetics.png';
import clothings from '../../img/clothings.png';
import gadgets from '../../img/gadgets.png';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const CategoryCard = () => {
    return (
        <>
            <section className="cat-card stick-pad my-5" id="#">
                <Container className="c_custom">
                    <p></p>
                    <h2 className="semi-50">Categories</h2> 
                    <span className="bottom-line bl-cat"></span>
                    <Row>
                        <Col sm={4}>
                                    <a href="#">
                                        <div className="category-card mt-250 bg-tag-5">
                                            <p className="reg-25"><span>01</span></p>
                                            <h4 className="reg-55"><span>Foods</span></h4>
                                            <LazyLoadImage effect="blur" className="img-fluid pt-4" src={foods} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="category-card mt-30 bg-tag-3">
                                            <p className="reg-25"><span>04</span></p>
                                            <h4 className="reg-55"><span>Clothings</span></h4>
                                            <LazyLoadImage effect="blur" className="img-fluid pt-4" src={clothings} alt=""/>
                                        </div>
                                    </a>
                        </Col>
                        <Col sm={4}>
                                    <a href="#">
                                        <div className="category-card bg-tag-2">
                                            <p className="reg-25"><span>02</span></p>
                                            <h4 className="reg-55"><span>Cosmetics</span></h4>
                                            <LazyLoadImage effect="blur" className="img-fluid pt-4" src={cosmetics} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="category-card bg-tag-4">
                                            <p className="reg-25"><span>05</span></p>
                                            <h4 className="reg-55"><span>Gadgets</span></h4>
                                            <LazyLoadImage effect="blur" className="img-fluid pt-4" src={gadgets} alt=""/>
                                        </div>
                                    </a>
                        </Col>
                        <Col sm={4}>
                                    <a href="#">
                                        <div className="category-card mt-150 bg-tag-1">
                                            <p className="reg-25"><span>03</span></p>
                                            <h4 className="reg-55"><span>Giftshops</span></h4>
                                            <LazyLoadImage effect="blur" className="img-fluid pt-4" src={gifts} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="category-card mt-30 bg-tag-5">
                                            <p className="reg-25"><span>06</span></p>
                                            <h4 className="reg-55"><span>Grocery</span></h4>
                                            <LazyLoadImage effect="blur" className="img-fluid pt-4" src={grocery} alt=""/>
                                        </div>
                                    </a>
                        </Col>
                    </Row>
                </Container>
            </section>
        </>
    );
};

export default CategoryCard;