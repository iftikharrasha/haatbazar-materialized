import React from 'react';
import './Hero.css';
import haatbazar from '../../img/haatbazar.png'; 

const Hero = () => {
    return (
        <>
            <section className="One my-5">
                    <div className="container c_custom">
                        <div className="row pt-4">
                            <div className="col-sm-2 one-red-height">
                                <div className="one-red pl-5">
                                    <svg width="44" height="578" viewBox="0 0 44 578" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="44" height="578" rx="22" fill="#DF313C"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-sm-4">
                                <div className="row">
                                    <div className="col-sm-12 text-top-height">
                                        <div className="text-top">
                                            <h2 className="semi-50">NSU HAATBAZAR</h2>
                                            <p className="reg-25">The legacy of NSU Entrepreneurship.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-sm-6 two-red-height">
                                        <div className="two-red">
                                            <svg width="115" height="297" viewBox="0 0 115 297" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="115" height="297" rx="57.5" fill="#FCDC3D"/>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="col-sm-6 three-red-height">
                                        <div className="three-red">
                                            <svg width="182" height="638" viewBox="0 0 182 638" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <rect width="182" height="638" rx="91" fill="#E83E03"/>
                                            </svg>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-3 four-red-height">
                                <div className="four-red">
                                    <img src={haatbazar} alt="haatbazar"/>
                                </div>
                            </div>
                            <div className="col-sm-2 five-red-height">
                                <div className="five-red">
                                    <svg width="182" height="632" viewBox="0 0 182 632" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="182" height="632" rx="91" fill="#052FD3"/>
                                    </svg>
                                </div>
                            </div>
                            <div className="col-sm-1 six-red-height">
                                <div className="six-red">
                                    <svg width="26" height="554" viewBox="0 0 26 554" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect width="26" height="554" rx="13" fill="#E83E03"/>
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
        </>
    );
};

export default Hero;