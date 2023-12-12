import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        // <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" >
        //     <Navbar.Text style={{color: "white"}}> &copy; Bubbles N Brilliance 2023. All rights reserved </Navbar.Text>
        // </Navbar>
        <footer style={{ 
            height: "6vh", 
            backgroundColor: "#212529", 
            justifyContent: "center", 
            display: "flex", 
            alignItems: "center" 
        }}>
            <span className="navbar-text" style={{ color: "white" }}>
                © Bubbles N Brilliance 2023. All rights reserved
            </span>
        </footer>
    )
}

export default Footer;