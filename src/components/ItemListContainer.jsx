import { Container } from 'react-bootstrap';
import '../App.css';
import { useState,useEffect } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import { getFirestore, collection, getDocs, } from "firebase/firestore";


export const ItemListContainer = (props) =>{
    const [Products, setProducts] = useState([]);
    const {id} = useParams();


    useEffect(() => {
        const db = getFirestore();
        const refCollection = collection(db, "Products");
    
        getDocs(refCollection)
            .then((snapshot) => {
                if (snapshot.size === 0) console.log("no results");
                else
                    setProducts(
                        snapshot.docs.map((doc) => {
                            return { id: doc.id, ...doc.data() };
                            })
                    );
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

