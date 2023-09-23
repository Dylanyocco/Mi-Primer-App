import { Container } from 'react-bootstrap';
import '../App.css';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList';
import { getFirestore, collection, getDocs } from "firebase/firestore";

export const ItemListContainer = (props) => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const db = getFirestore();
        const refCollection = collection(db, "Products");

        getDocs(refCollection)
            .then(snapshot => {
                if (snapshot.size === 0) console.log("no results");
                else
                    setProducts(
                        snapshot.docs.map(doc => {
                            return { id: doc.id, ...doc.data() };
                        })
                    );
            });
    }, []);

    return (
        <Container>
            <h2 className="main">{props.greeting}</h2>
            <div>
                <ItemList products={products} />
            </div>
        </Container>
    );
};
