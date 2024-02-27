export const getHotelsByPropertyType=(hotels,propType)=>{
    
    if(propType==='Any'){
        return hotels}
    const filteredData=hotels.filter(hotel=>hotel.propertyType===propType)
    return filteredData
}

