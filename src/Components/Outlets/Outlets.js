import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Categories from '../Categories/Categories';
import OutletCard from '../OutletCard/OutletCard';
import catToggle from '../../img/toggler-icon.svg';
import './Outlets.css';
import outletData from '../../fakeData/data.json';

const Outlets = () => {
    const [outlet, setOutlet] = useState([]);
    useEffect(() => {
      setOutlet(outletData);
      console.log(outletData);
    }, [])

    function activeDrawer(){
        document.getElementById('toggle-in').classList.toggle('bmd-drawer-in');
        document.getElementById('overlay-in').classList.toggle('in');
    }

    return (
        <>
        <section>
            <div className="cover">

                <svg className="cover-svg" viewBox="0 0 1920 381" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <g clipPath="url(#clip0)">
                    <path d="M0 0H1920V196.068L0 381V0Z" fill="#CCDEE2"/>
                    <path d="M1415 50C1415 114.617 1362.62 167 1298 167C1233.38 167 1181 114.617 1181 50L1181 -51C1181 -115.617 1233.38 -168 1298 -168C1362.62 -168 1415 -115.617 1415 -51L1415 50Z" fill="#77E0B5"/>
                    <rect x="1642" y="-420" width="115" height="659" rx="57.5" fill="#FCC8DF"/>
                    <rect x="1471" y="-278" width="115" height="659" rx="57.5" fill="#FCDC3D"/>
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
                                <h2 className="semi-50 text-left">Outlets</h2> 
                                <span className="bottom-line bl-cat"></span>
                            </Col>
                        </Row>
                </div>
                <div className="outlet-below mt-150-div">
                        <Row className="pt-5">
                            <Col sm={12}>
                                <div className="bmd-layout-container bmd-drawer-f-l bmd-drawer-overlay" id="toggle-in">
                                        <header className="bmd-layout-header">
                                            <div className="navbar navbar-light bg-faded">
                                                <button className="navbar-toggler" type="button" data-toggle="drawer" data-target="#dw-p1" onClick={activeDrawer}>
                                                    <span className="sr-only">Toggle drawer</span>
                                                    <img src={catToggle} alt="toggle"/>
                                                </button>
                                                <ul className="nav navbar-nav">
                                                    <li className="nav-item">Showing: All</li>
                                                </ul>
                                            </div>
                                        </header>
                                        <div id="dw-p1" className="bmd-layout-drawer bg-faded">
                                            <header>
                                                <a className="navbar-brand semi-50">Categories</a>
                                            </header>
                                            <div className="cat-height">
                                                <Categories></Categories>
                                            </div>
                                        </div>
                                        <main className="bmd-layout-content">
                                                    <Row>
                                                        <Col lg={11} className="offset-lg-1">
                                                            <Row>

                                                            {
                                                                outlet.map(outlet => <Col sm={6} lg={4}>
                                                                                        <OutletCard outlet={outlet} key={outlet.key}></OutletCard>
                                                                                    </Col>
                                                                          )
                                                            }
                                                            </Row>
                                                        </Col>
                                                    </Row>
                                        </main>
                                        <div class="bmd-layout-backdrop" id="overlay-in" onClick={activeDrawer}></div>
                                </div>
                            </Col>
                        </Row>
                </div>
            </Container>  
        </section>

        </>
    );
};

export default Outlets;