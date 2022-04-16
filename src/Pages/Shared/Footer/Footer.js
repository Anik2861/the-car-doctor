import React from 'react';
import './Footer.css'


const Footer = () => {
    const today=new Date()
    const year=today.getFullYear()
    return (
        <div>
            <h3 className='text-center mt-5'>Copyright 	&copy; {year}</h3>
            <p className='text-center'>All right reserve by Shohidul Jaman Anik</p>
        </div>
    );
};

export default Footer;