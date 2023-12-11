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
      contactDetails
    };

    try {
      const response = await fetch('http://localhost:8000/locations/create/', {
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
    <div style={{height: "calc(100vh - 198px)", paddingTop: "32px"}}>
      <h3  style={{display: "flex"}}>Selected Services</h3>
      {selectedServiceDetails.length > 0 ? (
        <div style={{display: "flex"}}>
          <ul style={{listStyle: "none", padding: 0}}>
            {selectedServiceDetails.map((service, index) => (
              <li key={index}>
                <strong>{service.locationName}:</strong> {service.name} (Address: {service.address})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No services selected</p>
      )}
      <Form onSubmit={handleSubmit}>
        <Form.Group style={{margin: "24px 0px"}}>
          <Form.Label style={{float: "left", margingRight: "16px", width: "20%"}}>
            <span style={{color: "red"}}>*</span> Name :
          </Form.Label>
          <Form.Control 
            type="text"
            required
            style={{width: "80%"}}
            placeholder="Enter the name"
            value={customerName}
            onChange={(e) => setCustomerName(e.target.value)}
          />
        </Form.Group>
        <Form.Group style={{margin: "24px 0px"}}>
          <Form.Label style={{float: "left", margingRight: "16px", width: "20%"}}>
            <span style={{color: "red"}}>*</span> Contact Details :
          </Form.Label>
          <Form.Control
            type="number"
            required
            style={{width: "80%"}}
            placeholder="Enter the contact number"
            value={contactDetails}
            onChange={(e) => setContactDetails(e.target.value)}
          />
        </Form.Group>
        <Button type="submit" variant="primary" style={{backgroundColor:"#bb7e7a" }}>Submit</Button>
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