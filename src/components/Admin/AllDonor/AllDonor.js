import React, { useEffect, useState } from 'react';

const AllDonor = () => {
    const [donors, setDonors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allDonor')
            .then(res => res.json())
            .then(data => setDonors(data))
    }, [])
    return (
        <div className='donor_request'>
            <h1 className='mb-5 text-center' >ALL DONOR</h1>

            <table class="table">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">#</th>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Blood-Group</th>
                        <th scope="col">Date</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Disease</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        donors.map((donor, index) =>
                            <tr className='text-center'>
                                <td>{index+1}</td>
                                <td>{donor.donor_name}</td>
                                <td>{donor.donor_email}</td>
                                <td>{donor.donor_blood_group}</td>
                                <td>{donor.date}</td>
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

export default AllDonor;