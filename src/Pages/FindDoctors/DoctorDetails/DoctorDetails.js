import React from 'react';
import './DoctorDetails.css';
import { useParams } from 'react-router';
import useHooks from '../../../Hooks/useHooks';
import { NavLink } from 'react-router-dom';

const DoctorDetails = () => {
    const { doctors } = useHooks();
    let { doctorId } = useParams();
    let doctorIdNumbr = parseFloat(doctorId);
    // console.log(doctorIdNumbr);

    const doctorDetails = doctors.find(doc => doc.key === doctorIdNumbr);
    // console.log(doctorDetails);

    return (
        <div className="container doctor-body mt-5">
            <div className="container doctor-body mt-5">
                <div className="row">
                    <div className="col-12 col-md-6 d-flex align-items-center justify-content-center">
                        <img src={doctorDetails?.img} alt="" className="doc-img img-fluid" />
                    </div>
                    <div className="col-12 col-md-6 doc-details d-flex align-items-center">
                        {/* doctor details */}
                        <div className="mt-5">
                            <h2 className="">Name: {doctorDetails?.name}.</h2>
                            <h4 className="">Speciality: <span className="fw-bold color">{doctorDetails?.speciality}</span>.</h4>
                            <h4 className="">Degree: {doctorDetails?.degree}.</h4>
                            <h4 className="">Experience: {doctorDetails?.experience} Years.</h4>
                            <h4 className="">Visit: <span className="fw-bold color">{doctorDetails?.visit}</span> Taka Only.</h4>
                            <h4 className="">Hours: {doctorDetails?.hours}.</h4>
                            <NavLink to="/"><button className="doc-book button mt-4 py-2 px-5">Call for Booking</button></NavLink>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="mt-5 mb-3">Biography</h3>
                    <p className="biography">{doctorDetails?.biography}</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDetails;