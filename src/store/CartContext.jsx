import React, { createContext, useState, useEffect } from "react";

export const CartContext = createContext();

const BASE_URL = `https://crudcrud.com/api/0511eacfc0b5444c8c85df17cb1bf987`;

export const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addCartLarge = (newItem, quantity) => {
    console.log("add", newItem);
    const existingItemIndex = cart.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update allready exist order
      let updatedCartItems = [...cart];
      updatedCartItems[existingItemIndex].quantity_L += Number(quantity);
      setCart(updatedCartItems);
    } else {
      //new order simply insert data
      const obj = {
        name: newItem.name,
        desc: newItem.desc,
        price: newItem.price,
        quantity_L: quantity,
        quantity_M: 0,
        quantity_S: 0,
      };
      setCart((prevCart) => [...prevCart, obj]);
    }
  };

  const addCartMed = (newItem, quantity) => {
    console.log("add", newItem);
    const existingItemIndex = cart.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update allready exist order
      let updatedCartItems = [...cart];
      updatedCartItems[existingItemIndex].quantity_M += Number(quantity);
      setCart(updatedCartItems);
    } else {
      //new order simply insert data
      const obj = {
        name: newItem.name,
        desc: newItem.desc,
        price: newItem.price,
        quantity_M: quantity,
        quantity_L: 0,
        quantity_S: 0,
      };
      setCart((prevCart) => [...prevCart, obj]);
    }
  };

  const addCartSmall = (newItem, quantity) => {
    console.log("add", newItem);
    const existingItemIndex = cart.findIndex(
      (item) => item.name === newItem.name
    );

    if (existingItemIndex !== -1) {
      //update allready exist order
      let updatedCartItems = [...cart];
      updatedCartItems[existingItemIndex].quantity_S += Number(quantity);
      setCart(updatedCartItems);
    } else {
      //new order simply insert data
      const obj = {
        name: newItem.name,
        desc: newItem.desc,
        price: newItem.price,
        quantity_S: quantity,
        quantity_L: 0,
        quantity_M: 0,
      };
      setCart((prevCart) => [...prevCart, obj]);
    }
  };

  const removeCart = (removeItem) => {};

  useEffect(() => {
    console.log("cart context:", cart);
  }, [cart]);

  return (
    <CartContext.Provider
      value={{ cart, addCartLarge, addCartMed, addCartSmall, removeCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
