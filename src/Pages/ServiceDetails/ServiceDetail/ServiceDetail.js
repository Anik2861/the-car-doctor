import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetail.css'


const ServiceDetail = () => {
    const { serviceId } = useParams()
    return (
        <div className='text-center'>
            <h1>Service Detail{serviceId}</h1>
            <Link to='/checkout'>
                <button className='btn btn-primary'>Checkout</button>
            </Link>
        </div>
    );
};

export default ServiceDetail;