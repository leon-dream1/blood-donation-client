import React, { useContext, useEffect, useState } from 'react';
import PatientsSidebar from '../PatientsSidebar/PatientsSidebar';
import { userContext } from '../../../App';

const PatientRequest = () => {
    const [user, setUser] = useContext(userContext);

    const [patientRequest, setPatientRequest] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/getPatientRequest', {
            method: "POST",
            body: JSON.stringify({ email: user.email }),
            headers: {
                "content-type": 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(data => setPatientRequest(data))

    }, [])

    const handleDelete = (email) => {
        fetch(`http://localhost:5000/deletePatient/${email}`, {
            method:'DELETE',
          })
          .then(res => res.json())
          .then(results => console.log(results))
    }
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 sidebar">
                    <PatientsSidebar></PatientsSidebar>
                </div>
                <div className="col-lg-9 justify-content-center">
                    <div className="donor_request">
                        <h1 className='text-center mb-5'>Blood Request</h1>

                        <table class="table">
                            <thead>
                                <tr className='text-center'>
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
                                    patientRequest.map(patient =>
                                        <tr className='text-center'>
                                            <td>{patient.patient_name}</td>
                                            <td>{patient.patient_email}</td>
                                            <td>{patient.patient_blood_group}</td>
                                            <td>{patient.patient_blood_unit}</td>
                                            <td>{patient.donor_name}</td>
                                            <td>{patient.donor_phone}</td>
                                            <td><button>{!patient.status ? `PENDING` : `${patient.status ? 'ACCEPTED' : 'REJECTED'}`}</button></td>
                                            <td><button onClick={() => handleDelete(`${patient.patient_email}`)} style={{ background: 'red', border: 'none', color: 'white', padding: '5px 10px' }}>DELETE</button></td>
                                        </tr>
                                    )
                                }
                            </tbody>
                        </table>



                    </div>
                </div>
            </div>
        </div>
    );
};

export default PatientRequest;