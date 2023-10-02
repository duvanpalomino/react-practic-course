import React from 'react';
import Home from '../Home/Index';
import MyAccount from '../MyAccount/Index';
import MyOrder from '../MyOrders/Index';
import MyOrders from '../MyOrders/Index';
import SingIn from '../SingIn/Index';
import NotFound from '../NotFound/Index';
import './App.css';

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
