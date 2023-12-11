import React, {useState} from "react"; 
import Carousel from 'react-bootstrap/Carousel';
import { aboutUsData } from '../../data/aboutUsData';

function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [imagesData, setImagesData] = useState(aboutUsData);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel className="border-0 mt-5 rounded-2"activeIndex={index} onSelect={handleSelect}>
       {imagesData && imagesData.map((slide, i) => {
        const imageUrl = `data:image/png;base64,${slide.base64Image}`;
        return (
          <Carousel.Item>        
        <img
          className="d-block border-0 rounded-2 w-100"
          src={imageUrl}
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