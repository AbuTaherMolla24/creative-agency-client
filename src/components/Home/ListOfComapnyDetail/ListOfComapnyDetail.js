import React from 'react';

const ListOfComapnyDetail = ({company}) => {
    return (
        <div className="col-md-3  mt-5 mb-5">
        <img style={{height:'50px'}} src={company.img} alt=""/>
        </div>
    );
};

export default ListOfComapnyDetail;