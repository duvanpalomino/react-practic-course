// import React from 'react';
import PropTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../styles/OrderCard.css';

const OrderCard = props => {
    const { title, imageURL, price } = props;

    OrderCard.PropTypes = {
        title: PropTypes.node.isRequired,
        imageURL: PropTypes.node.isRequired,
        price: PropTypes.node.isRequired,
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-fill' 
                        src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light'>
                    {title}
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>
                <XCircleIcon className='h-6 w-6 text-black cursor-pointer'/>
            </div>
        </div>
    );
}

export default OrderCard;