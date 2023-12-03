import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
// import { NavLink } from 'react-router-dom/cjs/react-router-dom.min';


const NavigationBar = ({ cartCount }) => {
  return (
    <Navbar style={{ backgroundColor: "#2F70AF" }} variant="dark" expand="lg">
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: "#d8e5f0" }}>B n B</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav fill variant="tabs" className="me-auto">
            <Nav.Item><Nav.Link as={NavLink} to="/" style={{ color: "#d8e5f0" }}>Login</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/Details" style={{ color: "#d8e5f0" }}>Details</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/About" style={{ color: "#d8e5f0" }}>About</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/ReviewForm" style={{ color: "#d8e5f0" }}>Reviews</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/wash-finder" style={{ color: "#d8e5f0" }}>WashFinder</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link as={NavLink} to="/support" style={{ color: "#d8e5f0" }}>Support</Nav.Link></Nav.Item>
          </Nav>
          <Nav>
            <Nav.Link as={NavLink} to="/cart" style={{ color: "#d8e5f0" }}>
              <i className="bi-cart-fill"></i>
              {cartCount > 0 && (
                <span className="cart-badge">{cartCount}</span>
              )}
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
