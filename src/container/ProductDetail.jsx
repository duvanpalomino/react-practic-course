// import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../styles/ProductDetail.css';


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white overflow-y-scroll no-scrollbar`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div 
                    className='h-6 w-6 cursor-pointer'
                    onClick={() => context.closeProductDetail()}
                    >
                    <XCircleIcon />
                </div>
            </div>
            <div className='h-50'>
                <figure className='px-6'>
                    <img 
                        className='w-full h-40 rounded-lg' 
                        src={context.productToShow.images} 
                        alt={context.productToShow.title} 
                    />
                </figure>
            </div>
            <p className='flex flex-col p-6'>
                <span className='font-medium text-2xl mb-2'>${context.productToShow.price}</span>
                <span className='font-medium text-md mb-1'>{context.productToShow.title}</span>
                <span className='font-light text-sm'>{context.productToShow.description}</span>
            </p>
        </aside>
    );
}



export default ProductDetail;