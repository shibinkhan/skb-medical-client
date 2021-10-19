import React from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    // const { services } = useServices();

    // const theService = services.filter(service => service.key === serviceId)
    // console.log(services);
    
    return (
        
        <div className="service-body d-flex justify-content-center align-items-center">
            <h1>Service ID: {serviceId}</h1>
        </div>
    );
};

export default ServiceDetails;