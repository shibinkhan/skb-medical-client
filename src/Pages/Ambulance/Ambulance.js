import React from 'react';
import { Link } from 'react-router-dom';
import './Ambulances.css';

const Ambulance = ({ambulance}) => {
    const { img, name, location, rent } = ambulance;
    return (
        <div className="col">
            <div className="card h-100">
                <img src={img} className="ambulance-img card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Location: {location}</p>
                    <p>Rent: {rent} Taka</p>
                    <Link to="/"><button className="button">Call for Booking</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Ambulance;