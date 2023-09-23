import {createContext, useState} from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

const [product,setProducts] = useState([])

const addProduct = (Product,quantity) => 
    setProducts(prev=>[...prev,{...product,quantity}])

const removeProduct= id =>{
        const productsFiltered = product.filter(product => product.id !== id)
    setProducts(productsFiltered)
    }
    const totalWidget = product.reduce((acc,val) => acc + val.quantity,0)

    const clear = () => setProducts([]);

console.log(product)
return (
    <CartContext.Provider
    value={{addProduct, removeProduct, clear,totalWidget}}
    >
    {children}
    </CartContext.Provider>);
    
};




