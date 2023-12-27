import React from 'react';
import './HeaderMain.css';
import { Navigate, useNavigate } from 'react-router-dom';

const HeaderMain = () => {
    const navigate = useNavigate();
    return (
        <div className='header_main'>
            <div className="header_overlay d-flex justify-content-center align-items-center">
                <div className="header_main_content">
                    <h4 className='heading'>Donate to blood contribute</h4>
                    <h2 className='main_heading'>Your Blood Can Bring Smile <br/>In Any One Person Face</h2>
                    <button className='btn1'>Explore Now</button>
                    <button className='btn2'>Contact Now</button>
                </div>
            </div>
            <div className="main_button">
                <div onClick={()=>navigate('/login')} className="register_button">
                    <h4 className='pb-3'>Register Now</h4>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</p>
                </div>
                <div onClick={()=>navigate('/donorDashboard')} className="donate_button">
                    <h4 className='pb-3'>Donate Now</h4>
                    <p>Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain,</p>
                </div>
            </div>
        </div>
    );
};

export default HeaderMain;