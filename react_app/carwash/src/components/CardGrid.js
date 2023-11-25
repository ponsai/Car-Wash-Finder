/* CardGrid.js
* Add this into detail page
* This is just a component
* add in CardGrid.css to style the grid
*
* PageLayout for detail page should look like:
*
* Navbar
* <header for the page>
* <gridlayout with cards that display 6 locations (this file/component)>
* Footer
*/
import React, { useState } from 'react';
import '../CardGrid.css'; // Import the CSS file

const DetailGrid = () => {

    const detailData = [
        {
            name: "Carwash Location 1",
            address: "123 Main St, City",
            overview: "Summary of Location 1",
            review: "Review of Location 1",
            image: "/images/1.jpg",
        },
        {
            name: "Carwash Location 2",
            address: "456 Elm St, City",
            overview: "Summary of Location 2",
            review: "Review of Location 2",
            image: "/images/2.jpg",
        },
        {
            name: "Carwash Location 3",
            address: "789 Oak St, City",
            overview: "Summary of Location 3",
            review: "Review of Location 3",
            image: "/images/3.jpg",
        },
        {
            name: "Carwash Location 4",
            address: "789 india St, City",
            overview: "Summary of Location 4",
            review: "Review of Location 4",
            image: "/images/4.jpg",
        },
        {
            name: "Carwash Location 5",
            address: "533 Normal St, City",
            overview: "Summary of Location 5",
            review: "Review of Location 5",
            image: "/images/5.jpg",
        },
        {
            name: "Carwash Location 6",
            address: "sdsu",
            overview: "Summary of Location 6",
            review: "Review of Location 6",
            image: "/images/6.jpg"
        },
    ];
    /*

    used to keep track of rating
    const [userRatings, setUserRatings] = useState(Array(detailData.length).fill(3.5));
    const handleRatingChange = (index, value) => {
        const newRatings = [...userRatings];
        newRatings[index] = value;
        setUserRatings(newRatings);
    };
*/
    return (

        <div className="card-grid">
            {detailData.map((location, index) => (
                <div key={index} className="card">
                    <h2>{location.name}</h2>
                    <img src={location.image} alt={`Location ${index + 1}`} />
                    <div className="info-section">
                        <p className="label">Address</p>
                        <p className="value">{location.address}</p>
                    </div>
                    <div className="info-section">
                        <p className="label">Overview</p>
                        <p className="value">{location.overview}</p>
                    </div>



                    <div className="info-section">
                        <p className="label">Reviews</p>
                        <p className="value">{location.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default DetailGrid;
