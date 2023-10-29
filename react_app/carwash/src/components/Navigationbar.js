import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar bg="light" data-bs-theme="light" >
            <Navbar.Text style={{color: "black"}}> BnB </Navbar.Text>
                <Nav fill variant="tabs">
                <Nav.Item><Nav.Link class="nav-item active" eventKey="1" as={Link} to="/">Home</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link class="nav-item" eventKey="2" as={Link} to="/Details">Details</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link class="nav-item" eventKey="3" as={Link} to="/Locations">Locations</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link class="nav-item" eventKey="4" as={Link} to="/About">About</Nav.Link></Nav.Item>
                    
                    
                    
                    
                </Nav>
        </Navbar>
    )
}

export default Navigationbar;