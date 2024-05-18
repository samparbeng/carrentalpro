// src/components/CarList.js
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const CarList = () => {
    const [cars, setCars] = useState([]);

    useEffect(() => {
        // Fetch car data from an API or static file
        fetch('/api/cars')
            .then(response => response.json())
            .then(data => setCars(data));
    }, []);

    return (
        <div>
            <h1>Available Cars</h1>
            <ul>
                {cars.map(car => (
                    <li key={car.id}>
                        <Link to={`/cars/${car.id}`}>{car.name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CarList;
