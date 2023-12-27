import React, { useContext, useEffect, useState } from 'react';
import './DonorDashBoard.css';
import { userContext } from '../../../App';

const DonorDashBoard = () => {

    const [user, setUser] = useContext(userContext);

    const [donorRequest, setDonorRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getDonorRequestFromDashboard', {
            method: "POST",
            body: JSON.stringify({ email: user.email }),
            headers: {
                "content-type": 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => setDonorRequest(data))

    }, [])


    return (
        <div className='dashboard'>
            <h1 className='text-center mb-5'>Donation Information</h1>


            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Blood-Group</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Disease</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        donorRequest.map(donor => 
                            <tr>
                                <td>{donor.donor_name}</td>
                                <td>{donor.donor_email}</td>
                                <td>{donor.donor_blood_group}</td>
                                <td>{donor.donor_phone}</td>
                                <td>{donor.donor_address}</td>
                                <td>{donor.donor_disease}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default DonorDashBoard;