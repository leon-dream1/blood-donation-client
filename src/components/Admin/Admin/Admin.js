import React from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AdminDashBoard from '../AdminDashBoard/AdminDashBoard';

const Admin = () => {
    return (
        <div className='donor_page'>
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 sidebar">
                    <AdminSidebar></AdminSidebar>
                </div>
                <div className="col-lg-9">
                    <AdminDashBoard></AdminDashBoard>
                </div>
            </div>
        </div>
    </div>
    );
};

export default Admin;