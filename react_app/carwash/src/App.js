import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavigationBar from './components/NavigationBar'; // Choose the appropriate NavigationBar
import Home from './components/Home';
import Details from './components/Details';
import Locations from './components/Locations';
import About from './components/About';
import Login from './components/Login';
import ReviewForm from './components/ReviewForm';
import CarWashForm from './components/CarWashForm';
import CheckoutProcess from './components/CheckoutProcess';
import carWashData from './data/carWashData';
import Header from "./components/review/Header";
import Footer from "./components/review/Footer";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (newCart) => {
    setCart(newCart);
  };

  const handleFormSubmit = () => {
    // Reset the cart after submission
    setCart([]);
  };

  return (
    <div className="App">
      <Router>
        <Header/>
        <NavigationBar/>
        <div className="container mt-4">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/Locations" element={<Locations />} />
            <Route path="/About" element={<About />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
            <Route path="/wash-finder" element={<CarWashForm onCartUpdate={handleCartUpdate} />} />
            <Route path="/cart" element={<CheckoutProcess selectedServices={cart} carWashData={carWashData} onFormSubmit={handleFormSubmit} />} />
            {/* Add other routes as necessary */}
          </Routes>
        </div>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
