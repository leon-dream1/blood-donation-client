import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AllDonor from '../AllDonor/AllDonor';

const DonorPage = () => {
    return (
        <div className='donor_page'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 sidebar">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-lg-9">
                   <AllDonor></AllDonor>
                </div>
            </div>
        </div>
    </div>
    );
};

export default DonorPage;