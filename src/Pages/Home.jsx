// import React from 'react';
import { useContext } from 'react';
import { ShoppingCartContext } from '../context/Context';
import Card from "../container/Card";
import ProductDetail from '../container/ProductDetail';

const Home = () => {

    const context = useContext(ShoppingCartContext)

    const renderView = () => {
      if (context.filteredItems?.length > 0) {
        return (
          context.filteredItems?.map(item => (
            <Card key={item.id} data={item} />
          ))
        )
        } else {
          return (
            <div>We do not have anything :(</div>
          )
        }
    } 

    return (
        <>
            <div className='flex items-center justify-center relative w-80 mb-2'>
                <h1 className='font-medium text-xl'>Exclusive Products</h1>
            </div>
            <input 
                type="text" 
                className='text-center rounded-lg border border-black w-80 h-10 p-4 mb-6 focus:outline-none'
                placeholder='Search a product' 
                onChange={(event) => context.setSearchByTitle(event.target.value)}/>
            <div className='grid gap-6 grid-cols-4 w-full max-w-screen-lg'>
                {renderView()}
            </div>
            <ProductDetail />
        </>
    );
}

export default Home;