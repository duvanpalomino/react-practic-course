// import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { ShoppingCartContext } from '../context/Context';
import OrdersCard from "../container/OrdersCard";


const MyOrders = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <>
            <div className='flex items-center justify-center relative w-80 '>
                <h1>My Orders</h1>
            </div>
            {
                context.order.map((order, index) => {
                    <Link key={index} to={`/my-orders/${order.id}`}>
                        <OrdersCard  
                            totalPrice={order.totalPrice} 
                            totalProducts={order.totalProducts} />
                    </Link>
                    
                })
            }
        </>
    );
}

export default MyOrders;