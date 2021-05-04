import React from 'react';
import './Categories.css';

const Categories = (props) => {
    const outletCat = props.outlet;
    // const categories = [...new Set(outletCat.map(cat => cat.category))];
    // console.log(categories);
    // const categories = outletCat.map(item => item.category).filter((value, index, self) => self.indexOf(value) === index);
    // console.log(categories);

    return (
        <>
        
                                        <ul className="list-group product-categories">
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Foods<span className="count">34</span></a>
                                            </li>

                                            {/* {
                                                
                                                [...new Set(outletCat.map(cat => 


                                                    <li>
                                                        <a href="#" className="reg-20 list-group-item">{cat.category}<span className="count">34</span></a>
                                                    </li>

                                                
                                                ))]

                                            } */}


                                        </ul>
        </>
    );
};

export default Categories;