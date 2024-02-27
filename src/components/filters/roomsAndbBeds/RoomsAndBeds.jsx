import React from 'react'
import '../Filters.css'
import { useDispatch, useSelector } from 'react-redux'
import { setNumberOfBathrooms, setNumberOfBeds, setNumberOfROOMS } from '../../../actions/filter.actions'


const numberOfAmeneties=["Any","1","2","3","4","5"]
const RoomsAndBeds = () => {

     const numberOfBathrooms=useSelector(state=>state.filter.numberOfBathrooms)
     const numberOfBeds=useSelector(state=>state.filter.numberOfBeds)
     const numberOfRooms=useSelector(state=>state.filter.numberOfRooms)

const dispatch=useDispatch()
     const handleBedroomClick=(number)=>{
           dispatch(setNumberOfROOMS(number))
     }
     const handleBedClick=(number)=>{
          dispatch(setNumberOfBeds(number))
     }
     const handleBathroomClick=(number)=>{
          dispatch(setNumberOfBathrooms(number))
     }
  return (
    <div className='filter-container'>
         <span className='filter-label'>Rooms And Beds</span>
         <div className='d-flex flex-row'style={{marginTop:"2rem"}}>
         <div className='d-flex flex-column gap-sm align-item-center'>
            <span className='span-label 'style={{marginBottom:"1.5rem"}}>Bedrooms</span>
            <span className='span-label 'style={{marginBottom:"1.5rem"}}>Beds</span>
            <span className='span-label 'style={{marginBottom:"1.5rem"}}>Bathrooms</span>
        </div>

        <div className='d-flex flex-column gap-sm align-items-center'style={{marginLeft:"1.5rem"}}>
       <div className='d-flex '>
        {
             numberOfAmeneties.map((number)=> <span className={`span-label aminity-count d-flex justify-content-center on-hover 
             ${numberOfRooms.toString()===number?`selected`:``}`} key={number}
             onClick={()=>handleBedroomClick(number)}>{number}</span>)
          }
       </div>
       <div className='d-flex '>
        {
             numberOfAmeneties.map((number)=><span className={`span-label aminity-count d-flex justify-content-center on-hover 
             ${numberOfBeds.toString()===number?`selected`:``}`}
             key={number}
             onClick={()=>handleBedClick(number)}>{number}</span>)
        }
       </div>
       <div className='d-flex'>
        {
             numberOfAmeneties.map((number)=><span className={`span-label aminity-count d-flex justify-content-center on-hover 
             ${numberOfBathrooms.toString()===number?`selected`:``}`}
             key={number}
             onClick={()=>handleBathroomClick(number)}>{number}</span>)
        }
       </div>
        </div>


         </div>

    </div>
  )
}

export default RoomsAndBeds
