import React, {useState, useEffect} from "react"; 
import Carousel from 'react-bootstrap/Carousel';

function AboutCarousel() {
  const [index, setIndex] = useState(0);
  const [imagesData, setImagesData] = useState(null);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(async () => {
    try {
      if(!imagesData){
        let url = 'http://localhost:5000/about-us';
        const response = await fetch(url);
        const about_us_data = await response.json();
        setImagesData(about_us_data);
        console.log(about_us_data);
      }

  } catch (error) {
    console.log(error);
  }
  })



  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
       {imagesData && imagesData.map((slide, i) => {
        const imageUrl = `data:image/png;base64,${slide.base64Image}`;
        return (
          <Carousel.Item>        
        <img
          className="d-block w-100"
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