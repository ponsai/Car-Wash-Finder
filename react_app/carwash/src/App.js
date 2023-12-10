import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
import Details from './components/Details';
import About from './components/About';
import Login from './components/Login';
import ReviewForm from './components/ReviewForm';
import CarWashForm from './components/CarWashForm';
import CheckoutProcess from './components/CheckoutProcess';
import carWashData from './data/carWashData';
import Header from "./components/review/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Services from './components/services'
import Footer from './components/Footer';

function App() {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (newCart) => {
    setCart(newCart);
  };

  const handleFormSubmit = () => {
    setCart([]); // Reset the cart after submission
  };

  return (
    <div className="App">
      <Router>
        <Header/>
        <NavigationBar cartCount={cart.length}/> {/* Pass the cart length to the NavigationBar */}
        <div className="container mt-4">
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/wash-finder" element={<CarWashForm onCartUpdate={handleCartUpdate} />} />
            <Route path="/About" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
            <Route path="/cart" element={<CheckoutProcess selectedServices={cart} carWashData={carWashData} onFormSubmit={handleFormSubmit} />} />
          </Routes>
        </div>
        <Footer/>
        </Router>
    </div>
  );
}

export default App;
