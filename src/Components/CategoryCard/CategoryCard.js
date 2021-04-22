import React from 'react';
import './CategoryCard.css';
import { Container, Row, Col } from 'react-bootstrap';
import food from '../../img/food.png'; 

const CategoryCard = () => {
    return (
        <>
            <section className="cat-card my-5" id="two">
                <Container className="c_custom">
                    <Row>
                        <Col sm={4}>
                                    <a href="#">
                                        <div className="category-card mt-250 bg-tag-5">
                                            <p className="reg-25"><span>01</span></p>
                                            <h4 className="reg-55"><span>Foods</span></h4>
                                            <img className="img-fluid pt-4" src={food} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="category-card mt-30 bg-tag-3">
                                            <p className="reg-25"><span>04</span></p>
                                            <h4 className="reg-55"><span>Clothings</span></h4>
                                            <img className="img-fluid pt-4" src={food} alt=""/>
                                        </div>
                                    </a>
                        </Col>
                        <Col sm={4}>
                                    <a href="#">
                                        <div className="category-card bg-tag-2">
                                            <p className="reg-25"><span>02</span></p>
                                            <h4 className="reg-55"><span>Cosmetics</span></h4>
                                            <img className="img-fluid pt-4" src={food} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="category-card bg-tag-4">
                                            <p className="reg-25"><span>05</span></p>
                                            <h4 className="reg-55"><span>Gadgets</span></h4>
                                            <img className="img-fluid pt-4" src={food} alt=""/>
                                        </div>
                                    </a>
                        </Col>
                        <Col sm={4}>
                                    <a href="#">
                                        <div className="category-card mt-150 bg-tag-1">
                                            <p className="reg-25"><span>03</span></p>
                                            <h4 className="reg-55"><span>Giftshops</span></h4>
                                            <img className="img-fluid pt-4" src={food} alt=""/>
                                        </div>
                                    </a>
                                    <a href="#">
                                        <div className="category-card mt-30 bg-tag-5">
                                            <p className="reg-25"><span>06</span></p>
                                            <h4 className="reg-55"><span>Managements</span></h4>
                                            <img className="img-fluid pt-4" src={food} alt=""/>
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