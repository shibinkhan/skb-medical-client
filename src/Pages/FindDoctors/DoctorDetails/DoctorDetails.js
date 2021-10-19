import React from 'react';
import { useParams } from 'react-router';

const DoctorDetails = () => {
    const { doctorId } = useParams();
    return (
        <div className="doctor-body d-flex justify-content-center align-items-center">
            <h1>Doctor ID: {doctorId}</h1>
        </div>
    );
};

export default DoctorDetails;