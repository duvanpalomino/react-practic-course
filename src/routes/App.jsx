import React from 'react';
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrders';
import MyOrders from '../Pages/MyOrders';
import SingIn from '../Pages/SingIn';
import NotFound from '../Pages/NotFound';
import '../styles/App.css';

function App() {
  
  return (
    <div className='bg-red-100'>
      <Home />
      <MyAccount />
      <MyOrder/>
      <MyOrders />
      <SingIn />
      <NotFound />
    </div>
  )
}

export default App
