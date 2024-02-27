import React, { useEffect, useState } from 'react'
import { getCategories } from '../../actions/service.actions'
import  './Categories.css'
import { useCategory } from '../../context/categories'
import { useDispatch, useSelector } from 'react-redux'
import {setModalState} from '../../actions/filter.actions'
import Filters from '../filters/Filters'

const Categories = () => {

    const dispatch=useDispatch()
    const{hotelCategory,setHotelCategory}=useCategory()

    const data=useSelector(state=>state.service.categories)
    const TenCategories=useSelector(state=>state.service.TenCategories)
    const[categories,setCategories]=useState([])
    const[numberOfCategoriesToShow,setNumberOfCategoriesToShow]=useState(0)
    const isModalOpen=useSelector(state=>state.filter.isFilterModalOpen)

    useEffect(()=>{
       dispatch(getCategories())
    },[])

    useEffect(()=>{
      setCategories(TenCategories)
    },[TenCategories])

    useEffect(()=>{
     
      const categoriesToShow=data.slice(numberOfCategoriesToShow,numberOfCategoriesToShow+10)
      setCategories(categoriesToShow)

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

    const handleFilterModal=()=>{
      dispatch(setModalState())
      console.log("hello iside filterom")
    }
  return (
    <div className=' category-container'>
      <div className='d-flex  categories justify-content-between gap-sm'>

          {numberOfCategoriesToShow+10>categories.length &&
            <button onClick={handleLeftCategory}><i className="bi bi-arrow-left arrow"></i></button>}

          {    
          categories.map(({_id,category})=>{
                return <div className={`category ${category===hotelCategory ? `category-underline`:``}`} key={_id} onClick={()=>handleCategory(category)}>{category}</div>
            })
        }
           
            {   numberOfCategoriesToShow-10<=categories.length &&
                <button onClick={handleRightCategory}><i className="bi bi-arrow-right arrow"></i></button>  
            }
        </div>
           <button className='d-flex btn-filter justify-content-center gap-sm'onClick={handleFilterModal}>
            <span className='material-symbols-outlined'>filter_alt</span>
            <span>Filter</span>
           </button>
           {isModalOpen && <Filters/>}
    </div>
  )
}

export default Categories
