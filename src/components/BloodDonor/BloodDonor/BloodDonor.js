import React, { useContext, useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import './BloodDonor.css';
import DonateBlood from '../DonateBlood/DonateBlood';
import DonorDashBoard from '../DonorDashBoard/DonorDashBoard';
import { userContext } from '../../../App';

const BloodDonor = () => {
    return (
        <div className='donor_page'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9">
                        <DonorDashBoard></DonorDashBoard>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BloodDonor;