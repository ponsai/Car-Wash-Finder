// src/components/CardGrid.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './CardGrid.css';

const CardGrid = () => {
    const [detailData, setDetailData] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/Details/api/locations/')
            .then(response => {
                setDetailData(response.data);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
            });
    }, []);

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
                        <p className="label">Review</p>
                        <p className="value">{location.review}</p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CardGrid;
