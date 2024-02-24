import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import {getHotelById} from '../../api/hotels'
import HotelImag from '../../components/HotelImage/HotelImag'
import NavbarComponent from '../../components/common/Navbar/Navbar'
import HotelDetails from '../../components/HotelDetails/HotelDetails'
import FinalPrice from '../../components/finalPrice/FinalPrice'

const SingleHotel = () => {
 
    const {name,state,address,id}=useParams()
    const [SingleHotel,setSingleHotel]=useState({})

    const init=async(id)=>{
        
       try{ 
        const {data}= await getHotelById(id)
        setSingleHotel(data)

    }catch(err){
        console.log(err)
    }
    }

    useEffect(()=>{
        init(id)

    },[id])

  return (
    <div>
     <NavbarComponent/> 
     <main style={{padding:"8rem 5rem 3rem 4rem"}}>
        <p style={{fontSize:"1.5rem",paddingBottom:"8px"}}>{name},{state}</p>
        <HotelImag singleHotel={SingleHotel}/>
        <div className='d-flex '>
            <HotelDetails singleHotel={SingleHotel}/>
            <FinalPrice singleHotel={SingleHotel}/>
        </div>
     </main>
    </div>
  )
}

export default SingleHotel
