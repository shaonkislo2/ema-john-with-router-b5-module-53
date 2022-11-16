import React from 'react';
import './SignUp.css'
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from './../../firebase.init';



const SignUp = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    }

    const handlePAsswordBlur = event =>{
        setPassword(event.target.value);
    }

    const handleConfirmPAsswordBlur = event =>{
        setConfirmPassword(event.target.value);
    }

    if(user){
        navigate('/shop');
    }

    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError('Your two passwords did not match');
            return;
        }
        if(password.length < 6){
            setError('password must be 6 characters or longer');
            return;
        }
        createUserWithEmailAndPassword(email, password)
    }

    return (
        <div className='form-container'>
        <div>
        <h2 className='form-title'>Sign Up</h2>
         <form onSubmit={handleCreateUser}>
         <div className="input-group">
             <label htmlFor="email">Email</label>
             <input onBlur={handleEmailBlur} type="email" name="email" id="" required />
         </div>
         <div className="input-group">
             <label htmlFor="password">Password</label>
             <input onBlur={handlePAsswordBlur} type="password" name="password" id="" required />             
         </div>
         <div className="input-group">
             <label htmlFor="confirm-password">Confirm Password</label>
             <input onBlur={handleConfirmPAsswordBlur} type="password" name="confirm-password" id="" required />             
         </div>
         <input className="form-submit" type="submit" value="Sign Up" />
         <p style={{color:'red'}}>{error}</p>
         </form>
         <p>
            Already Have an Account? <Link className='form-link' to='/login'>Login</Link> 
         </p>
        </div>
     </div>
    );
};

export default SignUp;
