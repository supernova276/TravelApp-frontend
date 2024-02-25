import React, { useState } from 'react'
import DatePicker from "react-datepicker"
import "react-datepicker/dist/react-datepicker.css";
import "./DateSelector.css"
import { useDispatch, useSelector } from 'react-redux';
import { setDate,setDateFocus } from '../../actions/search.actions';


const DateSelector = ({type}) => {

  const[currDate,setCurrDate]=useState(new Date())
  const checkinDate=useSelector((state=>state.search.checkInDate))
  const checkoutDate=useSelector((state=>state.search.checkOutDate))
  const dispatch=useDispatch()

  const handleDateChange=(date)=>{
     dispatch(setDate(type,date))
  }

  const handleDateFocus=()=>{
    dispatch(setDateFocus())
  }

  return (
    <>
    <DatePicker 
    selected={type==="in"?checkinDate:checkoutDate}  
    onChange={date=>handleDateChange(date)}
    className='search-dest input '
    dateFormat={"dd/MM/yyyy"}
    placeholderText="Add dates"
    onFocus={handleDateFocus}
    closeOnScroll={true}/>
    </>
  )
}

export default DateSelector
