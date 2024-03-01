import React from 'react'
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router';

const OrderSummary = () => {
    const navigate=useNavigate()

    const handleConfirm=()=>{
        navigate("/")
    }
  return (
    <div className='d-flex align-items-center justify-content-center'>
    
    <div className='d-flex flex-column' style={{width:"15rem",height:"20rem",padding:"1rem"}}>
    <h2>ORDER SUCCESSFUL</h2>
    <Button variant="info" style={{width:"100%"}} onClick={handleConfirm} >CONFIRM</Button>
    </div>
    </div>
  )
}

export default OrderSummary
