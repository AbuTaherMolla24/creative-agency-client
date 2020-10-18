import React from 'react';
import Header from '../Header/Header';
import ListOfCompany from '../ListOfCompany/ListOfCompany';
import Services from '../Services/Services';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <ListOfCompany></ListOfCompany>
            <Services></Services>
        </div>
    );
};

export default Home;