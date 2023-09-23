import { Container } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart =() => {

  const {product} = useContext(CartContext)


  return(
    <Container>
      <h2>Cart</h2>
    </Container>
  )
}