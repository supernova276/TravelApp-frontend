import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setRatings } from '../../../actions/filter.actions'

const ratings=["1","2","3","4","5"]

const Ratings = () => {
const dispatch=useDispatch()
const selectedRating=useSelector(state=>state.filter.rating)

  const handleRatingClick=(rating)=>{
    dispatch(setRatings(rating))
  }
  return (
    <div className='filter-container'>
        <span className='filter-label'>Ratings</span>
        <div className='d-flex gap-lg'style={{marginTop:"2rem"}}>
            {
                ratings.map(rating=><span key={rating} className={`span-label aminity-count  star d-flex align-items-center justify-content-center 
                on-hover ${selectedRating===rating?`selected`:``}`} onClick={()=>handleRatingClick(rating)}>{rating} &up</span>)
            }

        </div>
      
    </div>
  )
}

export default Ratings
