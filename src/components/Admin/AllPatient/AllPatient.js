import React, { useEffect, useState } from 'react';
import AdminSidebar from '../AdminSidebar/AdminSidebar';

const AllPatient = () => {
    const [patient, setPatient] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/allPatient')
            .then(res => res.json())
            .then(data => setPatient(data))
    }, [])


    return (
        <div className='donor_page'>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-3 sidebar">
                        <AdminSidebar></AdminSidebar>
                    </div>
                    <div className="col-lg-9">
                        <div className='donor_request'>
                            <h1 className='mb-5 text-center' >ALL PATIENT</h1>
                            <table class="table">
                                <thead>
                                    <tr className='text-center'>
                                         <th scope="col">#</th>
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
                                        patient.map((patient, index) =>
                                            <tr className='text-center'>
                                                <td>{index + 1}</td>
                                                <td>{patient.patient_name}</td>
                                                <td>{patient.patient_email}</td>
                                                <td>{patient.patient_blood_group}</td>
                                                <td>{patient.patient_blood_unit}</td>
                                                <td>{patient.donor_name}</td>
                                                <td>{patient.donor_phone}</td>
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

export default AllPatient;