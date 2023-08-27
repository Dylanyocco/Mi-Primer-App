import React from 'react';
import Card from 'react-bootstrap/Card';
import { ItemCount } from './ItemCount';
import { Link } from 'react-router-dom';


export const Item = ({ product }) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.imagen} alt={product.name} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
            {product.category}
            </Card.Text>
            <div>
            {product.price}
            </div>
            <Link to={`/item/${product.id}`}><button className='boton-detalle'>Detalles</button></Link>
            <ItemCount/>
        </Card.Body>
    </Card>
);