// import React from 'react';
/**
 * This function calculates total price of a new order
 * @param {Array} products cartProducts: Array of objects
 * @returns {Number} Total Price
 */

export const totalPrice = (products) => {
    let sum = 0;
    products.forEach((product) => sum += product.price)
    return sum;
};