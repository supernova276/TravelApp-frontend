import React, { useEffect, useState } from 'react'
import { getCategories } from '../../api/hotels'
import  './Categories.css'
import { useCategory } from '../../context/categories'

const Categories = () => {

    const{hotelCategory,setHotelCategory}=useCategory()
    const[categories,setCategories]=useState([])
    const[numberOfCategoriesToShow,setNumberOfCategoriesToShow]=useState(0)

    useEffect(()=>{
    
      ( async()=>{

       try{ 
        const {data}=await getCategories()
       const categoriesToShow=data.slice(numberOfCategoriesToShow,numberOfCategoriesToShow+10)
       setCategories(categoriesToShow)
}
catch(err){
    console.log(err)
}
      })();
   
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
