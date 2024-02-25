import React from 'react'
import "./FinalPrice.css"
import { useDispatch, useSelector } from 'react-redux'
import DateSelector from '../DateSelector/DateSelector'
import { setGeusts } from '../../actions/search.actions'

const FinalPrice = () => {

    const singleHotel=useSelector(state=>state.service.hotelById)
    const geusts=useSelector(state=>state.search.geusts)
    const dispatch=useDispatch()

    const handleGeustChange=(e)=>{
         dispatch(setGeusts(e.target.value))
    }

    const{price,rating}=singleHotel
  return (
    <div className='price-details-container d-flex flex-column gap-sm shadow'>
        <div className='price-rating d-flex align-items-center justify-content-between'>
            <p>
                <span className='fs-bold fs-large'>Rs. {price} night</span>
                </p>
            <span className='d-flex rating align-items-center'>
            <span className='material-symbols-outlined'>star</span>\<span>{rating}</span>
            </span>
        </div>
        <div className='d-flex flex-row'>
                <div className='checkin loc-container'>
                    <label className='label'>check in</label>
                    <DateSelector type="in"/>
                </div>
                <div className='checkin loc-container'>
                    <label className='label'>check Out</label>
                    <DateSelector type="out"/>
                </div>
        </div>
        <div className='d-flex flex-column  geusts gutter-sm'>
                <p>GEUSTS</p>
                {
                    geusts<=0?(<input className='geust-count-input' placeholder='Add Geusts'value={geusts} type="number" onChange={handleGeustChange}/>):
                    <span>{geusts} geusts</span>
                }
        </div>

        <div className='d-flex justify-content-center'>
            <button className='btn-reserve'>Reserve</button>
        </div>

        <div className='price-distribution d-flex flex-column'>
            <div className='final-price d-flex align-items-center justify-content-between'>
                <span className="span">Rs. {price} X 2 nights</span>
                <span className="span">Rs {price*2}</span>
            </div>
            <div className='final-price d-flex align-items-center justify-content-between'>
                <span className="span">service feed</span>
                <span className="span">Rs 200</span>
            </div>
            {/* <hr className='reserve-hr'/> */}
            <div className='final-price d-flex align-items-center justify-content-between'>
                <span className="span">Total</span>
                <span className="span">Rs 5200</span>
            </div>

        </div>
      
    </div>
  )
}

export default FinalPrice
