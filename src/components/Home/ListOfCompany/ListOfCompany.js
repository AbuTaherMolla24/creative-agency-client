import React from 'react';
import google from '../../../images/logos/google.png';
import airbnb from '../../../images/logos/airbnb.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import ListOfComapnyDetail from '../ListOfComapnyDetail/ListOfComapnyDetail';

const listOfCompanyData = [
    {
        img : google
    },
    {
        img : uber
    },
    {
        img : slack
    },
    {
        img : airbnb
    }
]
const ListOfCompany = () => {
    return (

        <div>
        <div className="d-flex justify-content-center">
                <div className="w-75 row mt-5">
                    {
                        listOfCompanyData.map(company => <ListOfComapnyDetail company={company}></ListOfComapnyDetail>)
                    }
                </div>
            </div>
        </div>
    );
};

export default ListOfCompany;