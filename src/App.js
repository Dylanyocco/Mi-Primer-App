import { NavBar } from './components/NavBar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailConteiner';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
      <NavBar/>
      <Routes>
        <Route path='/' element={ <ItemListContainer greeting="Hola, Bienvenido a mi Primer Proyecto React"/>}/>
        <Route path='/category/:id' element={ <ItemListContainer greeting="Hola, Bienvenido a mi Primer Proyecto React"/>}/>
        <Route path='/item/:id' element={ <ItemDetailContainer/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
