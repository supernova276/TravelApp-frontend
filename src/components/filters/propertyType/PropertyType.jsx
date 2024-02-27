import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {v4 as uuid} from "uuid"
import {setProperptyType} from '../../../actions/filter.actions'

const propertyType=[{id:uuid(),type:"House"},
{id:uuid(),type:" Geust House"},
{id:uuid(),type:"Flat"},
{id:uuid(),type:"Hotel"}]

const PropertyType = () => {

  const dispatch=useDispatch()
  const propType=useSelector(state=>state.filter.PropertyType)
 
  const handlePropertyType=(type)=>{
     dispatch(setProperptyType(type))
  }
  return (
    <div className='filter-container'>
        <span className='filter-label'>Property  Type</span>
        <div className='d-flex gap-lg'style={{marginTop:"2rem"}}>
            {
                propertyType.map(({id,type})=><span  className={`span-label property-type d-flex align-items-center justify-content-center 
                on-hover ${propType===type?`selected`:``}`} onClick={()=>handlePropertyType(type)}  key={id}>{type}</span>)
            }
        </div>
      
    </div>
  )
}

export default PropertyType
