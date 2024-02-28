import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../Pages/landingPage/LandingPage'
import SingleHotel from '../Pages/singleHotel/SingleHotel'
import SearchResultPage from '../Pages/searchResultPage/SearchResultPage'
import Filters from '../components/filters/Filters'
import Wishlist from '../Pages/wishlist/Wishlist'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/hotels/:name/:state/:address/:id" element={<SingleHotel/>}/>
            <Route path="hotels/:address" element={<SearchResultPage/>}></Route>
            <Route path='/filters' element={<Filters/>}/> 
            <Route path='/wishlist' element={<Wishlist/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
