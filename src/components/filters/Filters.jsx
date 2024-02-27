import React from 'react'
import Button from 'react-bootstrap/Button';
import './Filters.css'
import PriceRange from './priceRange/PriceRange'
import RoomsAndBeds from './roomsAndbBeds/RoomsAndBeds'
import PropertyType from './propertyType/PropertyType'
import Ratings from './ratings/Ratings'
import FreeCancel from './freeCancel/FreeCancel'
import { useDispatch } from 'react-redux';
import { setModalState,clearAll } from '../../actions/filter.actions';

const Filters = () => {
  const dispatch = useDispatch()

  const handleCloseClick = () => {
    dispatch(setModalState())
  }

  const handleClearAll=()=>{
    dispatch(clearAll())
  }

  return (
    <div className='filter-modal d-flex justify-content-center align-items-center'>
      <div className='d-flex flex-column  filter-page shadow'>

        <div className='filter-container d-flex justify-content-between'>
          <span className='filter-label'>Filter</span>
          <button className=' d-flex justify-content-center align-items-center close-btn' style={{ marginRight: "0rem"}} onClick={handleCloseClick}>
            <span className="material-symbols-outlined" style={{fontSize:"2rem"}}>
              close
            </span>
          </button>
        </div>

        <div>
          <PriceRange className='price-range' />
        </div>

        <div>
          <RoomsAndBeds className='price-range' />
        </div>

        <div>
          <PropertyType className='' />
        </div>

        <div>
          <Ratings />
        </div>

        <div>
          <FreeCancel />
        </div>

        <div className='d-flex align-center justify-content-between'>
          <Button variant="light" className='btn-last' onClick={handleClearAll}>Clear All</Button>
          <Button variant="info" className='btn-last' onClick={handleCloseClick}>Apply</Button>
        </div>

      </div>

    </div>
  )
}

export default Filters
