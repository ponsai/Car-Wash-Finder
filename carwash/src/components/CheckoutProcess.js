import React from 'react';
import { Button } from 'react-bootstrap';

const CheckoutProcess = ({ selectedServices, carWashData, onFormSubmit }) => {
  // Function to find the details of the selected services
  const getServiceDetails = () => {
    const services = selectedServices.map(serviceKey => {
      const [locationName, serviceId] = serviceKey.split('-');
      const service = carWashData
        .find(carwash => carwash.name === locationName)
        ?.services.find(s => s.id === parseInt(serviceId));
      return { ...service, locationName };
    });

    return services;
  };

  const selectedServiceDetails = getServiceDetails();

  return (
    <div>
      <h3>Selected Services</h3>
      {selectedServiceDetails.length > 0 ? (
        <ul>
          {selectedServiceDetails.map((service, index) => (
            <li key={index}>
              {service.locationName}: {service.name}
            </li>
          ))}
        </ul>
      ) : (
        <p>No services selected</p>
      )}
      <Button onClick={onFormSubmit} variant="primary">
        Submit
      </Button>
    </div>
  );
};

export default CheckoutProcess;
