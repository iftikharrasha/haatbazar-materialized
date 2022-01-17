import React, { useState } from 'react';
import { useParams } from 'react-router';
import { Container, Row, Col } from 'react-bootstrap';
import { Button } from '@material-ui/core';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Profile.css';
import outletData from '../../fakeData/data.json';
import Related from '../Related/Related';

const Profile = () => {

    const { outletKey } = useParams();
    const outletDetail = outletData.find(brand => brand.key === outletKey);
    // console.log(outletDetail);

    const {outlet, title, img, description, owner, department, react, views, category, datetime, products} = outletDetail;

    //heart react starts
    const [count, setCount] = useState(0);
    const handleIncrease = () => {
      const newCount = count + 1;
      setCount(newCount);
    }

    const loveStyle = {
      color: (()=>{
          if(count < 1){
            return '#ABB6C1'
          }else{
            return '#EF4B69'
          }
      })()
    }
    //heart react ends

    //image snippet starts
    const clickedOne = bigImg => {
        document.getElementById('img-holder').src=bigImg;
    }

    let firstImg = products[Object.keys(products)[0]]; 
    //image snippet ends

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
                                                <i className="fa fa-heart c-tag-2" style={loveStyle} onClick={() => handleIncrease}></i>
                                                <span> {react + count}</span>
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
														<LazyLoadImage effect="blur" src={firstImg.product} alt="product" id="img-holder"/>
													</div>
													
													<div className="photo-album">
														<ul>

                                                            {
                                                            products.map(product => 
                                                                <li>
																    <LazyLoadImage effect="blur" className="img-fluid" onClick={() => clickedOne(product.product)} src={product.product} alt="green apple"/>
															    </li>
                                                            )
                                                            }
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

                                                            <p>{description}</p>
                                                            
                                                    </div>

                                                    <div className="avatar mt-3">
                                                        <img src="https://cdn.iconscout.com/icon/free/png-256/avatar-366-456318.png" alt="owner"/>
                                                        <div className="owner">
                                                            <h5>
                                                                {owner}
                                                            </h5>
                                                            <h6>
                                                                {department}
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

            <Related category={category}></Related>
        </>
    );
};

export default Profile;