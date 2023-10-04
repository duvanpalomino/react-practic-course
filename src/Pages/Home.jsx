// import React from 'react';
import { useState, useEffect } from 'react';
import Card from "../container/Card";

const Home = () => {

    const [items, setItems] = useState(null);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []); 

    return (
        <>
            <div className='grid gap-4 grid-cols-4 w-full max-w-screen-lg'>
                {
                items?.map(item => (
                    <Card key={item.id} data={item}/>
                ))
                }
            </div>
        </>
    );
}

export default Home;