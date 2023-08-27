import React from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
export const Item = ({ product }) => (
    <Card key={product.id} style={{ width: '18rem' }}>
        <Card.Img variant="top" src={product.image} alt={product.name} />
        <Card.Body>
            <Card.Title>{product.name}</Card.Title>
            <Card.Text>
                Some quick example text to build on the card title and make up the
                bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
        </Card.Body>
    </Card>
);