import React from 'react';
import useHooks from '../../Hooks/useHooks';
import Doctor from './Doctor';

const FindDoctors = () => {
    const { doctors } = useHooks();
    // console.log(doctors);

    return (
        <div className="container">
            <h1 className="color mt-4 mb-3">Our Doctors</h1>
            <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-4">
                {
                    doctors.map(doctor => <Doctor
                        key={doctor.key}
                        doctor={doctor}
                    />)
                }
            </div>
        </div>
    );
};

export default FindDoctors;