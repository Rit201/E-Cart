import React, { useState, createContext } from 'react';

export const CartContext = createContext();

const useFunctions = (props) => {

    const [CartItems, setCartItems] = useState([]);

    const useAddToCart = (product) => {

        product.quantity === 0 && (product.quantity++);
        !CartItems.includes(product) ?
            setCartItems([product, ...CartItems])
            : alert('Product is Already in Cart');
    };

    const RemoveFromCart = (cart) => {
        cart.quantity = 0;
        setCartItems(CartItems.filter(item => item !== cart));
    };

    const Increase = (cart) => {
        setCartItems(CartItems.filter(item => {
            if (item === cart) {
                item.quantity++;
            }
            return item;
        }))
    };

    const Decrease = (cart) => {
        setCartItems(CartItems.filter(item => {
            if (item === cart) {
                item.quantity--;

                if (item.quantity < 1) {
                    return false;
                }
                // else return true;
            }
            return item;
        }))
    };
    return (
        <CartContext.Provider value={{ CartItems }}>
            {props.children}
        </CartContext.Provider >
    )
    // CartItems,
    // AddToCart,
    // RemoveFromCart,
    // Increase,
    // Decrease
}
export default Functions;