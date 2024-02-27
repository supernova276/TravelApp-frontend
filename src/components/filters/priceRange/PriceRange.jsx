import React from 'react'

import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import { useDispatch, useSelector } from 'react-redux';
import { setMaxPrice, setMinPrice } from '../../../actions/filter.actions';

function valuetext(value) {
  return `${value}`;
}
const minDifference=500

const PriceRange=()=> {

  const priceRange=useSelector(state=>state.filter.priceRange)
  const dispatch=useDispatch()
  
  const handlePriceChange=(event,newValue,activeThumb)=>{

    if(!Array.isArray(newValue))return;
    
    if(activeThumb===0){
      dispatch(setMinPrice(newValue,priceRange,minDifference))
    }
    else{
      dispatch(setMaxPrice(newValue,priceRange,minDifference))
    }
  }
  
  return (
  <div className='filter-container'>
    <span className='filter-label'>Price Range</span>
    <Box>
      <Slider sx={{color:"#38bdf8"}}
      className='price-range'
        style={{width:"90%", color:"#38bdf8"}}
        getAriaLabel={() => 'Minimum difference'}
        value={priceRange}
        onChange={handlePriceChange}
        valueLabelDisplay="on"
        getAriaValueText={valuetext}
        min={100}
        max={25000}
        disableSwap
      />
    </Box>

  </div>
  );
}
export default PriceRange