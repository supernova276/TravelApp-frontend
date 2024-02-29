import React from 'react'
import Button from 'react-bootstrap/Button';
import './auth.css'
import { useDispatch, useSelector } from 'react-redux';
import { setMobileNumber, setPassword,clearUserData } from '../actions/auth.actions';
import { debounce } from '@mui/material';
import {LoginHandler} from '../actions/authService-actions'
import {setAuthModal} from '../actions/auth.actions'


const AuthSignup = () => {

    const dispatch=useDispatch()

    const  number=useSelector(state=>state.auth.number)
    const password=useSelector(state=>state.auth.password)

    const handleMobileNumber=(e)=>{
        console.log(e.target.value)
        dispatch(setMobileNumber(e.target.value))
    }
    const handlePassword=(e)=>{
           dispatch(setPassword(e.target.value))
    }

    const debouncedMobileNumber=debounce(handleMobileNumber,500)
    const debouncedPassword=debounce(handlePassword,500)

    const handleLogin=async(e)=>{
        e.preventDefault()
        const token=  await dispatch(LoginHandler(number,password))
        if(token){

           dispatch(setAuthModal())
        }
        dispatch(clearUserData())
    }
    const handleTestLogin=async(e)=>{
        e.preventDefault();
        const token= await dispatch(LoginHandler("7867345998","Rakul@123"))
        if(token){

            dispatch(setAuthModal())
         }
         dispatch(clearUserData())
    }

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
            required
            onChange={debouncedMobileNumber}
           defaultValue={number}
            />
        </div>

        <div className='d-flex  flex-column lb-in-container'>
            <label className='auth-label'>
                Password <span className='asterik'>*</span>{" "}
            </label>
            <input className='auth-input' type='password' placeholder='Enter Password' required  onChange={debouncedPassword} defaultValue={password}/>
        </div>
        <button className='button btn-auth flex-sm-grow-1'onClick={handleLogin}>Login</button>
    </form>
    <div className='cta'>
    <div className='d-flex flex-column align-items-center test-btn'>
    <button className='button btn-auth flex-sm-grow-1' onClick={handleTestLogin}>login with test credentials</button>
    </div>
    </div>
   </div>
  )
}

export default AuthSignup
