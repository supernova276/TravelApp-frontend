export const getHotelsByRoomsAndBeds=(hotels,noOfBathrooms,noOfBeds,noOfRooms)=>{


    if(noOfBathrooms==="Any" || noOfBeds==="Any" || noOfRooms==="Any"){
      return hotels
    }
    const filteredData=hotels.filter(({numberOfBathrooms,numberOfBedrooms,numberOfBeds})=>{
    
        return Number(numberOfBathrooms)===noOfBathrooms || Number(numberOfBedrooms)===noOfRooms || Number(numberOfBeds)===noOfBeds
    })
  return filteredData
}