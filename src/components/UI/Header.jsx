import React, { useContext } from "react";
import { CartContext } from "../../store/CartContext";

function Header({ openModal }) {
  const cartContext = useContext(CartContext);

  const totalQuantity = cartContext.cart.reduce((curQuantity, item) => {
    return (
      curQuantity +
      Number(item.quantity_L) +
      Number(item.quantity_M) +
      Number(item.quantity_S)
    );
  }, 0);

  return (
    <div>
      <button onClick={openModal}>Cart:{totalQuantity}</button>
    </div>
  );
}

export default Header;
