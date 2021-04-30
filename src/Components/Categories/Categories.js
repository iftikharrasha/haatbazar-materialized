import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <>
        
                                        <ul className="list-group product-categories">
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Foods<span className="count">34</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Gadgets<span className="count">31</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Cosmetics<span className="count">21</span></a> 
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Clothing<span className="count">16</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Gifts<span className="count">11</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Grocery<span className="count">12</span></a>
                                            </li>
                                        </ul>
        </>
    );
};

export default Categories;