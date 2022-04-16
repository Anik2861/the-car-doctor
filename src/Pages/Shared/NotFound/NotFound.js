import React from 'react';
import { Link } from 'react-router-dom';
import NotFound1 from '../../../images/NotFound/NotFound1.jpg'
import './NotFound.css'
const NotFound = () => {
    return (
        <div className='not-found'>
            <div className='descripiton'>
                <h1>The Page You have Enter Not Found</h1>
                <h3>Mechanic id sleeping</h3>
            </div>
            <div>
                <img className='sleeping ' src={NotFound1} alt="" />
                <Link className='not-found-btn' to='/'>Go to Home</Link>
            </div>
        </div>
    );
};

export default NotFound;