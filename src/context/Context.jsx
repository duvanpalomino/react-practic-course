// import React from 'react';
import { createContext, useState, useEffect } from 'react';
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

    // Get Products 
    const [items, setItems] = useState(null);
    const [filteredItems, setFilteredItems] = useState(null);
    // console.log(filteredItems)

    // Get product by title
    const [searchByTitle, setSearchByTitle] = useState(null);
    console.log(searchByTitle);

    // Get product by category
    const [searchByCategory, setSearchByCategory] = useState(null);
    console.log(searchByCategory);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(response => response.json())
            .then(data => setItems(data))
    }, []); 

    const filteredItemsByTitle = (items, searchByTitle) => {
        return items?.filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()) ) 
    }

    const filteredItemsByCategory = (items, searchByCategory) => {
        return items?.filter(item => item.category.toLowerCase().includes(searchByCategory.toLowerCase()) ) 
    }

    const filterBy = (searchType, items, searchByTitle, searchByCategory) => {
        if(searchType === 'BY_TITLE') {
            return filteredItemsByTitle(items, searchByTitle)
        }

        if(searchType === 'BY_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory)
        }

        if(searchType === 'BY_TITLE_AND_CATEGORY') {
            return filteredItemsByCategory(items, searchByCategory).filter(item => item.title.toLowerCase().includes(searchByTitle.toLowerCase()))
        }

        if(!searchType) {
            return items 
        }
    }

    useEffect(() => {
        if (searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_TITLE_AND_CATEGORY', items, searchByTitle, searchByCategory));
        if (searchByTitle && !searchByCategory) setFilteredItems(filterBy('BY_TITLE', items, searchByTitle, searchByCategory));
        if (!searchByTitle && searchByCategory) setFilteredItems(filterBy('BY_CATEGORY', items, searchByCategory, searchByTitle,));
        if (!searchByTitle && !searchByCategory) setFilteredItems(filterBy(null, items, searchByCategory, searchByTitle,));
    }, [items, searchByTitle, searchByCategory]); 

    // useEffect(() => {
    //     if(searchByTitle) setFilteredItems(filteredItemsByTitle(items, searchByTitle))
    //     if(searchByCategory) setFilteredItems(filteredItemsByCategory(items, searchByCategory))
    // }, [items, searchByTitle, searchByCategory]);


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
            items,
            setItems,
            searchByTitle,
            setSearchByTitle,
            filteredItems,
            setFilteredItems,
            searchByCategory,
            setSearchByCategory,
        }}>
            { children }
        </ShoppingCartContext.Provider>
    )
};