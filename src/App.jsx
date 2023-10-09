import React, { useContext } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { PizzaProvider } from './Context/PizzaContext'; 
import { PizzaContext } from './Context/PizzaContext'; // Importa el contexto
import { formatter } from './Context/PizzaContext'; // Importa el contexto
import Home from './View/Home'; 
import PizzaDetail from './View/PizzaDetail'; 
import Carrito from './View/Carrito';
import { Image } from 'react-bootstrap';
import Banner from './assets/banner.png';





const App = () => {
  return (
    <Router>
      <PizzaProvider>
        <Container>
        <Navbar expand="lg">
          <Navbar.Brand as={Link} to="/">🍕 Tradición Italiana</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" className='d-none' />
          <Navbar.Collapse className="  d-none d-md-block justify-content-end">
            <Nav.Link as={Link} to="/carrito" className="mr-2">
              🛒 <span className='text-success fw-bold'><CarritoTotal /></span> 
            </Nav.Link>
          </Navbar.Collapse>
          <Nav.Link as={Link} to="/carrito" className="mr-2 d-md-none">
              🛒 <span className='text-success fw-bold'><CarritoTotal /></span> 
            </Nav.Link>
        </Navbar>
        </Container>
        <Container fluid className='mx-0'>
        <Image src={Banner} alt="Pizza" fluid />
        </Container>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pizza/:id" element={<PizzaDetail />} />
          <Route path="/carrito" element={<Carrito />} />
        </Routes>
      </PizzaProvider>
    </Router>
  );
};

const CarritoTotal = () => {
  const { calcularTotal } = useContext(PizzaContext);
  const total = calcularTotal();
  const totalFormateado = formatter.format(total); 
  return <span>Total: {totalFormateado}</span>; 
};



export default App;