import React from 'react';
import duplicates from 'find-array-duplicates';
import './Categories.css';

const Categories = (props) => {
    const outletCat = props.outlet;
    const categories = [...new Set(outletCat.map(cat => cat.category))];
    // console.log(categories);

    return (
        <>
            <ul className="list-group product-categories">
                {
                    categories.map(cat => 
                        <li>
                            <a href="#" className="reg-20 list-group-item">{cat}<span className="count">34</span></a>
                        </li>
                                    )
                }
            </ul>
        </>
    );
};

export default Categories;