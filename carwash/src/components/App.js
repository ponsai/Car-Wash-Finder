import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './NavigationBar';
// import CarWashCards from './CarWashCards'; //enable to use homepage.
import CarWashForm from './CarWashForm';
import CheckoutProcess from './CheckoutProcess';
import carWashData from '../data/carWashData';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (newCart) => {
    setCart(newCart);
  };

  // const resetCart = () => {
  //   setCart([]);
  // };


  const handleFormSubmit = () => {
    // alert(`Submitting ${cart.length} services Request, You will recieve a call shortly`);
    setCart([]);  // Reset the cart after submission
  };
// <Route path="/" element={<CarWashCards />} />  // remove this to not display the homepage.
  return (
    <Router>
      <NavigationBar cartCount={cart.length} />
      <div className="container mt-4">
        <Routes>
          
          <Route path="/wash-finder" element={<CarWashForm onCartUpdate={handleCartUpdate} />} />
          <Route path="/cart" element={<CheckoutProcess selectedServices={cart} carWashData={carWashData} onFormSubmit={handleFormSubmit} />} />
          {/* Add other routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
