import React from 'react';
import useHooks from '../../Hooks/useHooks';
import Ambulance from './Ambulance';
import img8 from '../../Images/helicopter.jpg';
import { NavLink } from 'react-router-dom';
import './Ambulances.css';

const Ambulances = () => {
    const { ambulances } = useHooks();

    return (
        <div className="container ">
            <div className="row my-5">
                <div className="col-12 col-md-7">
                    <img src={img8} alt="" className="img-fluid" />
                </div>
                {/* ambulances */}
                <div className="col-12 col-md-5 ambulance">
                    <h1 className="color helicopter">Helicopter</h1>
                    <p className="emergency"> For Emergency</p>
                    <p className="ambulance-details">Rent: <span className="color rent">12900</span> Taka Only.</p>
                    <p className="ambulance-details">Location: Everywhere in Bangladesh.</p>
                    <NavLink to="/"><button className="button">Call for Booking</button></NavLink>
                </div>
            </div>
            <h2 className="mt-3 mb-4">Call Our Ambulances</h2>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    ambulances.map(ambulance => <Ambulance
                        key={ambulance.key}
                        ambulance={ambulance}
                    />)
                }
            </div>
        </div>
    );
};

export default Ambulances;