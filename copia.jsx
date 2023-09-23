import React from "react";

const ShoppingCart = ({ cartItems, clearCart }) => {
  return (
    <div className="cart-modal">
      <h2>Carrito de Compras</h2>
      <ul>
        {cartItems.map((product) => (
          <li key={product.id}>
            {product.titulo} - {product.precio} - Cantidad: {product.quantity}
          </li>
        ))}
      </ul>
      <p>Total: ${}</p>
      <button onClick={clearCart}>Vaciar Carrito</button>
    </div>
  );
};

export default ShoppingCart;

///////////////////////////////////////////////////////////////////////////////////////////
(product, quantity, ) => 
setProducts(prev => [...prev, {...product,quantity}])

const totalWidget = products.reduce((acc,val) => acc + val.quantity,0)


const removeProduct= id =>{
    const productsFiltered = products.filter(product => product.id !== id)
setProducts(productsFiltered)
}

//////////////////////////////////////////////////////////////////////////////////////
const [cartVisible, setCartVisible] = useState(false);

const toggleCart = () => {
  setCartVisible(!cartVisible);
};

const calculateTotal = () => {
  return cartItems.reduce((total, product) => {
    return total + product.price * product.quantity;
  }, 0);
};

return (
  <div className="contador">
    <img onClick={toggleCart} src={card} alt="Carrito" />
    <span>{totalWidget}</span>

    {cartVisible && (
      <div className="cart-modal">
        <h2>Carrito de Compras</h2>
        <ul>
          {cartItems.map((product) => (
            <li key={product.id}>
              {product.name} - {product.price} - Cantidad: {product.quantity}
            </li>
          ))}
        </ul>
        <p>Total: ${calculateTotal()}</p>
        <button onClick={clearCart}>Vaciar Carrito</button>
      </div>
    )}
  </div>
);

