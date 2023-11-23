import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import carWashData from '../data/carWashData';

const CarWashForm = ({ onCartUpdate }) => {
  const [selectedServices, setSelectedServices] = useState(new Set());
  const [lastSelectedCarwash, setLastSelectedCarwash] = useState('');
  const navigate = useNavigate();

  const handleServiceChange = (carwashName, serviceId) => {
    if (lastSelectedCarwash !== carwashName) {
      setSelectedServices(new Set([`${carwashName}-${serviceId}`]));
      setLastSelectedCarwash(carwashName);
    } else {
      setSelectedServices(prevServices => {
        const updatedServices = new Set(prevServices);
        const serviceKey = `${carwashName}-${serviceId}`;
        updatedServices.has(serviceKey) ? updatedServices.delete(serviceKey) : updatedServices.add(serviceKey);
        return updatedServices;
      });
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCartUpdate(Array.from(selectedServices));
    navigate('/cart');
  };

  return (
    <>
      <Row>
        {carWashData.map((carwash, index) => (
          <Col md={4} key={index}>
            <Card className="mb-3">
              <Card.Img variant="top" src={carwash.image} alt={carwash.name} />
              <Card.Body>
                <Card.Title>{carwash.name}</Card.Title>
                <Card.Text>{carwash.address}</Card.Text>
                {carwash.services.map(service => (
                  <Form.Check 
                    type="checkbox"
                    label={service.name}
                    key={service.id}
                    checked={selectedServices.has(`${carwash.name}-${service.id}`)}
                    onChange={() => handleServiceChange(carwash.name, service.id)}
                  />
                ))}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
      <Row>
        <Col md={12}>
          <Button variant="primary" type="submit" onClick={handleSubmit} className="w-100">
            Add Services to the Cart
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default CarWashForm;
