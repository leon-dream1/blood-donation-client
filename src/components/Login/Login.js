import React, { useContext, useState } from 'react';
import './Login.css';
import Navbar from '../Home/Navbar/Navbar';
import { useNavigate } from 'react-router-dom';
import { userContext } from '../../App';
import { Toaster, toast } from 'alert';

const Login = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useContext(userContext);

    const navigate = useNavigate();
    let userInfo = { ...user };
    const handleInput = (e) => {

        if (e.target.name == 'name') {
            userInfo.name = e.target.value;
        }
        else if (e.target.name == 'email') {
            userInfo.email = e.target.value;
        } else if (e.target.name == 'password') {
            userInfo.password = e.target.value;
        }
        else if (e.target.name == 'confirmPassword') {
            if (userInfo.password != (e.target.value)) {
                userInfo = {};
            }
        }

        setUser(userInfo);
    }

    const handleChange = (e) => {
        const userRoleInfo = {...user};
        userRoleInfo.role = e.target.value;        
        setUser(userRoleInfo);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        
        if (newUser) {
            if (user.password) {
                fetch('http://localhost:5000/addUser', {
                    method: 'POST',
                    body: JSON.stringify(user),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result) {
                            toast.success("Account Created Successfully");
                            navigate(`/${user.role}Dashboard`);
                        }
                        else {
                            alert('Email is Already registered');
                        }
                    })

            }
            else {
                toast.error('Password Does not match');
            }
        }

        else {
            if (user.email && user.password) {
                if(user.email == 'admin@gmail.com' && user.password == 'admin'){
                    alert('Log In SuccessFully');
                    navigate('/adminDashboard');
                }
                else{
                    fetch('http://localhost:5000/verifyUser', {
                    method: 'POST',
                    body: JSON.stringify({ email: user.email, password: user.password }),
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                })
                    .then(res => res.json())
                    .then(result => {
                        if (result.length > 0) {
                            //const role = result[0].role;
                            //alert(role);
                            alert('Log In SuccessFully');
                            navigate(`/${result[0].role}Dashboard`);
                           setUser(result[0]);
                        }
                        else {
                            toast.error('Password Does not match');
                        }

                    })
                }
            }

        }
    }
    return (
        <div>
            <Navbar></Navbar>
            <div className="login container">
            <Toaster position='top-center'/>
                <form onSubmit={handleSubmit}>
                    {newUser && <div class="form-group mb-4">
                        <input type="text" name='name' onBlur={handleInput} class="form-control" id="exampleInputEmail1" placeholder="Enter Your Name" required />
                    </div>}
                    <div class="form-group mb-4">
                        <input type="email" name='email' onBlur={handleInput} class="form-control" id="exampleInputEmail1" placeholder="Enter Your email" required />
                    </div>
                    <div class="form-group mb-4">
                        <input type="password" class="form-control" onBlur={handleInput} name='password' id="exampleInputEmail1" placeholder="Enter Your password" required />
                    </div>
                    {newUser && <div class="form-group mb-4">
                        <input type="password" class="form-control" onBlur={handleInput} name='confirmPassword' id="exampleInputPassword1" placeholder="Confirm Password" required />
                    </div>}
                    {newUser && <div class="form-group mb-4">
                        <select onBlur={handleChange} class="form-control" id="exampleFormControlSelect2">
                            <option value='Donor'>Donor</option>
                            <option value ='Patient'>Patient</option>
                        </select>
                    </div>}
                    {!newUser ? <input type="submit" value="Log in" className='login_button' />
                        : <input type="submit" value="Create Account" className='login_button' />
                    }

                    {newUser ? <span style={{ display: 'inline-block', marginTop: '20px', marginRight: '10px' }}>Already Have an Account?</span> : <span style={{ display: 'inline-block', marginTop: '20px', marginRight: '10px' }}>Don't have an Account?</span>}
                    {newUser ? <a onClick={() => setNewUser(false)} className='create_lg_btn'>Log in</a> : <a className='create_lg_btn' onClick={() => setNewUser(true)}>Create Account</a>}
                </form>
            </div>
        </div>
    );
};

export default Login;