import { useState } from "react";

import "./App.css";
import AddShirt from "./components/AddShirt";
import ListShirt from "./components/ListShirt";

function App() {
  return (
    <>
      <AddShirt />
      <ListShirt />
    </>
  );
}

export default App;
