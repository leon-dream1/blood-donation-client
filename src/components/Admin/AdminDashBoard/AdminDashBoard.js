import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';
import AllBlood from '../AllBlood/AllBlood';



const AdminDashBoard = () => {
    const [availableBlood, setAvailableBlood] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/availableBlood')
            .then(res => res.json())
            .then(data => setAvailableBlood(data))
    }, [])

    return (
        <div className='admin_dashboard'>
            <div className="container">
                <div className="row mt-5">
                    {
                        availableBlood.map(blood => <AllBlood blood={blood}></AllBlood>)
                    }
                </div>
            </div>

        </div>
    );
};

export default AdminDashBoard;