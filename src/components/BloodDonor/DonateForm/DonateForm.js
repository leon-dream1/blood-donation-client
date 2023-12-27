import React from 'react';
import { useContext } from 'react';

import { useForm } from "react-hook-form"
import { userContext } from '../../../App';
import './DonateFrom.css';

const DonateForm = () => {

const [user, setUser] = useContext(userContext);
const { register, handleSubmit } = useForm();

  const onSubmit = (data) => {
   
     fetch('http://localhost:5000/addDonorRequest', {
      method: 'POST',
      body: JSON.stringify({...data, date: new Date().toISOString().slice(0, 10), status: 0}),
      headers: {
         'Content-type': 'application/json; charset=UTF-8',
      }, 
     })
     .then(res => res.json())
     .then(result => {
         if(result){
            alert('You have Successfully Registered For Donate Blood. Wait for Admin To accept your Donation!!!!!.')
            document.getElementsByTagName("input").value = "";
         }
         else{
            alert('Sorry You have Already Requested For Blood Donation!!!! Wait For patients. Thank You');
            document.getElementsByTagName("input").value = "";
         }
     })
  }

    return (
        <form onSubmit={handleSubmit(onSubmit)} className='login donate_form'>
            <div class="form-group mb-4">
               <input class="form-control" {...register("Name")} defaultValue={user.name}/>
            </div>
            <div class="form-group mb-4">
               <input class="form-control"  {...register("email")}  defaultValue={user.email}/>
            </div>
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
               <input class="form-control" {...register("unit")} placeholder='Blood Unit ' required/>
            </div>
             <div class="form-group mb-4">
               <input class="form-control" {...register("phone")} placeholder='Enter Your Phone' required/>
            </div>
            <div class="form-group mb-4">
               <input class="form-control" {...register("address")} placeholder='Enter Your Address' required/>
            </div>
            <div class="form-group mb-4">
               <input className="form-control" {...register("disease")} placeholder='Mention Any disease if you have'/>
            </div>
            <input className="form-control login_button" type="submit" value="Submit"/>
        </form>
    );
};

export default DonateForm;



// create table donor
// ( 
//     donor_name varchar(20),
//     donor_email varchar(20),
//     donor_blood_group varchar(5),
//     phone int(11),
//     address varchar(20),
//     disease varchar(50),
//     donation_date date,
    
    