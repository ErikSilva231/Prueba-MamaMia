import React, { useContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { PizzaContext } from '../Context/PizzaContext';
import CustomModal from '../Components/CustomModal'; 

const Home = () => {
  const { pizzas, agregarAlCarrito } = useContext(PizzaContext);
  const [showModal, setShowModal] = useState(false);

  const handleAgregarAlCarrito = (pizza) => {
    agregarAlCarrito(pizza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-5 text-capitalize">
      <Row>
        {pizzas.slice(0, 6).map((pizza) => (
          <Col md={4} className='my-2' key={pizza.name}>
            <Card>
              <Card.Img variant="top" src={pizza.img} alt={pizza.name} />
              <Card.Body>
                <Card.Title>{pizza.name}</Card.Title>
                <Card.Text>
                  <strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}
                </Card.Text>
                <Link to={`/pizza/${pizza.id}`}>
                  <Button variant="primary" className="mr-2 w-100 mb-1">
                    Ver Más
                  </Button>
                </Link>
                <Button
                  className='w-100'
                  variant="success"
                  onClick={() => handleAgregarAlCarrito(pizza)}
                >
                  Agregar a Carrito
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      <CustomModal show={showModal} handleClose={handleCloseModal} />
    </Container>
  );
};

export default Home;
