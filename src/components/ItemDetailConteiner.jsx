import React, { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';
import data from '../data/Products.json';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';

export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null);
    const {id} = useParams ();
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(() => {
                const productById = data.find((product) => product.id ===id);
                resolve(productById);
            }, 2000);
        });
        promise.then((data) => setProduct(data));  
    });

    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <Container>
            <h2 className="main">{props.greeting}</h2>
            <ItemDetail product={product}/>
        </Container>
    );
};

