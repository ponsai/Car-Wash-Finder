import React, { useEffect } from 'react';
import '../CardGrid.css';
import DetailGrid from "./CardGrid";
const Details = () => {
    return(
        <div className="details-container">
        <h1>Details Page</h1>
    <DetailGrid/>
</div>

    );
}

export default Details;
