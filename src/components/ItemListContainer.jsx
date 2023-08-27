import { Container } from 'react-bootstrap';
import '../App.css';
import data from '../data/Products.json'
import { useState,useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = (props) =>{
    const [Products, setProducts] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        const promise = new Promise((resolve, reject) => {
            setTimeout(()=> resolve(data), 2000);
        });
        promise.then((data) =>{
            if(!id){
                setProducts(data);
            }else{
                const productsFiltered = data.filter(product => product.category === id
                    );
                setProducts(productsFiltered);
            }
            });
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

