import React from 'react';
import { useParams } from 'react-router';
import useHooks from '../../../../Hooks/useHooks';

const ServiceDetails = () => {
    const { services } = useHooks();
    let { serviceId } = useParams();
    let serviceIdNumber = parseFloat(serviceId);


    const serviceDetails = services.find(doc => doc.key === serviceIdNumber);
    return (
        <div className="container mt-5">
            {/* Details */}
            <h1 className="color mb-3">{serviceDetails?.name} DEPARTMENT</h1>
            <img src={serviceDetails?.img2} alt="" className="mx-auto container img-fluid"/>
            <p className="f mt-5 mb-3">{serviceDetails?.shortDescription}</p>
            <img src={serviceDetails?.img3} alt="" className="mx-auto container img-fluid"/>
            <h3 className="color mt-5 mb-3">Description</h3>
            <p className="mb-3">{serviceDetails?.description}</p>
            <img src={serviceDetails?.img1} alt="" className="mx-auto container img-fluid"/>
            <p className="mt-5">{serviceDetails?.description2}</p>
        </div>
    );
};

export default ServiceDetails;