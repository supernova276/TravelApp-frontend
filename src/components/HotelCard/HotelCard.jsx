import { useNavigate } from "react-router"


const HotelCard = ({hotel}) => {

  const { _id,name,image,address,state,rating,price}=hotel
  const navigate=useNavigate()

  const handleHotelCardClick=()=>{

   navigate(`/hotels/${name}/${state}/${address}/${_id}`)

  }

  return (
<div className="card shadow" style={{width:"22rem", position:"relative"}} onClick={handleHotelCardClick}>
  <div style={{height:"10rem"}}>
  <img className="card-img-top" style={{height:"100%"}} src={image} alt="Card image cap"/>
  </div>
  <span style={{position:"absolute",top:"2rem",right:"2rem"}}><i className="bi bi-heart-fill" style={{fontSize:"1.5rem",color:"#dc2626"}}></i></span>
  <div className="card-body p-sm-3">
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
