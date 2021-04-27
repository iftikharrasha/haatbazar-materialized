import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <>
        
                                        <ul class="list-group product-categories">
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Foods<span class="count">34</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Gadgets<span class="count">31</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Cosmetics<span class="count">21</span></a> 
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Clothing<span class="count">16</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Gifts<span class="count">11</span></a>
                                            </li>
                                            <li>
                                                <a href="#" className="reg-20 list-group-item">Grocery<span class="count">12</span></a>
                                            </li>
                                        </ul>
        </>
    );
};

export default Categories;