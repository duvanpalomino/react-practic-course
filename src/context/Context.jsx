// import React from 'react';
import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    // Shopping Cart Increment quantity
    const [count, setCount] = useState(0);

    // Product Detail Open/Close
    const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
    const openProductDetail = () => setIsProductDetailOpen(true);
    const closeProductDetail = () => setIsProductDetailOpen(false);

    // Checkout Side Menu Open/Close
    const [isCheckOutSideMenuOpen, setIsCheckOutSideMenuOpen] = useState(false);
    const openCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(true);
    const closeCheckOutSideMenu = () => setIsCheckOutSideMenuOpen(false);

    // Product Detail Show Product 
    const [productToShow, setProductToShow] = useState({});

    // Shopping Cart Add products to cart
    const [cartProducts, setCartProducts] =useState([]);

    // Shopping Cart Order
    const[order, setOrder] = useState([]);

    return (
        <ShoppingCartContext.Provider value={{
            count,
            setCount,
            openProductDetail,
            closeProductDetail,
            isProductDetailOpen,
            productToShow,
            setProductToShow,
            cartProducts,
            setCartProducts,
            isCheckOutSideMenuOpen,
            openCheckOutSideMenu,
            closeCheckOutSideMenu,
            order,
            setOrder,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
};