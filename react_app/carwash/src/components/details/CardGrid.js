import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardGrid.css';

const CardGrid = () => {
    const [detailData, setDetailData] = useState([]);
    const [reviewData, setReviewData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {

        const token = "django-insecure-yz$1dit8wr^i*ci79ylpb8pw!%ar&w_2lsrpkqqszj@j_0u%sj";

        // Fetch locations
        axios.get('http://localhost:8000/Details/api/locations/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setDetailData(response.data);
            })
            .catch(error => {
                console.error('Error fetching location data:', error);
            });

        // Fetch reviews
        axios.get('http://localhost:8000/api/', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
            .then(response => {
                setReviewData(response.data);
                setLoading(false); // Set loading to false once both requests are complete
            })
            .catch(error => {
                console.error('Error fetching review data:', error);
            });
    }, []); // ensures that this effect runs once when the component mounts

    // Combine location and review data
    const combinedData = detailData.map((location, index) => ({
        ...location,
        review: reviewData[index] ? reviewData[index].review : '',
        image: `./images/${location.id}.jpg`
    }));

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div className="card-grid">
            {combinedData.map((combinedItem, index) => (
                <div key={index} className="card">
                    <h2>{combinedItem.name}</h2>
                    <img src={`/images/${index + 1}.jpg`} alt={`Location ${index + 1}`} />
                    <div className="info-section">
                        <p className="label">Address</p>
                        <p className="value">{combinedItem.address}</p>
                    </div>
                    <div className="info-section">
                        <p className="label">Overview</p>
                        <p className="value">{combinedItem.overview}</p>
                    </div>
                    <div className="info-section">
                        <p className="label">Review</p>
                        <p className="value">{combinedItem.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid