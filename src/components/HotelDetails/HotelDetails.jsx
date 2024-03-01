import React, { useState } from 'react'
import './HotelDetails.css'
import { useSelector } from 'react-redux'

const HotelDetails = () => {

const singleHotel=useSelector(state=>state.service.hotelById)


    const[display,setDisplay]=useState(false)

    const {hostName,hostJoinedOn,numberOfBathrooms,numberOfBeds,numberOfguest,numberOfBedrooms,ameneties,healthAndSafety,houseRules}=singleHotel

    const handleToggle=()=>{
        setDisplay(prev=>!prev)
    }

  return (
    <div className='hotel-details-container'>
        <div className='d-flex flex-column'>
            <p className='heading text-secondary'>Hosted by {hostName}, Joined on {hostJoinedOn}</p>
            <span className='sub-heading'>{numberOfguest} geusts, {numberOfBedrooms} bedroom, {numberOfBathrooms}bathroom</span>
        </div>
        <hr/>
        
        <div className='d-flex flex-column'>
        <div className='d-flex gap-sm align-items-baseline'>
            <span className="material-symbols-outlined" style={{fontSize:"1.3rem"}}>apps</span>
            <p className='heading text-secondary'>Dedicated workspace</p>
        </div>
            <span className='sub-heading'>common area with wifif well suited for working</span>
        </div>

        <div className='d-flex flex-column'>
        <div className='d-flex gap-sm align-items-baseline'>
            <span className="material-symbols-outlined" style={{fontSize:"1.3rem"}}>apps</span>
            <p className='heading text-secondary'>Great location</p>
        </div>
            <span className='sub-heading'>common area with wifif well suited for working</span>
        </div>

        <div className='d-flex gap-sm align-items-baseline'>
            <span className="material-symbols-outlined" style={{fontSize:"1.3rem"}}>apps</span>
            <p className='heading text-secondary'>free cancelation</p>
        </div>
        <hr/>

       { ameneties &&  <div className='d-flex flex-column'>
        <p className='heading text-secondary'>what this place offers 
        <span class="material-symbols-outlined" onClick={handleToggle} style={{cursor:"pointer"}}> expand_more</span></p>
        
        <div className='list'>

            {
               display && ameneties.map((offer,index)=>{
                    return  <div className='d-flex gap-sm align-items-baseline' key={index}>
                    <span className="material-symbols-outlined" style={{fontSize:"1.3rem"}}>apps</span>
                    <p className='sub-heading'>{offer}</p>
                </div>
                })
            }
        </div>

        </div>
}
       { healthAndSafety && <div className='d-flex flex-column'>
        <p className='heading text-secondary'>Health And Safety
        <span class="material-symbols-outlined" onClick={handleToggle} style={{cursor:"pointer"}}> expand_more</span></p>
        
        
        <div className='list'>

            {
                 healthAndSafety.map((safety,index)=>{
                    return  <div  className='d-flex gap-sm align-items-baseline' key={index}>
                    <span className="material-symbols-outlined" style={{fontSize:"1.3rem"}}>apps</span>
                    <p className='sub-heading'>{safety}</p>
                </div>
                })
            }
        </div>



        </div>}

        { houseRules &&  <div className='d-flex flex-column'>
        <p className='heading text-secondary'>what this place offers
        <span className="material-symbols-outlined" onClick={handleToggle} style={{cursor:"pointer"}}> expand_more</span></p>
        
        <div className='list'>

            {
                houseRules.map((rules,index)=>{
                    return  <div className='d-flex gap-sm align-items-baseline' key={index}>
                    <span className="material-symbols-outlined" style={{fontSize:"1.3rem"}}>apps</span>
                    <p className='sub-heading'>{rules}</p>
                </div>
                })
            }
        </div>

        </div>
}

    </div>
  )
}

export default HotelDetails
