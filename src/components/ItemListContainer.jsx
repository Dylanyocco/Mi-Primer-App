import { Container } from 'react-bootstrap';
import '../App.css';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { getFirestore, collection, getDocs, query, where } from "firebase/firestore";
import { useParams } from 'react-router-dom';


export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);
    const { id } = useParams();


    useEffect(() => {
        const db = getFirestore();
        const refCollection = id
        ? query(collection(db, "Products"), where("categoryId", "==",id))
        : collection(db, "Products")

        getDocs(refCollection)
            .then(snapshot => {
                if (snapshot.size === 0) setProducts([])
                else{
                    setProducts(
                        snapshot.docs.map(doc => ({
                            id: doc.id, 
                            ...doc.data()
                        }))
                    )
                }  
            })
        },[id]);

    return (
        <Container>
            <h2 className="main">{props.greeting}</h2>
            <div>
                <ItemList products={products} />
            </div>
        </Container>
    );
};
