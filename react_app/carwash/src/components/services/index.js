import React ,{useEffect} from 'react';
import './style.css';
import { useLocation } from 'react-router-dom';


const Services = () => {
    let location = useLocation();
    useEffect(() => {
        if (!location) return;
        console.log(location.state);
      }, [location])

  return (
    <div className="service-container">
      <img src={location?.state?.image} alt='carwash service' />
      <h3>{location?.state?.name}</h3>
      <p>Address: {location?.state?.address}</p>
      <p>Overview: {location?.state?.overview}</p>
      <p>Review: {location?.state?.review}</p>
    </div>
  )
}

export default Services