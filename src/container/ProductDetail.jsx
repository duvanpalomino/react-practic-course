// import React from 'react';
import { XCircleIcon } from '@heroicons/react/24/solid';
import '../styles/ProductDetail.css';


const ProductDetail = () => {
    return (
        <aside className='product-detail flex flex-col fixed right-0 border border-black rounded-lg bg-white'>
            <div className='flex justify-between items-center p-6'>
                <h2 className='font-medium text-xl'>Detail</h2>
                <div className='h-6 w-6'>
                    <XCircleIcon />
                </div>
            </div>
        </aside>
    );
}



export default ProductDetail;