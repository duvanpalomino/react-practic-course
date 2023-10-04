// import React from 'react';
import { createContext } from 'react';
import PropTypes from 'prop-types';

const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {

    ShoppingCartProvider.propTypes = {
        children: PropTypes.node.isRequired,
    };

    return (
        <ShoppingCartContext.Provider>
            { children }
        </ShoppingCartContext.Provider>
    )
};