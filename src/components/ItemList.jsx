import React from 'react';
import { Item } from "./item.jsx"; 
export const ItemList = ({ products }) => {
    return (
        <div className='listado'>
            {products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};
