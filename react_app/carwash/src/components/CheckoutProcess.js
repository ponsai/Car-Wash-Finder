import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';

const CheckoutProcess = ({ selectedServices, carWashData }) => {
  const [customerName, setCustomerName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      customerName,
      contactDetails,
      locations: JSON.stringify(selectedServices)
    };

    try {
      const response = await fetch('http://localhost:8000/checkout/create/', {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
      if (response.ok) {
        setShowModal(true);
      } else {
        throw new Error('Network response was not ok.');
      }
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  // Function to find the details of the selected services, including location
  const getServiceDetails = () => {
    return selectedServices.map(serviceKey => {
      const [locationName, serviceId] = serviceKey.split('-');
      const location = carWashData.find(carwash => carwash.name === locationName);
      const service = location?.services.find(s => s.id === parseInt(serviceId));
      return { ...service, locationName, address: location.address };
    });
  };

  const selectedServiceDetails = getServiceDetails();

  return (
    <div>
      <h3>Selected Services</h3>
      {selectedServiceDetails.length > 0 ? (
        <ul>
          {selectedServiceDetails.map((service, index) => (
            <li key={index}>
              {service.locationName}: {service.name} (Address: {service.address})
            </li>
          ))}
        </ul>
      ) : (
        <p>No services selected</p>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Contact Details</Form.Label>
          <Form.Control
            type="text"
            required
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary">Submit</Button>
      </Form>

      {/* Modal for displaying submission details */}
      <Modal show={showModal} onHide={() => setShowModal(false)} size="lg" centered>
        <Modal.Header closeButton>
          <Modal.Title>Thank You!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p><strong>Name:</strong> {customerName}</p>
          <p><strong>Contact Details:</strong> {contactDetails}</p>
          {/*<p><strong>Location Address:</strong></p>*/}
          <p><strong>Selected Services:</strong></p>          
          <ul>
            {selectedServiceDetails.map((service, index) => (
              <li key={index}>{service.locationName}: {service.name}</li>
            ))}
          </ul>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => setShowModal(false)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default CheckoutProcess;