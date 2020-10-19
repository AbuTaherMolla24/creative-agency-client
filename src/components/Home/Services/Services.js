import React from 'react';
import service1 from '../../../images/icons/service1.png';
import service2 from '../../../images/icons/service2.png';
import service3 from '../../../images/icons/service3.png';
import ServiceDetail from '../ServiceDetail/ServiceDetail';

const serviceData = [
    {
        name: 'Web & Mobile design',
        img: service1,
        details: 'web design & mobile design lorem10 web design & mobile design lorem10'
    },
    {
        name: 'Graphic design',
        img: service2,
        details: 'web design & mobile design lorem10 web design & mobile design lorem10 v'
    },
    {
        name: 'Web development',
        img: service3,
        details: 'web design & mobile design lorem10 web design & mobile design lorem10 v'
    },

]
const Services = () => {
    return (
        <section className="services-container  mt-5 pt-5">
            <div className="text-center">
                <h2>Provide awesome services</h2>
            </div>
            <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5 mb-5 pt-10">
                    {
                        serviceData.map(service => <ServiceDetail service={service}></ServiceDetail>)
                    }
                </div>
            </div>
        </section>
    );
};

export default Services;