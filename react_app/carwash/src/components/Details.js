import React, { useEffect } from 'react';
import './details/CardGrid.css';
import DetailGrid from "./details/CardGrid";
import ReviewForm from "./ReviewForm"
const Details = () => {
    return(
        <div className="details-container">
            <h1>Details Page</h1>
            <DetailGrid/>
        </div>
    );
}

export default Details;
