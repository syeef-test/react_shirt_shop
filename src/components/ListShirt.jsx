import React, { useContext } from "react";
import { ShirtContext } from "../store/ShirtContext";
import { CartContext } from "../store/CartContext";

function ListShirt() {
  const shirtContext = useContext(ShirtContext);
  const cartContext = useContext(CartContext);

  const buyLarge = (item) => {
    console.log("buy large", item);
    cartContext.addCartLarge(item, 1);
    shirtContext.removeShirt(item, "L");
  };

  const buyMed = (item) => {
    console.log("buy Med", item);
    cartContext.addCartMed(item, 1);
    shirtContext.removeShirt(item, "M");
  };

  const buySmall = (item) => {
    console.log("buy Small", item);
    cartContext.addCartSmall(item, 1);
    shirtContext.removeShirt(item, "S");
  };

  const shirtList = (
    <ul>
      {Array.isArray(shirtContext.shirt) &&
        shirtContext.shirt.map((item, index) => (
          <li key={index}>
            <div>
              <strong>Name:</strong>
              {item.name}
              <strong>Desc:</strong>
              {item.desc}
              <strong>Price:</strong>
              {item.price}
              <button onClick={() => buyLarge(item)}>
                Buy Large {item.quantity_L}
              </button>
              <button onClick={() => buyMed(item)}>
                Buy Med{item.quantity_M}
              </button>
              <button onClick={() => buySmall(item)}>
                Buy Small{item.quantity_S}
              </button>
            </div>
          </li>
        ))}
    </ul>
  );

  return (
    <>
      Shirt List:<div>{shirtList}</div>
    </>
  );
}

export default ListShirt;
