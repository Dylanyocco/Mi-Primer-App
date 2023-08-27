import React from 'react';
import { Item } from "./item.jsx"; 
export const ItemList = ({ Products }) => {
    return (
        <div className='listado'>
            {Products.map((product) => (
                <Item key={product.id} product={product} />
            ))}
        </div>
    );
};
