export const setModalState=()=>{
    return (dispatch)=>{

        dispatch({
            type:"MODAL_OPEN"
        })
    }
}

export const setMinPrice=(newValue,priceRange,minDifference)=>{
    return (dispatch)=>{
        dispatch({
            type:"MINIMUM_PRICE",
            payload:{
                newValue,
                priceRange,
                minDifference
            }
        })
    }
}

export const setMaxPrice=(newValue,priceRange,minDifference)=>{
    return (dispatch)=>{
        dispatch({
            type:"MAXIMUM_PRICE",
            payload:{
                newValue,
                priceRange,
                minDifference
            }
        })
    }
}

export const setNumberOfBathrooms=(number)=>{
    return (dispatch)=>{
        dispatch({
            type:"BATHROOMS",
            payload:number
        })
    }
}

export const setNumberOfBeds=(number)=>{
    return (dispatch)=>{
        dispatch({
            type:"BEDS",
            payload:number
        })
    }
}

export const setNumberOfROOMS=(number)=>{
    return (dispatch)=>{
        dispatch({
            type:"ROOMS",
            payload:number
        })
    }
}

export const setProperptyType=(type)=>{
    return (dispatch)=>{
        dispatch({
            type:"PROPERTY",
            payload:type
        })
    }
}

export const setRatings=(rating)=>{
    return (dispatch)=>{
        dispatch({
            type:'RATINGS',
            payload:rating
        })
    }
}

export const clearAll=()=>{
    return (dispatch)=>{
        dispatch({
            type:'CLEAR'
        })
    }
}

export const checkCancelable=(isCancelabe)=>{
    return (dispatch)=>{
        dispatch({
            type:'CANCEL',
            payload:isCancelabe
        })
    }
}

