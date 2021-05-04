import React from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import '../Card/Card.css';
import './OutletCard.css';

const OutletCard = (props) => {
    const {outlet, img, react, views, key} = props.outlet;

    return (
        <>
            {/* card starts  */}
            <div className="cards cards-2 cards d-flex justify-content-center">
                       <div className="card_in">
                           <div className="card_top">
                                <Link to={"/profile/"+key}>
                                    <figure className="outlet-avatar outlet-avatar-2">
                                        <LazyLoadImage effect="blur" src={img}/>
                                    </figure>
                                </Link>
                           </div>
                           <div className="card_below">
                                   <h4>{outlet}</h4>
                                   <div className="reactions">
                                        <div className="chart-1">
                                            <button type="button">
                                                <i className="fa fa-heart"> {react}</i>
                                            </button>
                                        </div>
                                        <div className="chart-2">
                                            <button type="button">
                                                <a href=""><i className="fa fa-eye"> {views}</i></a>
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

export default OutletCard;