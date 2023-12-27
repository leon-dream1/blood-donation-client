import React from 'react';
import { Link } from 'react-router-dom';

const AdminSidebar = () => {
    return (
        <div className='sidebar_link'>
            <Link to='/adminDashboard'>DashBoard</Link>
            <Link to='/allDonor'>Donor</Link>
            <Link to='/allDonorRequest'>Donor Request</Link>
            <Link to='/allPatient'>Patients</Link>
            <Link to='/allPatientRequest'>Patients Request</Link>
        </div>
    );
};

export default AdminSidebar;