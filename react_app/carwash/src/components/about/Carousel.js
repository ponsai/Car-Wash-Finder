import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

const data = [
  {
   image: require('./images/aboutImage1.png'), 
   caption:"Caption",
   description:"Description Here"
  },
  {
    image:require('./images/aboutImage2.png'), 
    caption:"Caption",
    description:"Description Here"
   },
   {
    image:require('./images/aboutImage3.png'), 
    caption:"Caption",
    description:"Description Here"
   } 
]

function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {data.map((slide, i) => {
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
          src={slide.image}
          alt="slider image"
        />
        <Carousel.Caption>
          <h3>{slide.caption}</h3>
          <p>{slide.description}</p>
        </Carousel.Caption>
      </Carousel.Item>
        )
      })}
      
    </Carousel>
  );
}
export default AboutCarousel;