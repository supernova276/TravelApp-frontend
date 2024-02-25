const initalState={
    destination:"",
    geusts:0,
    checkInDate:null,
    checkOutDate:null,
    isModalOpen:false,
    isSearchResultOpen:true,

}
export const searchReducer=(state=initalState,action)=>{

    const{type,payload}=action;
    switch(type){

        case  "OPEN_SEARCH_MODAL":
            return {
                ...state,
                isModalOpen:!state.isModalOpen
            }

        case "CHECK_IN_DATE":
            return {
                ...state,
                checkInDate:payload
            }
        case "CHECK_OUT_DATE":
            return{
                ...state,
                checkOutDate:payload
            }

        case "SET_DESTINATION":
            return{
                ...state,
                destination:payload
            }

        case "SET_GEUSTS":
            return{
                ...state,
                geusts:payload
            }
        
        case "DATE_FOCUS":
            return{
                ...state,
                isSearchResultOpen:false
            }

        case "SHOW_SEARCH_RESULT":
            return{
                ...state,
                isSearchResultOpen:true
            }

        case "CLOSE_SEARCH_MODAL":
            return{
                ...state,
                isModalOpen:!state.isModalOpen

            }

            default: return state;

    }
}