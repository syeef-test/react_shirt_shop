import React, { useRef, useContext } from "react";
import { ShirtContext } from "../store/ShirtContext";

function AddShirt() {
  const name = useRef();
  const desc = useRef();
  const price = useRef();
  const quantity_L = useRef();
  const quantity_M = useRef();
  const quantity_S = useRef();

  const shirtContext = useContext(ShirtContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const obj = {
      name: name.current.value,
      desc: desc.current.value,
      price: price.current.value,
      quantity_L: quantity_L.current.value,
      quantity_M: quantity_M.current.value,
      quantity_S: quantity_S.current.value,
    };

    shirtContext.addShirt(obj);
    console.log("object", obj);
  };

  return (
    <>
      <div>
        <h3>Add Shirt</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            ref={name}
            placeholder="enter tshirt name"
          />
          <input
            type="text"
            name="desc"
            ref={desc}
            placeholder="enter description"
          />
          <input
            type="number"
            name="price"
            ref={price}
            placeholder="enter price"
          />
          <input
            type="number"
            name="quantity_L"
            ref={quantity_L}
            placeholder="enter tshirt quantity large size"
          />
          <input
            type="number"
            name="quantity_M"
            ref={quantity_M}
            placeholder="enter tshirt quantity med size"
          />
          <input
            type="number"
            name="quantity_S"
            ref={quantity_S}
            placeholder="enter tshirt quantity small size"
          />
          <button type="submit">Add Product</button>
        </form>
      </div>
    </>
  );
}
export default AddShirt;
