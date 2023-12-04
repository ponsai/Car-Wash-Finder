import { Nav, Navbar } from "react-bootstrap";

const Footer = () => {
    return (
        <Navbar fixed="bottom" bg="dark" data-bs-theme="dark" >
            <Navbar.Text style={{color: "white"}}> &copy; BnB 2023 </Navbar.Text>
        </Navbar>
    )
}

export default Footer;