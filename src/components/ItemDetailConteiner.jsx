import React, { useEffect, useState } from 'react';
import  Container  from 'react-bootstrap/Container';
import { ItemDetail } from './ItemDetail';
import { useParams } from 'react-router-dom';
import { getFirestore, getDoc,doc } from "firebase/firestore";

export const ItemDetailContainer = (props) => {
    const [product, setProduct] = useState(null)
    const { id } = useParams();

    useEffect(() => {
        const db = getFirestore();
    
        const refDoc = doc(db, "Products", id);
    
        getDoc(refDoc).then((snapshot) => {
        setProduct({ id: snapshot.id, ...snapshot.data() });
        });
    }, []);
    if (!product) {
        return <div>Loading...</div>; 
    }

    return (
        <Container>
            <ItemDetail product={product}/>
        </Container>
    );
};

