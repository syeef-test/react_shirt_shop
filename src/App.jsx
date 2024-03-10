import { useState } from "react";

import "./App.css";
import AddShirt from "./components/AddShirt";
import ListShirt from "./components/ListShirt";
import { ShirtContextProvider } from "./store/ShirtContext";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <>
      <ShirtContextProvider>
        <CartContextProvider>
          <AddShirt />
          <ListShirt />
        </CartContextProvider>
      </ShirtContextProvider>
    </>
  );
}

export default App;
