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

const  LandingPage = () => {


  const isModalOpen=useSelector(state=>state.search.isModalOpen)

  const {hotelCategory}=useCategory()
  const[currIndx,setCurrIndx]=useState(16)
  const [hasMore,setHasMore]=useState(true)
  const data=useSelector(state=>state.service.hotelByCategory)
  const hotels=useSelector(state=>state.service.first16Hotels)
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
        {hotels && hotels.map((hotel)=> <HotelCard  key={hotel._id} hotel={hotel}/>)}
        </main>
        </InfiniteScroll>):
        (<></>)
        }
        {isModalOpen && <SearchStayWithDate/>}
    
    </div>
  )
}

export default LandingPage
