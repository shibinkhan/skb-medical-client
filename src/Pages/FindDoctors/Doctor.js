import React from 'react';
import { Link } from 'react-router-dom';
import './Doctors.css';

const Doctor = ({ doctor }) => {
    const { key, img, name, speciality } = doctor;
    
    return (
        <div className="col">
            <div className="card-body-custom card h-100">
                <img src={img} className="doctor-img card-img-top mx-auto mt-4" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">Speciality: {speciality}</p>
                </div>
                <div>
                    <Link to={`/finddoctors/${key}`}><button className="button mb-5">See Details</button></Link>
                </div>
            </div>
        </div>
    );
};

export default Doctor;