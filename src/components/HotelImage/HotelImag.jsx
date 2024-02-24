import React from 'react'
import './HotelImage.css'

const HotelImag = ({singleHotel}) => {

const{image,imageArr}=singleHotel

  return (
    <div className='hotel-image-container d-flex gap-sm'>
        <div className='primary-image-container'>
            <img  className='primary-img' src={image} alt="primary-image"/>
        </div>
        <div className='d-flex flex-wrap gap-sm'>
            { imageArr && imageArr.map((image)=>{

                return <img key={image} className='hotel-img' src={image} alt="hotel-image"/>
            })
            }
        </div>
      
    </div>
  )
}

export default HotelImag
