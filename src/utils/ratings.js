export const getHotelsByRatings=(hotels,rating)=>{
    if(rating==='Any'){
        return hotels;
    }
    const filteredData=hotels.filter(hotel=>hotel.rating>=rating)
    return filteredData
}

