import React, { useEffect, useState } from 'react';

const AllDonorRequestAdmin = () => {

    const [donorRequest, setDonorRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allDonorRequest')
            .then(res => res.json())
            .then(data => setDonorRequest(data))
    }, [donorRequest])


    const handleClick = (email,unit,blood_group, status) => {
      //alert(status);
      if(status == 1){
        fetch('http://localhost:5000/updateStatus', {
        method:'POST',
        body: JSON.stringify({email ,unit,blood_group, status}),
        headers: {
            "content-type": 'application/json; charset=UTF-8',
        },
      })
      .then(res => res.json())
      .then(data => setDonorRequest(data))
    }
        
 }

 const handleDelete = (email) =>{
    fetch(`http://localhost:5000/deleteDonor/${email}`, {
        method:'DELETE',
      })
      .then(res => res.json())
      .then(data => setDonorRequest(data))
}
    return (
        <div className='donor_request'>
        <h1 className='mb-5 text-center' >ALL DONOR REQUEST</h1>

        <table class="table">
            <thead>
                <tr className='text-center'>
                    <th>#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Email</th>
                    <th scope="col">Blood-Group</th>
                    <th scope="col">Unit</th>
                    <th scope="col">Date</th>
                    <th scope="col">Phone</th>
                    <th scope="col">Address</th>
                    <th scope="col">Disease</th>
                    <th scope="col"></th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {
                    donorRequest.map((donor, index) => 
                        <tr className='text-center'>
                            <td>{index+1}</td>
                            <td>{donor.donor_name}</td>
                            <td>{donor.donor_email}</td>
                            <td>{donor.donor_blood_group}</td>
                            <td>{donor.unit}</td>
                            <td>{donor.date}</td>
                            <td>{donor.donor_phone}</td>
                            <td>{donor.donor_address}</td>
                            <td>{donor.donor_disease}</td>
                            <td><button onClick={(e)=>handleClick(`${donor.donor_email}`,`${donor.unit}`, `${donor.donor_blood_group}`, 1)} style={{background:'green', color:'white', padding:'5px 15px', border:'none'}}>Accept</button></td>
                            <td><button onClick={(e)=>handleDelete(`${donor.donor_email}`)} name='reject' style={{background:'red', color:'white', padding:'5px 15px',border:'none'}}>Reject</button></td>
                        </tr>
                    )
                }
            </tbody>
        </table>

    </div>
    );
};

export default AllDonorRequestAdmin;