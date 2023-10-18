// import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../context/Context';
import OrdersCard from "../container/OrdersCard";


const MyOrders = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <div className='w-100'>
            <div className='flex items-center justify-center w-full relative mb-6'>
                <h1 className='font-medium text-xl'>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => (
                    <Link key={index} to={`/my-orders/${index}`}>
                        <OrdersCard  
                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts} />
                    </Link>
                ))
            }
        </div>
    );
}

export default MyOrders;