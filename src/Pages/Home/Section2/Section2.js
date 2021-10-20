import React from 'react';
import "./Section2.css";

const Facility = () => {
    return (
        <div className="container">
            <h1 className="color mt-5 mb-3">Our Facilities</h1>
            <div className="row row-cols-1 row-cols-md-2 g-4">
                <div className="col">
                    <div className="card-body-custom card h-100">
                        <div className="card-body p-5 worker d-flex align-items-center justify-content-center">
                            <div>
                            <h5 className="card-title worker-amount">50+</h5>
                            <p className="card-text worker-name">Doctors at work.</p>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Nurses at work. */}
                <div className="col">
                    <div className="card-body-custom card h-100">
                        <div className="card-body p-5 worker d-flex align-items-center justify-content-center">
                            <div>
                            <h5 className="card-title worker-amount">100+</h5>
                            <p className="card-text worker-name">Nurses at work.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-body-custom card h-100">
                        <div className="card-body p-5 worker d-flex align-items-center justify-content-center">
                            <div>
                            <h5 className="card-title worker-amount">300+</h5>
                            <p className="card-text worker-name">Bed facility.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card-body-custom card h-100">
                        <div className="card-body p-5 worker d-flex align-items-center justify-content-center">
                            <div>
                            <h5 className="card-title worker-amount">2500+</h5>
                            <p className="card-text worker-name">Satisfied Patient.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Facility;