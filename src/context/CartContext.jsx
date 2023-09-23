import {createContext, useState} from "react";

export const CartContext = createContext([]);

export const CartProvider = ({ children }) => {

const [product,setProducts] = useState([])

const addProduct = (product,quantity) => 
    setProducts(prev=>[...prev,{...product,quantity}])

const totalWidget = product.reduce((acc,val) => acc + val.quantity,0)

const removeProduct= id =>{
        const productsFiltered = product.filter(product => product.id !== id)
    setProducts(productsFiltered)
    }

const clear = () => setProducts([]);

return (
    <CartContext.Provider
    value={{addProduct,product, removeProduct, clear,totalWidget}}
    >
    {children}
    </CartContext.Provider>);
    
};




