

import React from 'react';
import { useTimeout,useEffect,useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToast } from '../../actions/auth.actions';
import './Toast.css'
let message=""
const duration=3000

const Toast = () => {

    console.log("inside toast modal")
    // const dispatch=useDispatch()
    const token=useSelector(state=>state.auth.token)
    const [visible, setVisible] = useState(true);
    const isToast=useSelector(state=>state.auth.isToast)
    message=token?"logged in":"logged out"
  
    useEffect(() => {
      const timer = setTimeout(() => {
        setVisible(false);
        // dispatch(setToast())
      }, duration);
  
      return () => clearTimeout(timer);
    }, []);
  
    return (
      <div className={`toast ${visible ? 'show' : ''} d-flex justify-content-center`} role="alert" aria-live="assertive" aria-atomic="true">
        <div className="toast-header">
          {message}
        </div>
      </div>
    );
  };
  
  export default Toast;