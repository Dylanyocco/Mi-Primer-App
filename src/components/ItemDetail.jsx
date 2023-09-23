import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { ItemCount } from "./ItemCount";

export const ItemDetail = ({ product }) => {

  const {addProduct} = useContext(CartContext) 

  const onAdd = count => addProduct(product, count) 

  return (
    <div className="detalles">
      <h2>{product.titulo}</h2>
      <img src={product.img} alt={product.titulo} />
      <div>Precio:{product.precio}</div>
      <div>Stock:{product.stock}</div>
      <ItemCount onAdd={onAdd}/>
    </div>
  );
};