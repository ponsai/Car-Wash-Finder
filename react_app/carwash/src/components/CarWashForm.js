import React, { useState } from 'react';
import { Form, Button, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import carWashData from '../data/carWashData';

const CarWashForm = ({ onCartUpdate }) => {
  const [selectedServices, setSelectedServices] = useState(new Set());
  const navigate = useNavigate();

  // Handles changes in service selection
  const handleServiceChange = (carwashName, serviceId) => {
    setSelectedServices(prevServices => {
      const updatedServices = new Set(prevServices);
      const serviceKey = `${carwashName}-${serviceId}`;
      updatedServices.has(serviceKey) ? updatedServices.delete(serviceKey) : updatedServices.add(serviceKey);
      return updatedServices;
    });
  };

  // Handles the submission of selected services
  const handleSubmit = () => {
    onCartUpdate(Array.from(selectedServices));
    navigate('/cart');
  };

  return (
    <>
      <Row>
        {carWashData.map((carwash, index) => (
          <Col md={6} key={index}>
            <Card className="mb-3" style={{minHeight:"61vh", paddingBottom:0, backgroundColor: "#eee"}}>
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
                {/* Add to Cart button for each card */}
                <div style={{display: "flex", justifyContent: "center" }}>
                  <Button 
                    variant="primary" 
                    onClick={() => handleSubmit()}
                    style={{ marginTop: '10px', backgroundColor:"#bb7e7a" }}
                  >
                    Add Services to Cart
                  </Button>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </>
  );
};

export default CarWashForm;
