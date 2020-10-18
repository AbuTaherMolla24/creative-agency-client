import React from 'react';

const ServiceDetail = ({service}) => {
    return (
        
        <div className="col md-4 text-center">
            <img style={{height:'100px'}} src={service.img} alt=""/>
            <h4 className="mt-3 mb-3">{service.name}</h4>
            <h6 className="text-secondary">{service.details}</h6>
            
        </div>
        
    );
};

export default ServiceDetail;