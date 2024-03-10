import { useState } from "react";

import "./App.css";
import AddShirt from "./components/AddShirt";
import ListShirt from "./components/ListShirt";
import { ShirtContextProvider } from "./store/ShirtContext";

function App() {
  return (
    <>
      <ShirtContextProvider>
        <AddShirt />
        <ListShirt />
      </ShirtContextProvider>
    </>
  );
}

export default App;
