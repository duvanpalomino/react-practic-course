// import React from 'react'
import { useContext } from "react";
import { ShoppingCartContext } from '../context/Context';
import { PlusIcon } from '@heroicons/react/24/solid'

const Card = (data) => {

    const context = useContext(ShoppingCartContext); 

    const showProduct = (ProductDetail) => {
        context.openProductDetail()
        context.setProductToShow(ProductDetail)
    }

    return (
        <div 
            className='bg-white cursor-pointer w-56 h-60 rounded-lg' 
            onClick={() => showProduct(data.data)}
            >
            <figure className='relative mb-2 w-full h-4/5'>
                <span className='absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5'>
                    {data.data.category}
                </span>
                <img 
                    className='w-full h-full object-fill rounded-lg'
                    src={data.data.image} alt={data.data.title} />
                <button 
                    className='absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1'
                    onClick={() => context.setCount(context.count + 1)}>
                    <PlusIcon />
                </button>
            </figure>
            <p className='flex justify-between'>
                <span className='text-sm font-light'>
                    {data.data.title}
                </span>
                <span className='text-lg font-medium'>
                    ${data.data.price}
                </span>
            </p>
        </div>
    );
}

export default Card;