import React, { useEffect, useState } from 'react'
import DateSelector from '../DateSelector/DateSelector'
import './SearchStayWithDate.css'
import { useDispatch, useSelector } from 'react-redux'
import {setDestination,setGeusts,setShowSearchResult,closeSearchModal} from '../../actions/search.actions'
import {getHotels} from '../../actions/service.actions'
import { useCategory } from '../../context/categories'
import { useNavigate } from 'react-router-dom'

const SearchStayWithDate = () => {

    const dispatch =useDispatch()
    const destination=useSelector(state=>state.search.destination)
    const geusts=useSelector(state=>state.search.geusts)
    const isSearchResultOpen=useSelector(state=>state.search.isSearchResultOpen)
    const hotels=useSelector(state=>state.service.hotelByCategory)
    
    // const[hotels,setHotels]=useState([])
    const {hotelCategory}=useCategory()
    const navigate=useNavigate()

    useEffect(()=>{
      getHotels(hotelCategory)
    },[])

    const debounce=(callback,delay)=>{
        return function(...args){

            let timerId;
             
            timerId=setTimeout(()=>{
                clearTimeout(timerId)
                callback(...args);
            },delay)
        }
    }

    const handleDestinationOnChange=(e)=>{

        console.log("value is",e.target.value)
        dispatch(setDestination(e.target.value))
   }

   const handleGeustChange=(e)=>{
       debouncedGeustChange(setGeusts(e.target.value))
   }

   const handleSearchResultClick=(address)=>{
          dispatch(setDestination(address))
   }

   const handleDestinationFocus=()=>{
     dispatch(setShowSearchResult())
   }

   const handleSearchButtonClick=()=>{
    dispatch(closeSearchModal())
    navigate(`hotels/${destination}`)
   }

    const debouncedDestinationChange=debounce(handleDestinationOnChange,500)
    const debouncedGeustChange=debounce(handleGeustChange,500)

    const destinationOptions=hotels.filter(({address,city,state,country})=>{  return address.toLowerCase().includes(destination.toLowerCase())||
        city.toLowerCase().includes(destination.toLowerCase())|| state.toLowerCase().includes(destination.toLowerCase())||
        state.toLowerCase().includes(destination.toLowerCase()||country.toLowerCase().includes(destination.toLowerCase()))
    })

  return (
    <div className='destination-container'>
        <div className='destination-options d-flex align-items-center'>
            <div className='location-container'>
                <label className="label">Where</label>
                <input autoFocus onFocus={handleDestinationFocus} placeholder='search destination'
                 className="input search-dest"  defaultValue={destination }onChange={debouncedDestinationChange}/>
            </div>
            <div className="location-container">
                <label className="label">Check in</label>
                <DateSelector  type="in"/>
            </div>
            <div className="location-container">
                <label className="label">Check Out</label>
                <DateSelector  type="out"/>
            </div>
            <div className='location-container'>
                <label className="label">No of geusts</label>
                <input defaultValue={geusts} placeholder='Add Geusts' className="input search-dest" onChange={handleGeustChange}/>
            </div>
            <div className='search-container d-flex align-items-center'onClick={handleSearchButtonClick}>
                <span className='material-symbols-outlined'>search</span>
                <span>Searching</span>
            </div>
       </div>
     { isSearchResultOpen &&  <div className='search-result-container'>
        {
           destinationOptions &&  destinationOptions.map(({address,city},index)=>{
                return <p  key={index} className='p' onClick={()=>handleSearchResultClick(address)}>{address},{city}</p>
            })
        }
      </div>
      }
    </div>
  )
}

export default SearchStayWithDate
