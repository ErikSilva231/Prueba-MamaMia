import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { PizzaContext } from '../Context/PizzaContext';
import { Container, Row, Col, Button, Modal } from 'react-bootstrap';
import { formatCurrency } from '../Context/PizzaContext'; // Importa el contexto

const PizzaDetail = () => {
  const { id } = useParams();
  const { pizzas, agregarAlCarrito } = useContext(PizzaContext);
  const pizza = pizzas.find((pizza) => pizza.id === id);
  const [showModal, setShowModal] = React.useState(false);

  if (!pizza) {
    return <div>Pizza no encontrada</div>;
  }

  const handleAgregarAlCarrito = () => {
    agregarAlCarrito(pizza);
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <Container className="mt-5">
      <Row>
        <Col md={6}>
          <img src={pizza.img} alt={pizza.name} className="img-fluid" />
        </Col>
        <Col md={6}>
          <h2 className="mb-4">{pizza.name}</h2>
          <p>{pizza.desc}</p>
          <p><strong>Ingredientes:</strong> {pizza.ingredients.join(', ')}</p>
          <p><strong>Precio:</strong> {formatCurrency(pizza.price)}</p>
          <Button variant="primary" onClick={handleAgregarAlCarrito}>
            Agregar al Carrito
          </Button>
        </Col>
      </Row>

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>¡Pizza Agregada!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          La pizza ha sido agregada al carrito con éxito.
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCloseModal}>
            Seeguir Comprando
          </Button>
        </Modal.Footer>
      </Modal>
    </Container>
  );
};

export default PizzaDetail;
