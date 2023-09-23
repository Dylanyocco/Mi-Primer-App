import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import React, { useState } from 'react';
import { Cart } from './components/Cart';

function App() {


  return (
    <CartProvider>
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Hola, Bienvenido a mi Primer Proyecto React"/>}/>
        <Route path='/Cart' element={ <Cart/>}/>
        <Route path='/category/:id' element={ <ItemListContainer greeting="Hola, Bienvenido a mi Primer Proyecto React"/>}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
    </CartProvider>
  );
}

export default App;
