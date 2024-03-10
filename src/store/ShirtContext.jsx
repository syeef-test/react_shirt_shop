import React, { createContext, useState, useEffect } from "react";

export const ShirtContext = createContext();

const BASE_URL = ``;

export const ShirtContextProvider = ({ children }) => {
  const [shirt, setShirt] = useState([]);

  const addShirt = (newItem) => {
    console.log("add", newItem);
    const updatedData = [...shirt, newItem];
    setShirt(updatedData);
  };

  const removeShirt = () => {
    console.log("remove");
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
