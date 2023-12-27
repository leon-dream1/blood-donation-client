import React, { useEffect, useState } from 'react';
import { userContext } from '../../../App';
import { useContext } from 'react';

import './AllDonorRequest.css';
import { useNavigate } from 'react-router-dom';

const AllDonorRequest = () => {
    const [user, setUser] = useContext(userContext);

    const [donorRequest, setDonorRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getDonorRequest', {
            method: "POST",
            body: JSON.stringify({ email: user.email }),
            headers: {
                "content-type": 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => setDonorRequest(data))

    }, [])
    
  const navigate =   useNavigate();

    const handleDelete = (email) =>{
        fetch(`http://localhost:5000/deleteDonor/${email}`, {
            method:'DELETE',
          })
          .then(res => res.json())
          .then(results => console.log(results))
    }

    return (
        <div className='donor_request'>
            <h1 className='mb-5 text-center' >ALL REQUEST</h1>

            <table class="table">
                <thead>
                    <tr className='text-center'>
                        <th scope="col">Name</th>
                        <th scope="col">Email</th>
                        <th scope="col">Blood-Group</th>
                        <th scope="col">Date</th>
                        <th scope="col">Phone</th>
                        <th scope="col">Address</th>
                        <th scope="col">Disease</th>
                        <th scope="col">Status</th>
                        <th scope="col"></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        donorRequest.map(donor => 
                            <tr className='text-center'>
                                <td>{donor.donor_name}</td>
                                <td>{donor.donor_email}</td>
                                <td>{donor.donor_blood_group}</td>
                                <td>{donor.date}</td>
                                <td>{donor.donor_phone}</td>
                                <td>{donor.donor_address}</td>
                                <td>{donor.donor_disease}</td>
                                <td><button style={{background:'red', border:'none', color:'white', padding:'5px 10px'}}>{!donor.status ? `PENDING` : `${donor.status ? 'ACCEPTED' : 'REJECTED'}`}</button></td>
                                <td><button onClick={()=>handleDelete(`${donor.donor_email}`)} style={{background: 'red', border:'none', color:'white', padding:'5px 10px'}}>DELETE</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>

        </div>
    );
};

export default AllDonorRequest;