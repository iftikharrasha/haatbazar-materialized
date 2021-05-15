import React from 'react';
import duplicates from 'find-array-duplicates';
import './Categories.css';

const Categories = ({ filterItems, categories }) => {
    // const outletCat = props.outlet;
    // const categories = [...new Set(outletCat.map(cat => cat.category))];
    // console.log(categories);

    return (
        <>
            <ul className="list-group product-categories">
                {
                    categories.map((category, index) => 
                        <li>
                            <button type="button" className="reg-20 list-group-item" key={index} onClick={() => filterItems(category)}>{category}<span className="count">34</span></button>
                        </li>
                                    )
                }
            </ul>
        </>
    );
};

export default Categories;