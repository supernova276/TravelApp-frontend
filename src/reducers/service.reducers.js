const initalState={
    hotelByCategory:[],
    first16Hotels:[],
    categories:[],
    TenCategories:[],
    hotelById:[]

}
export const serviceReducer=(state=initalState,action)=>{

    const{payload,type}=action

    switch(type){
        case "GET_HOTEL_BY_CATEGORY":
            return{
                ...state,
                hotelByCategory:payload
            }

        case "GET_FIRST_16_HOTEL":
            return{
                ...state,
                first16Hotels:payload

            }

        case "GET_FIRST_10_CATEGORIES":
            return{
                ...state,
                TenCategories:payload
            }

        case "GET_CATEGORIES":
            return{
                ...state,
                categories:payload
            }

        case "GET_HOTEL_BY_ID":
            return{
                ...state,
                hotelById:payload
            }
        default: return state;
    }

}