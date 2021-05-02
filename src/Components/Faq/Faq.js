import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'
import './Faq.css';

const Faq = () => {
    return (
        <>
            <section className="faq">
                <div className="cover">
                    <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clip-path="url(#clip0)">
                        <path d="M0 0H1920V196.068L0 381V0Z" fill="#CCDEE2"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1515.1 41.8938C1482.96 66.6976 1469.57 106.008 1478.68 148.82L1481.21 160.719L1515.05 146.452L1548.88 132.184L1547.54 123.624C1545.38 109.728 1547.62 99.0525 1554.32 91.4271C1564.32 80.0377 1577.22 79.1766 1590.13 89.0404C1597.28 94.5107 1604.01 108.302 1603.79 117.027C1603.72 119.871 1597.84 137.853 1590.73 156.987C1573.8 202.543 1573.75 203.638 1587.55 236.421L1598.02 261.3L1629.57 247.997L1661.12 234.694L1653.83 215.191C1648.9 202.01 1646.69 193.718 1647.01 189.612C1647.27 186.269 1652.44 171.081 1658.5 155.859C1676.11 111.599 1677.24 99.0036 1665.97 72.1143C1654.88 45.6263 1641.77 32.0553 1618.87 23.3629C1603.99 17.7133 1587.44 16.1688 1569.72 18.7781C1556.03 20.7928 1525.95 33.5249 1515.1 41.8938ZM1624 275.126C1604.56 296.553 1612.7 331.007 1639.62 341.153C1659.56 348.673 1681.65 339.763 1690.62 320.576C1700.89 298.622 1690.79 273.323 1668.37 264.872C1653.14 259.128 1634.64 263.404 1624 275.126Z" fill="#FCC8DF"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1498.34 51.2659C1466.2 76.0697 1452.81 115.381 1461.92 158.192L1464.45 170.091L1498.29 155.824L1532.12 141.556L1530.79 132.996C1528.62 119.1 1530.86 108.425 1537.56 100.799C1547.56 89.4097 1560.47 88.5486 1573.37 98.4125C1580.52 103.883 1587.26 117.674 1587.03 126.399C1586.96 129.244 1581.08 147.225 1573.97 166.359C1557.04 211.915 1557 213.011 1570.79 245.793L1581.27 270.672L1612.82 257.369L1644.36 244.066L1637.07 224.563C1632.14 211.382 1629.93 203.091 1630.25 198.984C1630.51 195.641 1635.68 180.453 1641.74 165.231C1659.36 120.971 1660.48 108.376 1649.22 81.4864C1638.12 54.9984 1625.01 41.4273 1602.12 32.735C1587.23 27.0853 1570.68 25.5409 1552.96 28.1502C1539.27 30.1648 1509.19 42.897 1498.34 51.2659Z" fill="#77E0B5"/>
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1610.34 284.537C1590.89 305.965 1599.04 340.419 1625.95 350.565C1645.89 358.084 1667.98 349.175 1676.96 329.988C1687.23 308.033 1677.12 282.734 1654.71 274.283C1639.48 268.54 1620.97 272.816 1610.34 284.537Z" fill="#FCDC3D"/>
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
                                        <h2 className="semi-50 text-left">FAQ's</h2> 
                                        <span className="bottom-line bl-cat"></span>
                                    </Col>
                                </Row>
                        </div>

                        <div className="outlet-below mt-150-div">
                                <Row className="pt-5">
                                    <Col sm={12} className="pb-5">
                                        <Accordion defaultActiveKey="0">
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="0">
                                                        <span className="fa-stack fa-sm text-white">
                                                            <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
                                                            <i className="fas fa-stack-1x fa-inverse text-dark fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                        <span className="c-tag-3">
                                                            Oestion Number 1
                                                        </span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="0">
                                                <Card.Body>This is the answer of the question</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="1">
                                                        <span className="fa-stack fa-sm text-white">
                                                            <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
                                                            <i className="fas fa-stack-1x fa-inverse text-dark fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                        <span className="c-tag-3">
                                                            Oestion Number 2
                                                        </span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="1">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="2">
                                                        <span className="fa-stack fa-sm text-white">
                                                            <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
                                                            <i className="fas fa-stack-1x fa-inverse text-dark fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                        <span className="c-tag-3">
                                                            Oestion Number 2
                                                        </span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="2">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="3">
                                                        <span className="fa-stack fa-sm text-white">
                                                            <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
                                                            <i className="fas fa-stack-1x fa-inverse text-dark fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                        <span className="c-tag-3">
                                                            Oestion Number 2
                                                        </span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="3">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                            <Card>
                                                <Accordion.Toggle as={Card.Header} eventKey="4">
                                                        <span className="fa-stack fa-sm text-white">
                                                            <i className="fas fa-circle fa-stack-2x" aria-hidden="true"></i>
                                                            <i className="fas fa-stack-1x fa-inverse text-dark fa-plus" aria-hidden="true"></i>
                                                        </span>
                                                        <span className="c-tag-3">
                                                            Oestion Number 2
                                                        </span>
                                                </Accordion.Toggle>
                                                <Accordion.Collapse eventKey="4">
                                                <Card.Body>Hello! I'm another body</Card.Body>
                                                </Accordion.Collapse>
                                            </Card>
                                        </Accordion>
                                    </Col>
                                </Row>
                        </div>
                </Container>  
            </section>
        </>
    );
};

export default Faq;