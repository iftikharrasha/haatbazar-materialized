import React from 'react';
import './Categories.css';

const Categories = () => {
    return (
        <>
        
                                        <ul class="product-categories sticky-el cat-top stick-pad">
                                            <li className="reg-20">
                                                <a href="#">Foods</a>
                                                <span class="count">34</span>
                                            </li>
                                            <li className="reg-20">
                                                <a href="#">Gadgets</a>
                                                <span class="count">31</span>
                                            </li>
                                            <li className="reg-20">
                                                <a href="#">Cosmetics</a>
                                                <span class="count">21</span>
                                            </li>
                                            <li className="reg-20">
                                                <a href="#">Clothing</a>
                                                <span class="count">16</span>
                                            </li>
                                            <li className="reg-20">
                                                <a href="#">Gifts</a>
                                                <span class="count">11</span>
                                            </li>
                                            <li className="reg-20">
                                                <a href="#">Grocery</a>
                                                <span class="count">12</span>
                                            </li>
                                        </ul>
        </>
    );
};

export default Categories;