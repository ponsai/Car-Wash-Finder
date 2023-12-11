import AboutCarousel from "./about/Carousel";
import PlainCard from "./about/MissionCard";
import ContactCardGroup from "./about/ContactCardGroup";
import ContactUsCard from "./about/ContactUsCard";
import bg from './about/images/CarWashBG.jpg';
import { Container, Button } from "react-bootstrap";

const About = () => {
    return(
        <Container style={{backgroundImage:{bg}}}>
        <div className="div-Gap"> <AboutCarousel /> </div>
        <div className="div-Gap"> <PlainCard /> </div>
        <div className="div-Gap"> <ContactCardGroup /> </div>
        {/* <div className="div-Gap"> <ContactUsCard /> </div> */}
        <div className="my-4 pb-4 flex ">
            <div className="my-4 pb-4 d-flex justify-content-center ">
            <p style={{color: 'darkblue', fontWeight: 600, width: "50%"}} className="align-self-center display-4">Got a question? Our Super Stars are here to help.</p>
            </div>
            <Button href="mailto:contactus@bnb.com">Contact Us</Button>
        </div>
        </Container>
    );
}

export default About;