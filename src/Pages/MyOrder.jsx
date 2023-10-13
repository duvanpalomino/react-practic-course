// import React from 'react';
import { useContext } from 'react'
import { ShoppingCartContext } from '../context/Context';
import OrderCard from '../container/OrderCard';

const MyOrder = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <>
            MyOrder
            <div className='flex flex-col w-80'>
                {
                    context.order?.slice(-1)[0].products.map( product => (
                        <OrderCard 
                            key={ product.id }
                            id={ product.id }
                            title={ product.title }
                            imageURL={ product.image }
                            price={ product.price }
                            />
                    ))
                }
            </div>
        </>
    );
}

export default MyOrder;