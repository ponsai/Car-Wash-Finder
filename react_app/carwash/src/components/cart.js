import React from 'react';
import { Button } from 'react-bootstrap';

const Cart = ({ selectedServices, carWashData, onFormSubmit }) => {
  // Utility function to find service details by ID
  const findServiceById = (id) => {
    return carWashData.flatMap(carwash => carwash.services).find(service => service.id === id);
  };

  return (
    <div>
      <h3>Cart</h3>
      <ul>
        {selectedServices.map(serviceId => {
          const service = findServiceById(serviceId);
          return <li key={serviceId}>{service ? service.name : 'Service not found'}</li>;
        })}
      </ul>
      <Button onClick={onFormSubmit} variant="primary">
        Submit {selectedServices.length} Services
      </Button>
    </div>
  );
};

export default Cart;
