import { useContext } from 'react';
import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom'
import { ShoppingCartProvider, initializeLocalStorage, ShoppingCartContext } from '../context/Context';
import Layout from '../container/Layout';
import Home from '../Pages/Home';
import MyAccount from '../Pages/MyAccount';
import MyOrder from '../Pages/MyOrder';
import MyOrders from '../Pages/MyOrders';
import SignIn from '../Pages/SignIn';
import NotFound from '../Pages/NotFound';
import Navbar from '../container/Navbar';
import CheckOutSideMenu from '../container/CheckOutSideMenu';
import '../styles/App.css';

const AppRoutes = () => {

  const context = useContext(ShoppingCartContext)
  // Account
  const account = localStorage.getItem('account')
  const parsedAccount = JSON.parse(account)
  // Sign Out
  const signOut = localStorage.getItem('sign-out')
  const parsedSignOut = JSON.parse(signOut)
  // Has an account
  const noAccountInLocalStorage = parsedAccount ? Object.keys(parsedAccount).length === 0 : true
  const noAccountInLocalState = Object.keys(context.account).length === 0
  const hasUserAnAccount = !noAccountInLocalStorage || !noAccountInLocalState
  const isUserSignOut = context.signOut || parsedSignOut
  
  let routes = useRoutes([
      { path: '/', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} /> },
      { path: '/electronics', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
      { path: '/jewelery', element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
      { path: `/men's-clothing`, element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
      { path: `/women's-clothing`, element: hasUserAnAccount && !isUserSignOut ? <Home /> : <Navigate replace to={'/sign-in'} />},
      { path: '/my-account', element: <MyAccount />},
      { path: '/my-order', element: <MyOrder />},
      { path: '/my-orders', element: <MyOrders />},
      { path: '/my-orders/last', element: <MyOrder />},
      { path: '/my-orders/:id', element: <MyOrder />},
      { path: '/sign-in', element: <SignIn />},
      { path: '/*', element: <NotFound />},
    ])

    return routes;
}

function App() {
  initializeLocalStorage();  
  return (
    <ShoppingCartProvider>
      <BrowserRouter >
        <Navbar />
        <Layout>
          <AppRoutes />
        </Layout>
        <CheckOutSideMenu />
      </BrowserRouter>
    </ShoppingCartProvider>
  )
}

export default App
