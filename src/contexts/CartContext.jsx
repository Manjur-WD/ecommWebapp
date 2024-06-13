// src/contexts/CartContext.js
import React, { createContext, useState } from "react";

const CartContext = createContext({
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  clearCart: () => {},
});

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (item) => {
    setCartItems([...cartItems, item]);
    console.log(cartItems);
  };

  const removeItemFromCart = (itemId) => {
  const itemIndex = cartItems.findIndex((item) => item.id === itemId);
  if (itemIndex !== -1) {
    cartItems.splice(itemIndex, 1); 
    setCartItems([...cartItems]); 
  }
};

  const clearCart = () => {
    setCartItems([]);
  };

  const value = { cartItems, addItemToCart, removeItemFromCart, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };
