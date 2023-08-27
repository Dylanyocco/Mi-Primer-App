import { Container } from 'react-bootstrap';
import '../App.css';
import data from '../data/Products.json'
import { useState,useEffect } from 'react';
import { ItemList } from './ItemList';

export const ItemListContainer = (props) =>{
    const [Products, setProducts] = useState([]);
    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve(data), 2000);
        });
        promise.then((data => setProducts(data)))
    }, []);
    
    return(
    <Container>
        <h2 className="main">{props.greeting}</h2>
    <div >
        <ItemList Products={Products}/>
    </div>
    </Container>
    );
};

