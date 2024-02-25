import React, { useEffect } from 'react'
import NavbarComponent from '../../components/common/Navbar/Navbar'
import { useDispatch, useSelector } from 'react-redux'
import HotelCard from '../../components/HotelCard/HotelCard'

const SearchResultPage = () => {
  const dispatch=useDispatch()
    const destination=useSelector(state=>state.search.destination)
    const hotels=useSelector(state=>state.service.hotelByCategory)

  const filteredSearchResult=hotels.filter(({city,address,state,country})=>{
    return address.toLowerCase()===destination.toLowerCase()||
        city.toLowerCase()===destination.toLowerCase()|| state.toLowerCase()===destination.toLowerCase()||
        state.toLowerCase()===destination.toLowerCase()||country.toLowerCase()===destination.toLowerCase()
  })

  return (
    <div>
        <NavbarComponent/>
        <section className='d-flex justify-content-start gap-sm' style={{padding:"7rem"}}>
          {
             filteredSearchResult ? filteredSearchResult.map((hotel)=>{
              return <HotelCard hotel={hotel} key={hotel._id}/>
             }):(
              <h3>Nothing Found</h3>
             )
          }
          </section>
      
    </div>
  )
}

export default SearchResultPage
