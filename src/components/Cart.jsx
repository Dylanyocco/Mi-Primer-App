import { Container, Table } from "react-bootstrap";
import { useContext, useState } from "react";
import { CartContext } from "../context/CartContext";
import Form from 'react-bootstrap/Form';
import { getFirestore, collection, addDoc } from "firebase/firestore";

export const Cart =() => {
  const [formValues, setFormValues] = useState({
    name:"",
    phone:"",
    email:"",
  })


  const {product, removeProduct,clear} = useContext(CartContext)
  const total = () =>
    product.reduce(
      (acumulador, valorActual) =>
      acumulador + valorActual.quantity * valorActual.precio,
      0
    )
  const handleChange = ev => {
    setFormValues(prev =>({
      ...prev,
      [ev.target.name]: ev.target.value,
    }))
  }
  
  const sendOrder = () => {
    const order = {
      buyer: {
        name:"",
        phone:"",
        email:"",
      },
      product,
      total: total(),
    }
    const db = getFirestore()
    const orderCollection = collection(db, "orders")

    addDoc(orderCollection, order).then(({id}) =>{
      if(id){
        setFormValues({
          name:"",
          phone:"",
          email:"",
        })
        clear()
        alert("Su Orden:" + id + "ha sido completada")
      }
    })
  }
  return(
    <Container>
      <h2>Cart</h2>
      <Table striped bordered hover variant= "white">
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
      <Form><Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control
        onChange={handleChange}
        value={formValues.name}
        type="text"
        name="name"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Tel</Form.Label>
        <Form.Control
        onChange={handleChange}
        value={formValues.phone}
        type="text"
        name="phone"/>

      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email</Form.Label>
        <Form.Control
        onChange={handleChange}
        value={formValues.email}
        type="text"
        name="email"/>
      </Form.Group>
      <button variant="primary" type="button" onClick={sendOrder}>submit</button>
    </Form>
    </Container>
  )
  
}


