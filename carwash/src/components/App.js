import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// import CarWashCards from './CarWashCards'; --> enable this
import CarWashForm from './CarWashForm';
import CheckoutProcess from './CheckoutProcess';
import carWashData from '../data/carWashData';
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (newCart) => {
    setCart(newCart);
  };

  const handleFormSubmit = () => {
    alert(`Submitting ${cart.length} services Request, You will recieve a call shortly`);
    setCart([]);  // Reset the cart after submission
  };
// <Route path="/" element={<CarWashCards />} /> --> add this to get the card details on the home page as before. Enablet the header also.
  return (
    <Router>
      <NavigationBar cartCount={cart.length} />
      <div className="container mt-4">
        <Routes>          
          <Route path="/wash-finder" element={<CarWashForm onCartUpdate={handleCartUpdate} />} />
          <Route path="/cart" element={<CheckoutProcess selectedServices={cart} carWashData={carWashData} onFormSubmit={handleFormSubmit} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
