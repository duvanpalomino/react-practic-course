// import React from 'react';
import propTypes from 'prop-types';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../styles/OrderCard.css';

const OrderCard = props => {
    const { id, title, imageURL, price, handleDelete } = props;

    OrderCard.propTypes = {
        title: propTypes.node.isRequired,
        imageURL: propTypes.node.isRequired,
        price: propTypes.node.isRequired,
    }

    return (
        <div className='flex justify-between items-center mb-3'>
            <div className='flex items-center gap-2'>
                <figure className='w-20 h-20'>
                    <img className='w-full h-full rounded-lg object-fill' 
                        src={imageURL} alt={title} />
                </figure>
                <p className='text-sm font-light line-clamp-1'>
                    {title}
                </p>
            </div>
            <div className='flex items-center gap-2'>
                <p className='text-lg font-medium'>
                    {price}
                </p>
                <XCircleIcon 
                    onClick={() => handleDelete(id) }
                    className='h-6 w-6 text-black cursor-pointer'/>
            </div>
        </div>
    );
}

export default OrderCard;