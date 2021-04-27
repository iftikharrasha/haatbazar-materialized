import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './CardSlider.css';
import Card from '../Card/Card';

const CardSlider = () => {
    var settings = {
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2400,
        infinite: false,    
        speed: 1800,
        cssEase: 'cubic-bezier(.84, 0, .08, .99)',
        dots: true,
        arrows: true,
        responsive: [
        {
                breakpoint: 1500,
                settings: {
                slidesToShow: 2,
                slidesToScroll: 1,
              },
        },
          {
              breakpoint: 1028,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            },
          },
          {
              breakpoint: 770,
              settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              arrows: false,
            },
            
          },
          {
            breakpoint: 525,
            settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
          },
          
        },
        ],
      };

    return (
        <>

        <Container fluid>
            <Row>
                <Col lg={10} className="offset-lg-1">
                    <div className="products-slick" data-nav="#slick-nav-1">

<Slider {...settings}>

                        <Card></Card>

                        <Card></Card>

                        <Card></Card>

                        <Card></Card>

                        <Card></Card>

                        <Card></Card>

</Slider>
                        
                    </div>

                    <div id="slick-nav-1" className="products-slick-nav"></div>

                </Col>

            </Row>
        </Container>
            
        </>
    );
};

export default CardSlider;