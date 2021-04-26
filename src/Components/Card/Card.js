import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Slider from 'react-slick';
import "../../../node_modules/slick-carousel/slick/slick.css"; 
import "../../../node_modules/slick-carousel/slick/slick-theme.css";
import './Card.css';
import theminusplan from '../../uploads/outlets/theminusplan.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const Card = () => {
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
              slidesToShow: 1,
              slidesToScroll: 1,
              arrows: false,
            },
          },
        ],
      };

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

                <Container fluid>
                    <Row>
                        <Col lg={10} className="offset-lg-1">
                            <div className="products-slick" data-nav="#slick-nav-1">

<Slider {...settings}>
                            {/* card starts  */}
                            <div className="cards">
                               
                               <figure className="outlet-avatar">
                                   <LazyLoadImage effect="blur" src={theminusplan}/>
                               </figure>

                               <div className="card_in">
                                   <div className="card_left"></div>
                                   <div className="card_right">
                                       <div className="icon-item">
                                           <div className="chart">
                                               <button type="button">
                                                   <i className="fa fa-heart"> 30</i>
                                               </button>
                                           </div>
                                           <div className="chart">
                                               <button type="button">
                                                   <a href=""><i className="fa fa-eye"> 97</i></a>
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card_below">
                                           <h4>Nine</h4>
                                           <p>
                                           Lorem ipsum dolor sit amet consect etur, adipisicing elit.
                                           Exercitationem!
                                           </p>
                                   </div>
                               </div>
                            </div>
                            {/* card ends  */}

                            {/* card starts  */}
                            <div className="cards">
                               <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                               </a>

                               <div className="card_in">
                                   <div className="card_left"></div>
                                   <div className="card_right">
                                       <div className="icon-item">
                                           <div className="chart">
                                               <button type="button">
                                                   <i className="fa fa-heart"> 30</i>
                                               </button>
                                           </div>
                                           <div className="chart">
                                               <button type="button">
                                                   <a href=""><i className="fa fa-eye"> 97</i></a>
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card_below">
                                           <h4>Nine</h4>
                                           <p>
                                           Lorem ipsum dolor sit amet conse ctetur, adipisicing elit.
                                           Exercitationem!
                                           </p>
                                   </div>
                               </div>
                            </div>
                            {/* card ends  */}

                            {/* card starts  */}
                            <div className="cards">
                               
                                <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                                </a>

                               <div className="card_in">
                                   <div className="card_left"></div>
                                   <div className="card_right">
                                       <div className="icon-item">
                                           <div className="chart">
                                               <button type="button">
                                                   <i className="fa fa-heart"> 30</i>
                                               </button>
                                           </div>
                                           <div className="chart">
                                               <button type="button">
                                                   <a href=""><i className="fa fa-eye"> 97</i></a>
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card_below">
                                           <h4>Nine</h4>
                                           <p>
                                           Lorem ipsum dolor sit amet con se ctetur, adipisicing elit.
                                           Exercitationem!
                                           </p>
                                   </div>
                               </div>
                            </div>
                            {/* card ends  */}

                            {/* card starts  */}
                            <div className="cards">
                               
                                <a href="/profile">
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={theminusplan}/>
                                    </figure>
                                </a>

                                <div className="card_in">
                                   <div className="card_left"></div>
                                   <div className="card_right">
                                       <div className="icon-item">
                                           <div className="chart">
                                               <button type="button">
                                                   <i className="fa fa-heart"> 30</i>
                                               </button>
                                           </div>
                                           <div className="chart">
                                               <button type="button">
                                                   <a href=""><i className="fa fa-eye"> 97</i></a>
                                               </button>
                                           </div>
                                       </div>
                                   </div>
                                   <div className="card_below">
                                           <h4>Nine</h4>
                                           <p>
                                           Lorem ipsum dolor sit amet cons ecte tur, adipisicing elit.
                                           Exercitationem!
                                           </p>
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
            </section>
        </>
    );
};

export default Card;