import React from 'react'
import './FreeCancel.css'
import { useDispatch, useSelector } from 'react-redux'
import {checkCancelable} from '../../../actions/filter.actions'

const FreeCancel = () => {

    const dispatch=useDispatch()
    const isCancelable=useSelector(state=>state.filter.isCancelable)
    const handleCancelChange=(e)=>{
        dispatch(checkCancelable(e.target.checked))
    }
    return (
        <div className='filter-container'>
            <div className='d-flex align-items-baseline gap-lg'>
                <span className='filter-label'>Free Cancelation</span>
                <label className="slider">
                    <input type="checkbox" id="slider-checkbox" onChange={handleCancelChange} 
                    value={isCancelable}
                    checked={isCancelable}/>
                        <label htmlFor="slider-checkbox" className="slider-label"></label>
                </label>
            </div>

        </div>
    )
}

export default FreeCancel
