import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { PizzaContext, formatCurrency } from '../Context/PizzaContext';
import { ListGroup, Button } from 'react-bootstrap';

const Carrito = () => {
  const { carrito, eliminarDelCarrito, calcularTotal } = useContext(PizzaContext);

  return (
    <div className="container my-5 text-capitalize">
      <h2 className="mb-4">Carrito de Compras</h2>
      <ListGroup>
        {carrito.map((pizza) => (
          <ListGroup.Item key={pizza.id} className="mb-3">
            <div className="d-flex justify-content-between align-items-center">
              <div>
                <img
                  src={pizza.img}
                  alt={pizza.name}
                  style={{ height: '100px', width: '100px', objectFit: 'cover', marginRight: '20px' }}
                />
                <span className='h4'>{pizza.name}</span>
              </div>
              <div>
                <h4 className='text-success text-center'>{formatCurrency(pizza.price)}</h4>
                <Button variant="danger" className="ml-3" onClick={() => eliminarDelCarrito(pizza.id)}>
                  Eliminar
                </Button>
              </div>
            </div>
          </ListGroup.Item>
        ))}
      </ListGroup>
      <div className="d-flex justify-content-between align-items-center mt-3">
        
        <h4>Total a pagar: <span className='text-success h2'>{formatCurrency(parseFloat(calcularTotal()))}</span></h4>
        <Button variant="success" className=" px-5" >
                  Pagar
                </Button>
        
        
      </div>
      <div className="float-end">
      <Link to="/" className="btn btn-light">
          Seguir Comprando
        </Link>
      
                </div>
    </div>
  );
};

export default Carrito;
