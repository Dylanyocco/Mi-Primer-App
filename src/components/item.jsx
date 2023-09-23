import React from 'react';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {

return (
    <Card key={product.id} style={{ width: '18rem' }}>
    <Card.Img variant="top" src={product.img} alt={product.name} />
    <Card.Body>
        <Card.Title>{product.titulo}</Card.Title>
        <Card.Text>
        {product.category}
        </Card.Text>
        <div>
            Precio: {product.precio}
        </div>
        <div>
            stock: {product.stock}</div>
        <Link to={`/item/${product.id}`}>
        <button className='boton-detalle'>Detalles</button>
        </Link>
        
    </Card.Body>
    </Card>
);
};
