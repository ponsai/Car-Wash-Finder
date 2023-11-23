import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = ({ cartCount }) => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand as={Link} to="/">B'n B </Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to="/">Home</Nav.Link>
        <Nav.Link as={Link} to="/wash-finder">WashFinder</Nav.Link>
        <Nav.Link as={Link} to="/about">About Us</Nav.Link>
        <Nav.Link as={Link} to="/support">Support</Nav.Link>
      </Nav>
      <Nav className="ms-auto"> 
        <Nav.Link as={Link} to="/cart">
          <i className="bi-cart"></i> ({cartCount})
        </Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default NavigationBar;
