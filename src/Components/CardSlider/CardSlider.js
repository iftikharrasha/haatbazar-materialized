import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import theminusplan from '../../uploads/outlets/theminusplan.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './CardSlider.css';

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
                    {/* card starts  */}
                    <div className="cards">
                       <div className="card_in">
                           <div className="card_top">
                                <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                                </a>
                           </div>
                           <div className="card_below">
                                   <h4>The Minus Plan</h4>
                                   <p>
                                   The Real taste of Nan Roti in Kashundi
                                   </p>
                                   <div className="reactions">
                                        <div className="chart-1">
                                            <button type="button">
                                                <i className="fa fa-heart"> 30</i>
                                            </button>
                                        </div>
                                        <div className="chart-2">
                                            <button type="button">
                                                <a href=""><i className="fa fa-eye"> 97</i></a>
                                            </button>
                                        </div>
                                    </div>
                           </div>
                       </div>
                    </div>
                    {/* card ends  */}

                    {/* card starts  */}
                    <div className="cards">
                       <div className="card_in">
                           <div className="card_top">
                                <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                                </a>
                           </div>
                           <div className="card_below">
                                   <h4>The Minus Plan</h4>
                                   <p>
                                   The Real taste of Nan Roti in Kashundi
                                   </p>
                                   <div className="reactions">
                                        <div className="chart-1">
                                            <button type="button">
                                                <i className="fa fa-heart"> 30</i>
                                            </button>
                                        </div>
                                        <div className="chart-2">
                                            <button type="button">
                                                <a href=""><i className="fa fa-eye"> 97</i></a>
                                            </button>
                                        </div>
                                    </div>
                           </div>
                       </div>
                    </div>
                    {/* card ends  */}

                    {/* card starts  */}
                    <div className="cards">
                       <div className="card_in">
                           <div className="card_top">
                                <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                                </a>
                           </div>
                           <div className="card_below">
                                   <h4>The Minus Plan</h4>
                                   <p>
                                   The Real taste of Nan Roti in Kashundi
                                   </p>
                                   <div className="reactions">
                                        <div className="chart-1">
                                            <button type="button">
                                                <i className="fa fa-heart"> 30</i>
                                            </button>
                                        </div>
                                        <div className="chart-2">
                                            <button type="button">
                                                <a href=""><i className="fa fa-eye"> 97</i></a>
                                            </button>
                                        </div>
                                    </div>
                           </div>
                       </div>
                    </div>
                    {/* card ends  */}

                    {/* card starts  */}
                    <div className="cards">
                       <div className="card_in">
                           <div className="card_top">
                                <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                                </a>
                           </div>
                           <div className="card_below">
                                   <h4>The Minus Plan</h4>
                                   <p>
                                   The Real taste of Nan Roti in Kashundi
                                   </p>
                                   <div className="reactions">
                                        <div className="chart-1">
                                            <button type="button">
                                                <i className="fa fa-heart"> 30</i>
                                            </button>
                                        </div>
                                        <div className="chart-2">
                                            <button type="button">
                                                <a href=""><i className="fa fa-eye"> 97</i></a>
                                            </button>
                                        </div>
                                    </div>
                           </div>
                       </div>
                    </div>
                    {/* card ends  */}

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