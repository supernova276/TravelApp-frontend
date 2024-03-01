import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { getHotelById } from '../../actions/service.actions'
import HotelImag from '../../components/HotelImage/HotelImag'
import NavbarComponent from '../../components/common/Navbar/Navbar'
import HotelDetails from '../../components/HotelDetails/HotelDetails'
import FinalPrice from '../../components/finalPrice/FinalPrice'
import { useDispatch, useSelector } from 'react-redux'

const SingleHotel = () => {

  const { name, state, address, id } = useParams()

  const dispatch = useDispatch()
  useEffect(() => {

    dispatch(getHotelById(id))

  }, [id])

  return (
    <div>
      <NavbarComponent />
      <main style={{ padding: "8rem 5rem 3rem 4rem" }}>
        <p style={{ fontSize: "1.5rem", paddingBottom: "8px" }}>{name},{state}</p>
        <HotelImag />
        <div className='d-flex '>
          <HotelDetails />
          <FinalPrice/>
        </div>
      </main>
    </div>
  )
}

export default SingleHotel
