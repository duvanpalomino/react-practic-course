// import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/24/solid';
import { CalendarDaysIcon } from '@heroicons/react/24/solid';
import { ChevronRightIcon } from '@heroicons/react/24/solid';

const OrdersCard = props => {
    const { totalPrice, totalProducts } = props;

    return (
        <div className='flex justify-between items-center w-100 h-10 mb-6 border border-black rounded-lg'>
            <span className='flex justify-between w-full items-center px-6'>
                <span className='flex justify-between items-center'>
                    <div className='h-6 w-6'>
                        <ShoppingCartIcon/>
                    </div>
                    <div className='text-sm font-light'>
                        {totalProducts} productos   
                    </div>
                </span>
                <span className='px-6 text-sm font-light'>${totalPrice}</span>
                <span className='flex justify-between items-center px-6'>
                    <div className='h-6 w-6'>
                        <CalendarDaysIcon />
                    </div>
                    <div className='text-sm font-light'>
                        18/10/23
                    </div>
                </span>
                <span className='h-6 w-6 cursor-pointer'>
                    <ChevronRightIcon />
                </span>
            </span>            
        </div>
    );
}

export default OrdersCard; 