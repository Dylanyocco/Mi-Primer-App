import React from 'react';
import { Item } from "./item.jsx"; 
export const ItemList = ({ Products }) => {
    return (
        <div className='listado'>
            {Products.map((Product) => (
                <Item key={Product.id} product={Product} />
            ))}
        </div>
    );
};
