import React from 'react';
import { Link } from 'react-router-dom';
import imageVaccine from '../../../Images/COVID-Vaccine-Butterfly-Care.jpg';
import './Section1.css';

const Section1 = () => {
    return (
        <div className="about-main container my-5 pb-4">
            {/* Corona Vaccine */}
            <h1 className="color mt-5 mb-3">Get Your Free Vaccine</h1>
            <div className=" row d-flex align-items-center justify-content-between">
                <div className="aboutUs col-lg-6">
                    <h1 className="corona">Vaccination</h1>
                    <p>COVID-19 vaccines are available for everyone at no cost. Learn more about how COVID-19 vaccines get to you. Many doctors’ offices, retail pharmacies, hospitals, and clinics offer COVID-19 vaccinations. Parents, check with your child’s healthcare provider about whether they offer COVID-19 vaccination......</p>
                    <Link to="/finddoctors">
                        <button className="read-more mb-5 mb-lg-0">Apply</button>
                    </Link>
                </div>

                <div className="col-lg-6">
                    <img src={imageVaccine} alt="" className="img-fluid" />
                </div>
            </div>
        </div>
    );
};

export default Section1;