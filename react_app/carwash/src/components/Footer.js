import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" >
            <Navbar.Text style={{color: "white"}}> &copy; Bubbles N Brilliance 2023. All rights reserved </Navbar.Text>
        </Navbar>
    )
}

export default Footer;