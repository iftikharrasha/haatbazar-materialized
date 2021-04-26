import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardSlider from '../CardSlider/CardSlider';
import './Card.css';

const Card = () => {
    return (
        <>
            <section className="cards">
                <Container className="c_custom">
                    <Row>
                        <Col lg={12}>
                                <div className="brand-snippet">
                                    <h2 className="semi-50 text-right">Brands</h2>
                                    <span className="bottom-line bl-story"></span>
                                </div>
                        </Col>
                    </Row>
                </Container>

                <CardSlider></CardSlider>
            </section>
        </>
    );
};

export default Card;