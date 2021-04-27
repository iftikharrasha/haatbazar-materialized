import React from 'react';
import theminusplan from '../../uploads/outlets/theminusplan.jpg';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './Card.css';

const Card = () => {
    return (
        <>
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
        </>
    );
};

export default Card;