export const setSearchModal=()=>{

    return async(dispatch)=>{
        dispatch({
            type:"OPEN_SEARCH_MODAL"
        })
    }
}
export const setDate=(checkIntype,date)=>{
    return async(dispatch)=>{
        dispatch({
            type: checkIntype==="in"?"CHECK_IN_DATE":"CHECK_OUT_DATE",
            payload:date
        })
    }
}

export const setDestination=(destination)=>{
    
    return async(dispatch)=>{
        dispatch({
            type:"SET_DESTINATION",
            payload:destination
        })
    }
}

export const setGeusts=(geusts)=>{
    return async(dispatch)=>{
        dispatch({
            type:"SET_GEUSTS",
            payload:geusts
        })
    }
}

export const setDateFocus=()=>{
    return (dispatch)=>{
        dispatch({
            type:"DATE_FOCUS"
        })
    }
}

export const setShowSearchResult=()=>{
    return(dispatch)=>{
        dispatch({
            type:"SHOW_SEARCH_RESULT"
        })
    }
}