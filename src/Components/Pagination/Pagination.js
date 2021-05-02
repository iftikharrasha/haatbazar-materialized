import React, {useState, useEffect} from 'react';
import './Pagination.css';

const Pagination = ({ showPerPage, onPaginationChange, total }) => {
    const [numberOfButtons, setNumberOfButtons] = useState(Math.ceil(total/showPerPage));
    const [counter, setCounter] = useState(1);
    useEffect(() => {
        const value = showPerPage * counter;
        onPaginationChange(value - showPerPage, value);
    },[counter]);

    const onButtonClick = (type, value) => {
        if(type === 'prev'){
            if(counter === 1){
                setCounter(1);
            }else{
                setCounter(counter - 1);
            }
        }else if(type === 'next'){
            if(Math.ceil(total/showPerPage) === counter){
                setCounter(counter);
            }else{
                setCounter(counter + 1);
            }
        }
    }

    return (
        <>
            <div className="d-flex justify-content-center pt-5">
                {/* <button className="btn btn-primary" onClick={() => onButtonClick('prev')}>Previous</button>
                <button className="btn btn-primary" onClick={() => onButtonClick('next')}>Next</button> */}

                <nav aria-label="Page navigation example">
                <ul class="pagination page-ul">
                    <li class="page-item prev"><a class="page-link" href="#" onClick={() => onButtonClick('prev')}>Previous</a></li>
                    
                    {
                        new Array(numberOfButtons).fill("").map((el, index) => (
                            <li class={`page-item pageNumber ${index+1 === counter ? "active": null}`}>
                                <a class="page-link" href="#" onClick={() => setCounter(index+1)}>{index+1}</a>
                            </li>
                        )) 
                    }
                    
                    <li class="page-item next"><a class="page-link" href="#" onClick={() => onButtonClick('next')}>Next</a></li>
                </ul>
                </nav>
            </div>
        </>
    );
};

export default Pagination;