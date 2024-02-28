import React from 'react'
import NavbarComponent from '../../components/common/Navbar/Navbar'
import HotelCard from '../../components/HotelCard/HotelCard'
import { useSelector } from 'react-redux'

const Wishlist = () => {

  const wishlist=useSelector(state=>state.wishlist.wishList)
  return (
    <div>

    <div style={{position:"fixed",top:0}}>
    <NavbarComponent/>
    </div>

    <h2 style={{fontSize: "3rem",padding:"5rem 5rem 0rem 4rem",color:"#707070"}} className='d-flex justify-content-center'>your wishlist</h2>

    <section style={{padding:"5rem 5rem 3rem 4rem",gap:"5rem"}} className='d-flex flex-wrap'>
      {
       wishlist ?  wishlist.map(hotel=><HotelCard key={hotel._id} hotel={hotel}/>):
       <h2 style={{fontSize: "3rem",padding:"5rem 5rem 0rem 4rem",color:"#d2d2d2"}} className='d-flex justify-content-center'>Nothing 
       to be found</h2>
      }
    </section>
      
    </div>
  )
}

export default Wishlist
