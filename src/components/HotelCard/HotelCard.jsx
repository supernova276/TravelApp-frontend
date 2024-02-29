import { useNavigate } from "react-router"
import './HotelCard.css'
import { useDispatch, useSelector } from "react-redux"
import {addToWishlist, deleteFromWishlist} from "../../actions/wishlist.actions"
import { useState } from "react"
import { setAuthModal } from "../../actions/auth.actions"

const HotelCard = ({hotel}) => {

  const { _id,name,image,address,state,rating,price}=hotel
  const [heartClick,setHeartClick]=useState(false)
  const navigate=useNavigate()
  const dispatch=useDispatch()
  const wishlist=useSelector(state=>state.wishlist.wishList)
  const token=useSelector(state=>state.auth.token)

  const handleHotelCardClick=()=>{

   navigate(`/hotels/${name}/${state}/${address}/${_id}`)

  }

  const handleWishlist=()=>{
 console.log("value of token is",token)
   if(token)
   { setHeartClick(state=>!state)
    console.log(heartClick)
    const isRepeated=wishlist.includes(hotel)
    if(!isRepeated)
    {
      dispatch(addToWishlist(hotel))
      navigate("./wishlist")
    }
    else
      dispatch(deleteFromWishlist(hotel))
    }
    else{
      dispatch(setAuthModal())
    }

  }
  return (
<div className="card shadow" style={{width:"22rem", position:"relative"}}>
  <div style={{height:"10rem"}}>
  <img className="card-img-top" style={{height:"100%"}} src={image} alt="Card image cap"/>
  </div>
  <span style={{position:"absolute",top:"2rem",right:"2rem"}}><i className={`${heartClick ?`heart`:``} bi bi-heart-fill`}
  onClick={ handleWishlist}></i></span>
  <div className="card-body p-sm-3"onClick={handleHotelCardClick}>
    <div className="d-flex justify-content-between mb-sm-1" style={{color:"#363030"}}>
    <h5 className="card-title">{address},{state}</h5>
    <h5><i className="bi bi-star-fill"></i>{rating}</h5>
    </div>
    <h6 className="card-subtitle mb-2 text-muted">{name}</h6>
    <div className="d-flex justify-content-start mt-sm-3 align-items-end">
        <h5> Rs {price}</h5>
        <h6 className="card-subtitle mb-2 text-muted"style={{marginLeft:"0.3rem"}}>night</h6>
    </div>
  </div>
</div>
  )
}

export default HotelCard
