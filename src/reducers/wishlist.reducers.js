import Wishlist from "../Pages/wishlist/Wishlist"

const initalState={
    wishList:[]
}

export const wishListReducer=(state=initalState,action)=>{

    const {type,payload}=action

    switch(type){

        case "ADD_HOTEL":
            return{
                  
                wishList:[...state.wishList,payload]
            }

        case "DELETE_HOTEL":
               
                return{
                    wishList:state.wishList.filter(Wishlist=>Wishlist!==payload)
                }
            
        default:return state;
    }
    
}