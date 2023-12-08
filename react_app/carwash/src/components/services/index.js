import React ,{useEffect} from 'react';
import { useLocation } from 'react-router-dom';


const Services = () => {
    let location = useLocation();
    useEffect(() => {
        if (!location) return;
        console.log(location.state);
      }, [location])

  return (
    <div>Services</div>
  )
}

export default Services