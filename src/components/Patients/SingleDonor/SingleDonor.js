import React, { useContext } from 'react';
import { userContext } from '../../../App';

const SingleDonor = (props) => {
    const [user, setUser] = useContext(userContext);

const {donor_name, donor_blood_group,donor_email, donor_phone, unit} = props.donor;
const {bloodGroup, address, patient_unit}  = props.patientUnit;


const handleClick = (donor_name, donor_phone) => {
   const data = {donor_name, donor_phone, patient_name: user.name, patient_email: user.email, patient_unit, bloodGroup, address};

   fetch('http://localhost:5000/addPatientRequest',{
    method:'POST', 
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json; charset=UTF-8',
    },
   })
   .then(res => res.json())
   .then(result => {
    if(result){
        alert('You have Successfully Registered For Blood Request. Wait for Admin To accept your Request!!!!!.')
        document.getElementsByTagName("input").value = "";
     }
     else{
        alert('Sorry You have Already Requested For Blood !!!! Wait For Donor. Thank You!!!');
        document.getElementsByTagName("input").value = "";
     }
   })
}

    return (
        <div className='col-lg-4'>
            <div className="available_blood text-center">
                <h4>Name: {donor_name}</h4>
                <h6>Email: {donor_email}</h6>
                <h6>Blood-Group: {donor_blood_group}</h6>
                <h6>Phone: {donor_phone}</h6>
                <button onClick={()=>handleClick(`${donor_name}`,`${donor_phone}`)} style={{background:"green", color:'white', marginTop:'10px', border:'none'}}>Request</button>
            </div>
        </div>
    );
};

export default SingleDonor;