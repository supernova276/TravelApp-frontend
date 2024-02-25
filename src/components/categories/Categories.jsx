import React, { useEffect, useState } from 'react'
import { getCategories } from '../../actions/service.actions'
import  './Categories.css'
import { useCategory } from '../../context/categories'
import { useDispatch, useSelector } from 'react-redux'

const Categories = () => {

    const dispatch=useDispatch()
    const{hotelCategory,setHotelCategory}=useCategory()

    const categories=useSelector(state=>state.service.categories)
    const[numberOfCategoriesToShow,setNumberOfCategoriesToShow]=useState(0)

    useEffect(()=>{
      
       dispatch(getCategories())
   
    },[numberOfCategoriesToShow])

    const handleCategory=(category)=>{

           setHotelCategory(category)
    }

    const handleLeftCategory=()=>{
        
        setNumberOfCategoriesToShow(prev=>prev-10)
    }
    const handleRightCategory=()=>{
    
        setNumberOfCategoriesToShow(prev=>prev+10)

    }
  return (
    <div className='d-flex justify-content-between category-container gap-lg'>

          {numberOfCategoriesToShow+10>categories.length &&
            <button onClick={handleLeftCategory}><i className="bi bi-arrow-left arrow"></i></button>}

          {  categories.map(({_id,category})=>{
                return <div className={`category ${category===hotelCategory ? `category-underline`:``}`} key={_id} onClick={()=>handleCategory(category)}>{category}</div>
            })
        }
           
            {   numberOfCategoriesToShow-10<=categories.length &&
                <button onClick={handleRightCategory}><i className="bi bi-arrow-right arrow"></i></button>  }
    </div>
  )
}

export default Categories
