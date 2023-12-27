import React from 'react';
import { Link } from 'react-router-dom';

const PatientsSidebar = () => {
    return (
        <div className='sidebar_link'>
                 <Link to='/patientDashBoard'>DashBoard</Link>
                 <Link to='/findDonor'>Find Donor</Link>
                 <Link to='/patientRequest'>Patient Request</Link>
        </div>
    );
};

export default PatientsSidebar;