import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import AllDonorRequest from '../AllDonorRequest/AllDonorRequest';

const DonorRequest = () => {
    return (
        <div className="container-fluid">
        <div className="row">
            <div className="col-lg-3 sidebar">
                <Sidebar></Sidebar>
            </div>
            <div className="col-lg-9">
                <AllDonorRequest></AllDonorRequest>
            </div>
        </div>
    </div>
    );
};

export default DonorRequest;