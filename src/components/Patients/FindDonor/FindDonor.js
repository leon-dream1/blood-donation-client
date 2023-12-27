import React, { useState } from 'react';
import PatientsSidebar from '../PatientsSidebar/PatientsSidebar';
import { useForm } from "react-hook-form"
import SingleDonor from '../SingleDonor/SingleDonor';

const FindDonor = () => {
    const { register, handleSubmit } = useForm();
    const [availableDonor, setAvailableDonor] = useState([]);
    const [patientUnit, setPatientUnit] = useState();

    const onSubmit = (data) => {
        setPatientUnit({...data});
        fetch('http://localhost:5000/findDonor', {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
        })
            .then(res => res.json())
            .then(results => setAvailableDonor(results))
    }
  
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-3 sidebar">
                    <PatientsSidebar></PatientsSidebar>
                </div>
                <div className="col-lg-9 justify-content-center">
                    <h1 className='text-center mt-5'>Find Donor</h1>

                   {(availableDonor.length == 0) && <form className='container login' onSubmit={handleSubmit(onSubmit)} action="">
                        <div class="form-group mb-4">
                            <select {...register("bloodGroup")} class="form-control">
                                <option value="A">A</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B">B</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </div>
                        <div class="form-group mb-4">
                            <input class="form-control" {...register("address")} placeholder='Enter Your Address' required />
                        </div>
                        <div class="form-group mb-4">
                            <input class="form-control"  {...register("patient_unit")} placeholder='Enter unit Blood' required />
                        </div>
                        <input className="form-control login_button" type="submit" value="Submit" />
                    </form>}

                    <div className="row mt-4">
                        {
                            availableDonor.map(donor => <SingleDonor patientUnit={patientUnit} donor={donor}></SingleDonor>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FindDonor;