import React, { Fragment } from 'react';
import { Container, Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './navbar css/navbar.css';
import mainLogo from'./logo.png';
import { connect } from "react-redux";
import { logout} from "../actions/auth";

const NavigationBar = ({ logout, isAuthenticated, cartCount }) => {
    const guestLinks = () => (
        <Fragment>
            <Nav.Item><Nav.Link as={Link} to="/Login" className="nav-button">Login</Nav.Link></Nav.Item>
        </Fragment>
    );

    const authLinks = () => (
        <Nav.Item><Nav.Link as={Link} to="/Details" className="nav-button" onClick={ logout }>Logout</Nav.Link></Nav.Item>
    );

    return (
        <header id="main-header" className="header">
            <Container>
                <Navbar expand="lg">
                    <Navbar.Brand as={Link} to="/">
                        <img src={mainLogo} height="100" alt=""/>
                        <span className="navbar-brand-text">Bubbles N Brilliance</span>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Nav.Item><Nav.Link as={Link} to="/Login" className="nav-button">Home</Nav.Link></Nav.Item>
                            {isAuthenticated ? authLinks() : guestLinks()}
                            <Nav.Item><Nav.Link as={Link} to="/Details" className="nav-button">Details</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={Link} to="/wash-finder" className="nav-button">Locations</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={Link} to="/About" className="nav-button">About</Nav.Link></Nav.Item>
                            <Nav.Item><Nav.Link as={Link} to="/ReviewForm" className="nav-button">Reviews</Nav.Link></Nav.Item>
                            <Nav.Link as={Link} to="/cart">
                                <i className="bi-cart-fill"></i> Cart ({cartCount})
                            </Nav.Link>
                        </Nav>
                        {/* If you have additional buttons or links, place them here */}
                    </Navbar.Collapse>
                </Navbar>
            </Container>
        </header>
    );
};

const mapStateToProps = state => ({
    isAuthenticated: state.auth.isAuthenticated
});


export default connect(mapStateToProps, { logout })(NavigationBar);
