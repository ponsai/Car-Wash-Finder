import AboutCarousel from "./about/Carousel";
import PlainCard from "./about/MissionCard";
import ContactCardGroup from "./about/ContactCardGroup";
import ContactUsCard from "./about/ContactUsCard";
import bg from './about/images/CarWashBG.jpg';
import { Container } from "react-bootstrap";
const About = () => {
    return(
        <Container style={{backgroundImage:{bg}}}>
        <div className="div-Gap"> <AboutCarousel /> </div>
        <div className="div-Gap"> <PlainCard /> </div>
        <div className="div-Gap"> <ContactCardGroup /> </div>
        <div className="div-Gap"> <ContactUsCard /> </div>
        </Container>
    );
}

export default About;