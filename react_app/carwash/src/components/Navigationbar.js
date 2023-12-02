import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ cartCount }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">BnB</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Item><Nav.Link as={Link} to="/">Login</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="/Details">Details</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="/Locations">Locations</Nav.Link></Nav.Item>
        <Nav.Item><Nav.Link as={Link} to="/About">About</Nav.Link></Nav.Item>
      </Nav>
      <Nav className="ms-auto"> {/* This Right aligns this Nav */}
        <Nav.Link as={Link} to="/cart">
          <i className="bi-cart-fill"></i> Cart ({cartCount})
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
