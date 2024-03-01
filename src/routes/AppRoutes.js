import React from 'react'
import { Route,Routes } from 'react-router-dom'
import LandingPage from '../Pages/landingPage/LandingPage'
import SingleHotel from '../Pages/singleHotel/SingleHotel'
import SearchResultPage from '../Pages/searchResultPage/SearchResultPage'
import Filters from '../components/filters/Filters'
import Wishlist from '../Pages/wishlist/Wishlist'
import Payment from '../Pages/payment/Paymnet'
import OrderSummary from '../Pages/orderSummary/OrderSummary'

const AppRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<LandingPage/>} />
            <Route path="/hotels/:name/:state/:address/:id" element={<SingleHotel/>}/>
            <Route path="hotels/:address" element={<SearchResultPage/>}></Route>
            <Route path='/filters' element={<Filters/>}/> 
            <Route path='/wishlist' element={<Wishlist/>}/>
            <Route path='/confirmBooking/:id' element={<Payment/>}/>
            <Route path='/order-summary' element={<OrderSummary/>}/>
        </Routes>
    </div>
  )
}

export default AppRoutes
