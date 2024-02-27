const initialState={
    isFilterModalOpen:false,
    priceRange:[300,20000],
    numberOfBathrooms:"Any",
    numberOfBeds:"Any",
    numberOfRooms:"Any",
    PropertyType:"Any",
    rating:"Any",
    isCancelable:true
}

export const FilterReducer=(state=initialState,action)=>{

    const{type,payload}=action
    switch(type){

        case 'MODAL_OPEN':
            return{
                ...state,
                isFilterModalOpen:!state.isFilterModalOpen
            }
        case 'MINIMUM_PRICE':
            return{
                ...state,
                priceRange:[Math.min(payload.newValue[0],payload.priceRange[1]-payload.minDifference),payload.priceRange[1]]

            }
        case 'MAXIMUM_PRICE':
            return{
                ...state,
                priceRange:[payload.priceRange[0],Math.max(payload.newValue[1],payload.priceRange[0]+500)]
            }
        case 'BATHROOMS':
            return{
                ...state,
                numberOfBathrooms:payload==="ANY"?payload:Number(payload)
            }

        case 'BEDS':
            return{
                ...state,
                numberOfBeds:payload==="ANY"?payload :payload==="5+"? 5 : Number(payload),
            }

        case 'ROOMS':
            return{
                ...state,
                numberOfRooms:payload==="ANY"?payload:payload==="5+"?5:Number(payload),
            }

        case 'PROPERTY':
            return{
                ...state,
                PropertyType:payload
            }

        case 'RATINGS':
            return{
                ...state,
                rating:payload
            }
        
        case 'CANCEL':
            return{
                ...state,
                isCancelable:payload
            }

        case 'CLEAR':
            return{
                ...state,
                priceRange:[300,20000],
                numberOfBathrooms:"Any",
                numberOfBeds:"Any",
                numberOfRooms:"Any",
                PropertyType:"Any",
                rating:"Any",
                isCancelable:true

            }

        default: return state;
    }
}