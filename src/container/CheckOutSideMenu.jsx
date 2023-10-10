// import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import OrderCard from './OrderCard';
import { totalPrice } from '../utils/Utils';
import '../styles/CheckOutSideMenu.css';


const CheckOutSideMenu = () => {

    const context = useContext(ShoppingCartContext);

    const handleDelete = (id) => {
        const filteredProducts = context.cartProducts.filter( product => product.id != id)
        context.setCartProducts(filteredProducts);
        context.setCount(context.count - 1);
    }

    return (
        <aside 
            className={`${context.isCheckOutSideMenuOpen ? 'flex' : 'hidden'} checkout-side-menu flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>My Order</h2>
                <div 
                    className='h-6 w-6 cursor-pointer'
                    onClick={() => context.closeCheckOutSideMenu()}
                    >
                    <XCircleIcon />
                </div>
            </div>
            <div className='px-6 overflow-y-scroll'>
                {
                    context.cartProducts.map((product) => (
                        <OrderCard 
                            key={ product.id }
                            id={ product.id }
                            title={ product.title }
                            imageURL={ product.image }
                            price={ product.price }
                            handleDelete={ handleDelete }
                            />
                    ))
                }
            </div>
            <div className='px-6'>
                <p className='flex justify-between items-center'>
                    <span className='font-medium'>Total</span>
                    <span className='font-medium text-1xl'>${totalPrice(context.cartProducts)}</span>
                </p>
            </div>
        </aside>
    );
}



export default CheckOutSideMenu;