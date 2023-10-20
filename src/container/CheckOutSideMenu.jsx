// import React from 'react';
import { useContext } from 'react';
import { Link } from 'react-router-dom';
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
    };

    const handleCheckout = () => {
        const orderToAdd = {
            date: '01.02.23',
            products: context.cartProducts,
            totalProducts: context.cartProducts.length,
            totalPrice: totalPrice(context.cartProducts)
        }

        context.setOrder([...context.order, orderToAdd]);
        context.setCartProducts([]);
        context.setCount(0);
        context.closeCheckOutSideMenu();
        context.setSearchByTitle(null)
    };

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
            <div className='px-6 overflow-y-scroll no-scrollbar flex-1'>
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
            <div className='px-6 mb-6'>
                <p className='flex justify-between items-center mb-2'>
                    <span className='font-medium'>Total</span>
                    <span className='font-medium text-1xl'>${totalPrice(context.cartProducts)}</span>
                </p>
                <Link to='/my-orders/last'>
                    <button
                        className='w-full bg-black py-3 text-white rounded-lg'
                        onClick={() => handleCheckout() }
                    >
                        Checkout
                    </button>
                </Link>
            </div>
        </aside>
    );
}



export default CheckOutSideMenu;