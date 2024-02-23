import React, { useEffect, useState } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import NavbarComponent from '../../components/common/Navbar/Navbar'
import HotelCard from '../../components/HotelCard/HotelCard'
import { getHotels } from '../../api/hotels'
import Loader from '../../components/common/Loader/Loader'
import Categories from '../../components/categories/Categories'
import { useCategory } from "../../context/categories"

const  LandingPage = () => {


  const {hotelCategory}=useCategory()
  const[hotels,setHotels]=useState([])
  const[currIndx,setCurrIndx]=useState(16)
  const [hasMore,setHasMore]=useState(true)
  const[testData,setTestData]=useState([])

  const fetchMore=()=>{

    console.log(hasMore)
    if(hotels.length>=testData.length){
      setHasMore(false);
      return;
    }
    else{
      //testdata.lenght>hotels.length

      setTimeout(()=>{

    if(hotels && hotels.length>0)
    {  setHotels(hotels.concat(testData.slice(currIndx,currIndx+16)))
      setCurrIndx(prev=>prev+16)
    }
    else{
      setHotels([])
    }
    },1000)
    }
  }

  const init=async(hotelCategory)=>{
try{
    const {data}=await getHotels(hotelCategory)

    setTestData(data)
    console.log(data)
  
    setHotels(data? data.slice(0,16):[])

  }
  catch(err){
    console.log(err)
  }
  }

  useEffect(()=>{
    
    init(hotelCategory)

  },[hotelCategory])

  return (
    <div>
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
    
    </div>
  )
}

export default LandingPage
