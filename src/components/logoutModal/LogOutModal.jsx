import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router'
import {clearUserData, setAuthModal, setLogoutModal,removeToken,setName, removeToast} from '../../actions/auth.actions'
import './LogOutModal.css'

const LogOutModal = () => {

    const navigate=useNavigate()
    const dispatch=useDispatch()

    const token=useSelector(state=>state.auth.token)

    const handleWishlistClick=()=>{

       navigate('/wishlist')
    }
    const handleLogoutClick=()=>{
     
        if(token)
        {
        dispatch(clearUserData())
        dispatch(removeToast())
        dispatch(removeToken())
        dispatch(setLogoutModal())
        dispatch(setAuthModal())
    }
    

    }
    const handleCloseClick=()=>{
        dispatch(setLogoutModal())
    }
  return (
    <div className='logout-modal-container d-flex flex-column align-items-center'>

    <div className=' d-flex justify-content-end' style={{width:"100%"}}>
    <button className='button' onClick={handleCloseClick}>
    <span className=" icon material-symbols-outlined">
              close
            </span>
    </button>
    </div>
    <span className='logout-modal-btn' onClick={handleWishlistClick}>wishlist</span>
    <span className='logout-modal-btn' onClick={handleLogoutClick}>logout</span>

    </div>
  )
}

export default LogOutModal
