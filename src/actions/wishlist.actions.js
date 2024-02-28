import axios from 'axios'

export const addToWishlist=(hotel)=>{

    return (dispatch)=>{

        dispatch({

            type:"ADD_HOTEL",
            payload:hotel
        })

    }
}

export const deleteFromWishlist=(hotel)=>{

    return (dispatch)=>{

        dispatch({

            type:"DELETE_HOTEL",
            payload:hotel
        })

    }
}