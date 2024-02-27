export const getHotelsByCancelation=(hotels,isCancelable)=>{
    if(isCancelable==='Any'){
        return hotels;
    }
    const filteredData=hotels.filter(hotel=>hotel.isCancelable===isCancelable)
    return filteredData
}

