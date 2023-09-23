import React, { useContext } from "react";
import { CartContext } from "../context/CartContext";
import card from "../assets/carrito.png";
import { Link } from "react-router-dom";


export const CartWidget = () => {
  const { totalWidget } = useContext(CartContext);

  return (
    <Link to="/Cart">
    <div className="contador">
      <img src={card} alt="Carrito" />
      <span>{totalWidget}</span>
    </div>
    </Link>
  );
};
