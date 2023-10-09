import React, { createContext, useState, useEffect } from 'react';


export const formatter = new Intl.NumberFormat("es-CL", {
  style: "currency",
  currency: "CLP",
});

export const formatCurrency = (value) => {
  return formatter.format(value);
};


export const PizzaContext = createContext();

export const PizzaProvider = ({ children }) => {
  const [pizzas, setPizzas] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/Pizzas.json'); 
        const data = await response.json();
        setPizzas(data);
      } catch (error) {
        console.error('Error fetching pizza data: ', error);
      }
    };

    fetchData();
  }, []); 

  const agregarAlCarrito = (pizza) => {
    const pizzaConIdCadena = { ...pizza, id: pizza.id.toString() };
    setCarrito([...carrito, pizzaConIdCadena]);
  };

  const eliminarDelCarrito = (id) => {
    const nuevoCarrito = carrito.filter((pizza) => pizza.id !== id);
    setCarrito(nuevoCarrito);
  };

  const calcularTotal = () => {
    return carrito.reduce((total, pizza) => total + parseFloat(pizza.price), 0).toFixed(2);
  };

  return (
    <PizzaContext.Provider
      value={{
        pizzas,
        carrito,
        agregarAlCarrito,
        eliminarDelCarrito,
        calcularTotal,
      }}
    >
      {children}
    </PizzaContext.Provider>
  );
};
