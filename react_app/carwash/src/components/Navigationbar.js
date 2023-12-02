import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom/cjs/react-router-dom";

const Navigationbar = () => {
    return (
        <Navbar style={{ backgroundColor: "#2F70AF" }} variant="dark">
            <Navbar.Brand style={{ color: "white" }}></Navbar.Brand>
            <Nav fill variant="tabs" defaultActiveKey="/">
                <Nav.Item><Nav.Link as={Link} to="/" style={{ color: "white" }}>Login</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/Details" style={{ color: "white" }}>Details</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/Locations" style={{ color: "white" }}>Locations</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/About" style={{ color: "white" }}>About</Nav.Link></Nav.Item>
                <Nav.Item><Nav.Link as={Link} to="/ReviewForm" style={{ color: "white" }}>Reviews</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
    )
}

export default Navigationbar;