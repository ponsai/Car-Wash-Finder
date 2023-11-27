import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import carWashData from '../data/carWashData';

const CarWashCards = () => (
  <Row>
    {carWashData.map((carwash, index) => (
      <Col md={3} key={index}>
        <Card>
          <Card.Img variant="top" src={carwash.image} alt={`Image of ${carwash.name}`} />
          <Card.Body>
            <Card.Title>{carwash.name}</Card.Title>
            <Card.Text>
              {carwash.address}
            </Card.Text>
            <Card.Text>
              <strong>Services Offered:</strong>
              <ul>
                {carwash.services.map(service => (
                  <li key={service.id}>{service.name}</li>
                ))}
              </ul>
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    ))}
  </Row>
);

export default CarWashCards;
