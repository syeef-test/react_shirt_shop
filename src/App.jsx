import { useState } from "react";

import "./App.css";
import AddShirt from "./components/AddShirt";
import ListShirt from "./components/ListShirt";
import { ShirtContextProvider } from "./store/ShirtContext";
import { CartContextProvider } from "./store/CartContext";
import Header from "./components/UI/Header";
import Cart from "./components/UI/Cart";

function App() {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <>
      <ShirtContextProvider>
        <CartContextProvider>
          <Header openModal={openModal} />
          <Cart isOpen={modalIsOpen} closeModal={closeModal}>
            <button onClick={closeModal}>Close Modal</button>
          </Cart>
          <AddShirt />
          <ListShirt />
        </CartContextProvider>
      </ShirtContextProvider>
    </>
  );
}

export default App;
