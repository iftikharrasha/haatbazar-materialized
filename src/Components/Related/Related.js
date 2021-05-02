
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import CardSlider from '../CardSlider/CardSlider';
import './Related.css';

function Related(props) {
    return (
        <>
            <section className="related">
                <Container className="c_custom">
                        <Row className="pt-4">
                            <Col sm={12}>
                                    <div className="brand-snippet">
                                        <h2 className="light-28">You may also like</h2>
                                        <span className="bottom-line bl-cat"></span>
                                    </div>
                            </Col>
                        </Row>
                </Container> 
                
                <CardSlider></CardSlider>
            </section>
        </>
    );
}

export default Related;