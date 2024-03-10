import React, { useContext, useEffect, useState } from "react";
import Modal from "react-modal";
import { CartContext } from "../../store/CartContext";

Modal.setAppElement("#root");

const Cart = ({ isOpen, closeModal }) => {
  const cartContext = useContext(CartContext);

  const [totalAmount, setTotalAmount] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  useEffect(() => {
    const calculateTotalAmount = () => {
      const newTotalAmount = cartContext.cart.reduce(
        (total, item) => total + calculateItemTotal(item),
        0
      );
      setTotalAmount(newTotalAmount.toFixed(2));
    };

    const calculateTotalItems = () => {
      const newTotalItems = cartContext.cart.reduce(
        (total, item) =>
          total +
          Number(item.quantity_L) +
          Number(item.quantity_M) +
          Number(item.quantity_S),
        0
      );
      setTotalItems(newTotalItems);
    };

    if (cartContext.cart && cartContext.cart.length > 0) {
      calculateTotalAmount();
      calculateTotalItems();
    } else {
      setTotalAmount(0);
      setTotalItems(0);
    }
  }, [cartContext.cart]);

  const calculateItemTotal = (item) => {
    return (
      Number(item.price) *
      (Number(item.quantity_L) +
        Number(item.quantity_M) +
        Number(item.quantity_S))
    );
  };

  const handleIncreaseQuantity = (item) => {
    //cartContext.updateCart(item);
  };

  const handleDecreaseQuantity = (item) => {
    //cartContext.removeCart(item);
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={closeModal}
      contentLabel="Cart Modal"
    >
      <h2>Cart Items:</h2>

      {cartContext.cart && cartContext.cart.length > 0 ? (
        <ul>
          {cartContext.cart.map((item) => (
            <li key={item.name}>
              {item.name} - Quantity_L: {item.quantity_L} - Quantity_M:
              {item.quantity_M} - Quantity_S:{item.quantity_S}- Price:
              {item.price}
              <button onClick={() => handleIncreaseQuantity(item)}>
                Increase
              </button>
              <button onClick={() => handleDecreaseQuantity(item)}>
                Decrease
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>There are no items in the cart.</p>
      )}
      <div>
        <span>Total Amount:</span>
        <span>{totalAmount}</span>
        <br />
        <span>Total Cart Items: {totalItems}</span>
      </div>
      <button onClick={closeModal}>Close</button>
    </Modal>
  );
};

export default Cart;
