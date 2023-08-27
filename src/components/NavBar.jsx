import '../App.css';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { CartWidget } from "./CartWidget";
export const NavBar = () =>(
<Navbar bg="primary" data-bs-theme="dark">
    <Container>
        <Navbar.Brand href="#home">BIENVENIDO</Navbar.Brand>
        <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/category/Perifericos">Perifericos</Nav.Link>
            <Nav.Link href="/category/Componentes">Componentes</Nav.Link>
        </Nav>
        <CartWidget/>
    </Container>
</Navbar>
);
