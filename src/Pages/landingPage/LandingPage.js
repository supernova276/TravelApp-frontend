import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NavbarComponent from '../../components/common/Navbar/Navbar'
import HotelCard from '../../components/HotelCard/HotelCard'
import { getHotels } from '../../actions/service.actions'
import Loader from '../../components/common/Loader/Loader'
import Categories from '../../components/categories/Categories'
import { useCategory } from "../../context/categories"
import { useDispatch, useSelector } from 'react-redux'
import SearchStayWithDate from '../../components/SearchStayWithDate/SearchStayWithDate'
import {getHotelsByRoomsAndBeds} from '../../utils/rooms-beds'
import { getHotelsByPropertyType } from '../../utils/property-type'
import { getHotelsByRatings } from '../../utils/ratings'
import {getHotelsByCancelation} from '../../utils/hotels-cancel'
import AuthModal from '../../components/AuthModal/AuthModal'
import LogOutModal from '../../components/logoutModal/LogOutModal'
import Toast from '../../components/toast/Toast'

const  LandingPage = () => {


  const isModalOpen=useSelector(state=>state.search.isModalOpen)
  const priceRange=useSelector(state=>state.filter.priceRange)

  const {hotelCategory}=useCategory()
  const[currIndx,setCurrIndx]=useState(16)
  const [hasMore,setHasMore]=useState(true)
  const data=useSelector(state=>state.service.hotelByCategory)
  const hotels=useSelector(state=>state.service.first16Hotels)
  const numberOfBathrooms=useSelector(state=>state.filter.numberOfBathrooms)
  const numberOfBeds=useSelector(state=>state.filter.numberOfBeds)
  const numberOfRooms=useSelector(state=>state.filter.numberOfRooms)
  const propType=useSelector(state=>state.filter.PropertyType)
  const rating=useSelector(state=>state.filter.rating)
  const isCancelable=useSelector(state=>state.filter.isCancelable)
  const isAuthModalOpen=useSelector(state=>state.auth.isAuthModalOpen)
  const isLogoutModalOpen=useSelector(state=>state.auth.isLogoutModalOpen)
  const addToast=useSelector(state=>state.auth.addToast)
  const removeToast=useSelector(state=>state.auth.removeToast)
  const dispatch=useDispatch()

  const fetchMore=()=>{

    if(hotels.length>=data.length){
      setHasMore(false);
      return;
    }
    else{
      //testdata.lenght>hotels.length

      // setTimeout(()=>{

    if(hotels && hotels.length>0)
    {  hotels.concat(data.slice(currIndx,currIndx+16))
      setCurrIndx(prev=>prev+16)
    }
    else{
      hotels=[]
    }
    // },1000)
    }
  }
  useEffect(()=>{
    
    dispatch(getHotels(hotelCategory))
  },[hotelCategory])

  const filteredData=data .filter((hotel)=> hotel.price>=priceRange[0] && hotel.price<=priceRange[1])
  const filteredAmeneties=getHotelsByRoomsAndBeds(filteredData,numberOfBathrooms,numberOfBeds,numberOfRooms)
  const filteredByPropType=getHotelsByPropertyType(filteredAmeneties,propType)
  const filteredByRatings=getHotelsByRatings(filteredByPropType,rating)
  const filteredByCancelation=getHotelsByCancelation(filteredByRatings,isCancelable)
  

  return (
    <div style={{position:"relative"}}>
        <NavbarComponent/>
        <Categories/>
       { 
       hotels &&  hotels.length >0 ?
      ( <InfiniteScroll
        dataLength={hotels.length}
        next={fetchMore}
        hasMore={hasMore}
        loader={hotels.length>0 && <Loader/>}
        endMessage={<p>you have reached the end!</p>}
        >
        <main style={{padding:"10rem 5rem 3rem 4rem",gap:"5rem"}} className='d-flex flex-wrap'>
        {filteredByCancelation && filteredByCancelation.map((hotel)=> <HotelCard  key={hotel._id} hotel={hotel}/>)}
        </main>
        </InfiniteScroll>):
        (<></>)
        }
        {isModalOpen && <SearchStayWithDate/>}
        {isAuthModalOpen && <AuthModal/>}
        {isLogoutModalOpen && <LogOutModal/>}
        {removeToast && <Toast/>}
        {addToast && <Toast/>}
    
    </div>
  )
}

export default LandingPage
