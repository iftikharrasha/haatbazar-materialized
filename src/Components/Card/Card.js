import React, { useState } from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import { Link } from 'react-router-dom';
import './Card.css';

const Card = (props) => {
    const {outlet, title, img, react, views, key} = props.outlet;

    const [count, setCount] = useState(0);
    const handleIncrease = () => {
      const newCount = count + 1;
      setCount(newCount);
    }

    const loveStyle = {
      color: (()=>{
          if(count < 1){
            return '#ABB6C1';
          }else{
            return '#EF4B69';
          }
      })()
    }

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
                                            <button type="button" className="react" onClick={handleIncrease}>
                                                <i className="fa fa-heart" style={loveStyle}></i> {react + count}
                                            </button>
                                        </div>
                                        <div className="chart-2">
                                            <div className="view">
                                                <i className="fa fa-eye"></i> {views}
                                            </div>
                                        </div>
                                    </div>
                           </div>
                       </div>
            </div>
        </>
    );
};

export default Card;