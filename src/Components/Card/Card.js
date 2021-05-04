import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const {outlet, title, img, react, views, key} = props.outlet;

    return (
        <>
            <div className="cards d-flex justify-content-center">
                       <div className="card_in">
                           <div className="card_top">
                                <Link to={"/profile/"+key}>
                                    <figure className="outlet-avatar">
                                        <LazyLoadImage effect="blur" src={img}/>
                                    </figure>
                                </Link>
                           </div>
                           <div className="card_below">
                                   <h4>{outlet}</h4>
                                   <p>
                                   {title}
                                   </p>
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
        </>
    );
};

export default Card;