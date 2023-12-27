import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AllDonorRequestAdmin from '../AllDonorRequestAdmin/AllDonorRequestAdmin';

const DonorRequestPage = () => {
    return (
        <div className='donor_page'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 sidebar">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-lg-9">
                    <AllDonorRequestAdmin></AllDonorRequestAdmin>
               </div>
            </div>
        </div>
    </div>
    );
};

export default DonorRequestPage;