import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import card from "../assets/carrito.png";

export const CartWidget = () => {
  const { totalWidget } = useContext(CartContext);

  return (
    <div className="contador">
      <img src={card} alt="Carrito" />
      <span>{totalWidget}</span>
    </div>
  );
};
