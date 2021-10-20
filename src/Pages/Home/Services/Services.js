import React from 'react';
import useHooks from '../../../Hooks/useHooks';
import Service from './Service';
import './Services.css';

const Services = () => {
    const { services } = useHooks();
    
    return (
        <div className="container service-body pb-4">
            <h1 className="color pt-3 mt-5 mb-3">Our Services</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    services.map(service => <Service
                        key={service.key}
                        service={service}
                    />)
                }
            </div>
        </div>
    );
};

export default Services;