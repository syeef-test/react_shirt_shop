import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShirtContext = createContext();

const BASE_URL = `https://crudcrud.com/api/0511eacfc0b5444c8c85df17cb1bf987`;

export const ShirtContextProvider = ({ children }) => {
  const [shirt, setShirt] = useState([]);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const response = await axios.get(BASE_URL);
        setShirt(response.data);
      } catch (error) {
        console.error("Error fetching shirts:", error);
      }
    };

    fetchShirts();
  }, []);

  const addShirt = async (newItem) => {
    console.log("add", newItem);
    const response = await axios.post(BASE_URL, newItem);
    const updatedData = [...shirt, newItem];
    setShirt(updatedData);
  };

  // const removeShirt = (removeItem, size) => {
  //   console.log(removeItem, size);
  //   const prevShirt = [...shirt];

  //   const existingItemIndex = prevShirt.findIndex(
  //     (item) => item.name === removeItem.name
  //   );
  //   console.log("index", existingItemIndex);

  //   if (existingItemIndex !== -1) {
  //     let updatedQuantity_L = prevShirt[existingItemIndex].quantity_L;
  //     let updatedQuantity_M = prevShirt[existingItemIndex].quantity_M;
  //     let updatedQuantity_S = prevShirt[existingItemIndex].quantity_S;

  //     if (updatedQuantity_L > 1 && size === "L") {
  //       updatedQuantity_L -= 1;
  //       const updatedItems = [...prevShirt];
  //       updatedItems[existingItemIndex].quantity_L = updatedQuantity_L;
  //       setShirt(updatedItems);
  //     }
  //     if (updatedQuantity_M > 1 && size === "M") {
  //       updatedQuantity_M -= 1;
  //       const updatedItems = [...prevShirt];
  //       updatedItems[existingItemIndex].quantity_M = updatedQuantity_M;
  //       setShirt(updatedItems);
  //     }
  //     if (updatedQuantity_S > 1 && size === "S") {
  //       updatedQuantity_S -= 1;
  //       const updatedItems = [...prevShirt];
  //       updatedItems[existingItemIndex].quantity_S = updatedQuantity_S;
  //       setShirt(updatedItems);
  //     }
  //   } else {
  //     const updatedItems = prevShirt.filter(
  //       (_, index) => index !== existingItemIndex
  //     );
  //     // console.log(updatedItems);

  //     setShirt(updatedItems);
  //   }
  // };

  const removeShirt = async (removeItem, size) => {
    console.log(removeItem, size);
    const updatedItems = shirt
      .map((item) => {
        if (item.name === removeItem.name) {
          if (size === "L" && item.quantity_L > 1) {
            return { ...item, quantity_L: item.quantity_L - 1 };
          } else if (size === "M" && item.quantity_M > 1) {
            return { ...item, quantity_M: item.quantity_M - 1 };
          } else if (size === "S" && item.quantity_S > 1) {
            return { ...item, quantity_S: item.quantity_S - 1 };
          }
        }
        return item;
      })
      .filter(
        (item) =>
          item.name !== removeItem.name ||
          item.quantity_L + item.quantity_M + item.quantity_S > 1
      );
    await axios.put(`${BASE_URL}/${removeItem._id}`, removeItem);
    setShirt(updatedItems);
  };

  useEffect(() => {
    console.log("shirt context:", shirt);
  }, [shirt]);

  return (
    <ShirtContext.Provider value={{ shirt, addShirt, removeShirt }}>
      {children}
    </ShirtContext.Provider>
  );
};
