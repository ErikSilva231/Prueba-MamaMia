import React from 'react';
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({ show, handleClose, onContinueShopping, onCheckout }) => {
  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>¡Pizza Agregada!</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        La pizza ha sido agregada al carrito con éxito.
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Seguir Comprando
        </Button>
        
      </Modal.Footer>
    </Modal>
  );
};

export default CustomModal;
