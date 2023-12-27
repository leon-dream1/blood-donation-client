import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import DonateForm from '../DonateForm/DonateForm';

const DonateBlood = () => {
    return (
        <div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        <Sidebar></Sidebar>
                    </div>
                    <div className="col-lg-9 justify-content-center">
                        <h1 className='text-center mt-5'>Donation Form</h1>
                        <DonateForm></DonateForm>
                    </div>
                </div>
            </div>
         </div>
    );
};

export default DonateBlood;