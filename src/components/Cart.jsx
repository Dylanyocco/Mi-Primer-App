import { Container, Table } from "react-bootstrap";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export const Cart =() => {

  const {product, removeProduct,clear} = useContext(CartContext)
  const total = () =>
    product.reduce(
      (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.precio,
      0
    )

  return(
    <Container>
      <h2>Cart</h2>
      <Table striped bordered hover variant= "dark">
          <thead>
            <tr>
              <th>Nombre</th>
              <th>Precio</th>
              <th>Cantidad</th>
              <th>
              <td>
                  <button onClick={() => clear([])}>Vaciar Carrito</button>
                </td>
              </th>
            </tr>
          </thead>
          <tbody>
            {product.map(product =>(
              <tr key={product.id}>
                <td>{product.titulo}</td>
                <td>{product.precio}</td>
                <td>{product.quantity}</td>
                <td>
                  <button onClick={() => removeProduct(product.id)}>Eliminar</button>
                </td>
                </tr>
            ))}
          </tbody>
          <tfoot>
            <tr>
              <td>Total</td>
              <td></td>
              <td></td>
              <td>{total()}</td>
            </tr>
          </tfoot>
      </Table>
    </Container>
  )
}