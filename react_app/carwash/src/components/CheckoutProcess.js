import React, { useState } from 'react';
import { Button, Form, Modal } from 'react-bootstrap';
import axios from 'axios';

const CheckoutProcess = ({ selectedServices, carWashData }) => {
  const [customerName, setCustomerName] = useState('');
  const [contactDetails, setContactDetails] = useState('');
  const [showModal, setShowModal] = useState(true);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = {
      customerName,
      contactDetails,
      selectedServices : "ABC"
    };

    try {
      const response = await axios.post('http://localhost:8000/locations/create/', formData);
      
      if (response.status === 200 || response.status === 201) {
        alert(`Submission successful!\nName: ${customerName}\nContact Details: ${contactDetails}`);
      } else {
        console.error('Server error:', response);
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


    </div>
  );
};

export default CheckoutProcess;