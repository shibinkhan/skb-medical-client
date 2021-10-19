import React, { useEffect, useState } from 'react';
import Ambulance from './Ambulance';

const Ambulances = () => {
    const [ambulances, setAmbulances] = useState([]);

    useEffect(() => {
        fetch('Data/ambulance.json')
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setAmbulances(data);
            });
    }, []);

    return (
        <div className="container">
            <h1 className="mt-3 mb-4"> Call Our Ambulances</h1>
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