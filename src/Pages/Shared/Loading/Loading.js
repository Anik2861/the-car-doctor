import React from 'react';
import { Spinner } from 'react-bootstrap';
import './Loading.css'


const Loading = () => {
    return (
        <div className='w-100 d-flex justify-content-center align-items-center' >
            <Spinner animation="border" variant="primary" />
        </div>
    );
};

export default Loading;