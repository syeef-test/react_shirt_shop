import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const ShirtContext = createContext();

const BASE_URL = `https://crudcrud.com/api/0511eacfc0b5444c8c85df17cb1bf987`;

export const ShirtContextProvider = ({ children }) => {
  const [shirt, setShirt] = useState([]);

  useEffect(() => {
    const fetchShirts = async () => {
      try {
        const response = await axios.get(`BASE_URL/shirt`);
        setShirt(response.data);
      } catch (error) {
        console.error("Error fetching shirts:", error);
      }
    };

    fetchShirts();
  }, []);

  const addShirt = async (newItem) => {
    console.log("add", newItem);
    await axios.post(`${BASE_URL}/shirt`, newItem);
    const updatedData = [...shirt, newItem];
    setShirt(updatedData);
  };

  const removeShirt = async (removeItem, size) => {
    try {
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
    } catch (error) {
      console.error("Error removing shirt:", error);
    }
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
