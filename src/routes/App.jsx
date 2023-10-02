import React from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom'
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrders';
import MyOrders from '../Pages/MyOrders';
import SingIn from '../Pages/SingIn';
import NotFound from '../Pages/NotFound';
import '../styles/App.css';

const AppRoutes = () => {
  let routes = useRoutes([
      { path: '/', element: <Home />},
      { path: '/my-account', element: <MyAccount />},
      { path: '/my-order', element: <MyOrder />},
      { path: '/my-orders', element: <MyOrders />},
      { path: '/sing-in', element: <SingIn />},
      { path: '/*', element: <NotFound />},
    ])

    return routes;
}

function App() {  
  return (
    <BrowserRouter >
      <AppRoutes />
    </BrowserRouter>
  )
}

export default App
