// import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/Context';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../styles/ProductDetail.css';


const ProductDetail = () => {

    const context = useContext(ShoppingCartContext);

    return (
        <aside 
            className={`${context.isProductDetailOpen ? 'flex' : 'hidden'} product-detail flex-col fixed right-0 border border-black rounded-lg bg-white`}>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div 
                    className='h-6 w-6'
                    onClick={() => context.closeProductDetail()}
                    >
                    <XCircleIcon />
                </div>
            </div>
        </aside>
    );
}



export default ProductDetail;