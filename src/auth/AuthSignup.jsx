import React from 'react'
import Button from 'react-bootstrap/Button';
import  './auth.css'
import { useDispatch ,useSelector} from 'react-redux';
import { setConfirmPassword, setEmail, setMobileNumber, setName, setPassword,clearUserData } from '../actions/auth.actions';
import {signupHandler} from '../actions/authService-actions'
import { debounce } from '@mui/material';
import AuthModal from '../components/AuthModal/AuthModal';

const AuthLogin = () => {

    const dispatch=useDispatch()

    const  number=useSelector(state=>state.auth.number)
    const name=useSelector(state=>state.auth.name)
    const email=useSelector(state=>state.auth.email)
    const password=useSelector(state=>state.auth.password)
    const confirmPassword=useSelector(state=>state.auth.confirmPassword)


    const handleEmail=(e)=>{
        dispatch(setEmail(e.target.value))
    }
    const handleName=(e)=>{
        dispatch(setName(e.target.value))
    }

    const handlePassword=(e)=>{
        dispatch(setPassword(e.target.value))
    }

    const handleMobileNumber=(e)=>{
        dispatch(setMobileNumber(e.target.value))
    }

    const handleConfirmPassword=(e)=>{
        dispatch(setConfirmPassword(e.target.value))
    }

    const handleSubmit=(e)=>{
        e.preventDefault()
        dispatch(signupHandler(number,name,email,password,confirmPassword))
        dispatch(clearUserData())
        dispatch(AuthModal())
    }

    const debouncedEmail=debounce(handleEmail,500)
    const debouncedMobileNumber=debounce(handleMobileNumber,500)
    const debouncedPassword=debounce(handlePassword,500)
    const debouncedName=debounce(handleName,500)
    const debouncedConfirmPassword=debounce(handleConfirmPassword,500)

  return (
   <div className='auth-container'>
    <form className='d-flex flex-column align-items-center'>
        <div className='d-flex  flex-column lb-in-container'>
            <label className='auth-label'>
                Mobile Number <span className='asterik'>*</span>{" "}
            </label>
            <input 
            className='auth-input'
            maxLength="10"
            placeholder='Enter Mobile Number'
            type='number'
            required
            onChange={debouncedMobileNumber}
            defaultValue={number}
            />
        </div>
        <div className='d-flex  flex-column lb-in-container'>
            <label className='auth-label'>
                Name <span className='asterik'>*</span>{" "}
            </label>
            <input 
            className='auth-input'
            placeholder='Enter Name'
            type='text'
            required
            onChange={debouncedName}
            defaultValue={name}
            />
        </div>

        <div className='d-flex  flex-column lb-in-container'>
            <label className='auth-label'>
                Email <span className='asterik'>*</span>{" "}
            </label>
            <input 
            className='auth-input'
            placeholder='Enter Email'
            type='email'
            required
            onChange={debouncedEmail}
            defaultValue={email}
            />
        </div>

        <div className='d-flex  flex-column lb-in-container'>
            <label className='auth-label'>
                Password <span className='asterik'>*</span>{" "}
            </label>
            <input className='auth-input' type='password' placeholder='Enter Password' required
            onChange={debouncedPassword} defaultValue={password} />
        </div>
        <div className='d-flex  flex-column lb-in-container'>
            <label className='auth-label'>
               Confirm Password <span className='asterik'>*</span>{" "}
            </label>
            <input className='auth-input' type='password' placeholder='Enter Password' required
            onChange={debouncedConfirmPassword} defaultValue={confirmPassword} />
        </div>
        <button className='button btn-login flex-sm-grow-1' onClick={handleSubmit}>Submit</button>
    </form>
   </div>
  )
}

export default AuthLogin
