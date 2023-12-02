import './App.css';
import Navigationbar from './components/NavigationBar';
import React, { useState } from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
// import Home from './components/Home'; // not used apparently
import Details from './components/Details';
//import Locations from './components/Locations';
import About from './components/About';
import Login from './components/Login';
import ReviewForm from './components/ReviewForm';
import Header from "./components/review/Header";
import Footer from "./components/review/Footer";
// import Navigationbar from './components/NavigationBar'; //duplicate
// import CarWashCards from './CarWashCards'; //enable to use homepage.
import CarWashForm from './components/carwashform';
import CheckoutProcess from './components/CheckoutProcess';
import carWashData from './data/carWashData';
import 'bootstrap/dist/css/bootstrap.min.css';



const App = () => {
  const [cart, setCart] = useState([]);

  const handleCartUpdate = (newCart) => {
    setCart(newCart);
  };
  const handleFormSubmit = () => {
    // alert(`Submitting ${cart.length} services Request, You will recieve a call shortly`);
    setCart([]);  // Reset the cart after submission
  };


  return (
    <div className="App">
        <Router>
        <NavigationBar cartCount={cart.length} />
        <div className="container mt-4">
          <Header/>
          <Navigationbar/>
          <Switch>
            
            <Route exact path="/" component={Login} />
            <Route exact path="/Details" component={Details} />
            {/* <Route exact path="/Locations" component={Locations} />*/}
			      <Route path="/wash-finder" element={<CarWashForm onCartUpdate={handleCartUpdate} />} />
            <Route path="/cart" element={<CheckoutProcess selectedServices={cart} carWashData={carWashData} onFormSubmit={handleFormSubmit} />} />
            <Route exact path="/About" component={About} />
            <Route exact path="/ReviewForm" component={ReviewForm} />
          </Switch>
        </div>
          </Router>
        <Footer/>
    </div>
  );
};

export default App;
