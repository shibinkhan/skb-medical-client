import { useEffect, useState } from 'react';

const useHooks = () => {
    const [services, setServices] = useState([]);
    const [doctors, setDoctors] = useState([]);
    const [ambulances, setAmbulances] = useState([]);

    // services
    useEffect(() => {
        fetch('/data/services.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setServices(data);
        });
    }, []);

    // doctors
    useEffect(() => {
        fetch('/data/doctors.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setDoctors(data);
        });
    }, []);

    // ambulances
    useEffect(() => {
        fetch('/data/ambulance.json')
        .then(res => res.json())
        .then(data => {
            // console.log(data);
            setAmbulances(data);
        });
    }, []);

    return {
        services,
        doctors,
        ambulances
    };
};

export default useHooks;