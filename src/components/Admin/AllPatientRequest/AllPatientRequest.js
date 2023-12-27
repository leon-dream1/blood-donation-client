import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AllPatientRequest = () => {

    const [patientRequest, setPatientRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPatientRequest')
            .then(res => res.json())
            .then(data => setPatientRequest(data))
    }, [patientRequest])

    const handleClick = (email,unit,blood_group, status) => {
        if(status == 1){
            fetch('http://localhost:5000/updatePatientStatus', {
            method:'POST',
            body: JSON.stringify({email ,unit,blood_group, status}),
            headers: {
                "content-type": 'application/json; charset=UTF-8',
            },
          })
          .then(res => res.json())
          .then(data => setPatientRequest(data))
        }

    }
    const handleDelete = (email) => {
        fetch(`http://localhost:5000/deletePatient/${email}`, {
        method:'DELETE',
      })
      .then(res => res.json())
      .then(data => setPatientRequest(data))
    }


    return (
        <div className='donor_page'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-lg-9">
                        <div className="donor_request">
                        <h1 className='mb-5 text-center' >ALL PATIENT REQUEST</h1>
                            <table class="table">
                                <thead>
                                    <tr className='text-center'>
                                        <th>#</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Email</th>
                                        <th scope="col">Blood-Group</th>
                                        <th scope="col">Unit</th>
                                        <th scope="col">Donor Name</th>
                                        <th scope="col">Donor Phone</th>
                                        <th scope="col"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        patientRequest.map((patient, index) =>
                                            <tr className='text-center'>
                                                <td>{index + 1}</td>
                                                <td>{patient.patient_name}</td>
                                                <td>{patient.patient_email}</td>
                                                <td>{patient.patient_blood_group}</td>
                                                <td>{patient.patient_blood_unit}</td>
                                                <td>{patient.donor_name}</td>
                                                <td>{patient.donor_phone}</td>
                                                <td><button onClick={(e) => handleClick(`${patient.patient_email}`, `${patient.patient_blood_unit}`, `${patient.patient_blood_group}`, 1)} style={{ background: 'green', color: 'white', padding: '5px 15px', border: 'none' }}>Accept</button></td>
                                                <td><button onClick={(e) => handleDelete(`${patient.patient_email}`)} name='reject' style={{ background: 'red', color: 'white', padding: '5px 15px', border: 'none' }}>Reject</button></td>
                                            </tr>
                                        )
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllPatientRequest;