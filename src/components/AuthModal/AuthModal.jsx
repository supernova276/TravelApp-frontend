import React from 'react'
import AuthLogin from '../../auth/AuthLogin'
import AuthSignup from '../../auth/AuthSignup'
import './AuthModal.css'
import { setAuthModal, setSelectedTabLogin,setSelectedTabSignup } from '../../actions/auth.actions';
import { useDispatch, useSelector } from 'react-redux';

const AuthModal = () => {

    const dispatch=useDispatch()
    const tab=useSelector(state=>state.auth.selectedTab)

    const handleLoginClick=()=>{
        dispatch(setSelectedTabLogin())
    }

    const handleSignupClick=()=>{

        dispatch(setSelectedTabSignup())
    }

    const handleCloseClick=()=>{
        dispatch(setAuthModal())
    }

  return (
    <div className='auth-modal-container'>
        <div className='auth-modal'>
            <div className='d-flex justify-content-center shadow'style={{width:"30rem"}}>
                <button className={`button btn-auth flex-sm-grow-1 ${tab==='login'?`btn-selected`:``}`}onClick={handleLoginClick}>Login</button>
                <button className={`button btn-auth flex-sm-grow-1 ${tab==='signup'?`btn-selected`:``}`}onClick={handleSignupClick}>Signup</button>
                <button className='button btn-auth flex-sm-grow-1' onClick={handleCloseClick}>
            <span className="material-symbols-outlined">
              close
            </span>
            </button>
            </div>
        </div>

        {tab==="signup"?<AuthSignup/>:<AuthLogin/> }
      
    </div>
  )
}

export default AuthModal
