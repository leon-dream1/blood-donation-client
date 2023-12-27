import React from 'react';

import { Link } from 'react-router-dom';
import './Sidebar.css';

const Sidebar = () => {
    return (
        <div className='sidebar_link'>
                 <Link to='/donorDashBoard'>DashBoard</Link>
                 <Link to='/donateBlood'>Donate Blood</Link>
                 <Link to='/donorRequest'>Donor Request</Link>
        </div>
    );
};

export default Sidebar;