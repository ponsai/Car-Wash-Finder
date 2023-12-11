import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NavigationBar from './components/NavigationBar';
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
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './components/Footer';
import { Provider } from 'react-redux';
import store from "./store";
import ResetPassword from "./components/ResetPassword";
import ResetPasswordConfirm from "./components/ResetPasswordConfirm";


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
      <Provider store={store}>
      <Router>
        <NavigationBar cartCount={cart.length}/> {/* Pass the cart length to the NavigationBar */}
        <div>
          <Routes>
            <Route path="/" element={<Details />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/ResetPassword" element={<ResetPassword />} />
            <Route path="/ResetPassword/ResetPasswordConfirm/" element={<ResetPasswordConfirm />} />
            <Route path="/Details" element={<Details />} />
            <Route path="/wash-finder" element={<CarWashForm onCartUpdate={handleCartUpdate} />} />
            <Route path="/About" element={<About />} />
            <Route path="/ReviewForm" element={<ReviewForm />} />
            <Route path="/cart" element={<CheckoutProcess selectedServices={cart} carWashData={carWashData} onFormSubmit={handleFormSubmit} />} />
          </Routes>
        </div>
        <Footer/>
        </Router>
      </Provider>
    </div>
  );
}

export default App;
